package de.zalando.axiom.service

import com.codahale.metrics.Counter
import com.codahale.metrics.MetricRegistry
import com.codahale.metrics.Timer
import io.vertx.core.Vertx
import io.vertx.core.http.HttpMethod
import io.vertx.core.json.JsonObject
import io.vertx.ext.dropwizard.MetricsService
import org.apache.commons.lang.StringUtils.isNumeric
import org.apache.commons.lang.StringUtils.replace
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get
import java.lang.management.ManagementFactory
import java.util.*
import java.util.concurrent.TimeUnit

class AppMetricsService(val metrics: MetricRegistry = MetricRegistry(), val start: Long = System.currentTimeMillis()) {

    val vertx: Vertx by lazy {
        Injekt.get<Vertx>()
    }

    val metricsService: MetricsService by lazy {
        MetricsService.create(Injekt.get<Vertx>())
    }

    // "zmon.response.200.GET.checks.all-active-check-definitions.count": 10,
    fun get(): List<JsonObject> = listOf(metricsService.getMetricsSnapshot(vertx))

    fun getStatusCodes(): Map<String, Long> {
        val result = HashMap<String, Counter>()
        metrics.counters.filterTo(result) { it.key.startsWith("statusCodes.") }
        return result.mapValues { it.value.count };
    }

    fun getApp(): Map<String, Number> {
        val values = sortedMapOf<String, Number>()
        for ((name, timer: Timer) in metrics.timers) {
            addZmonTimerData(name, timer, values)
        }
        addAppStatistics(values)
        return values
    }

    fun getEventBus(): Map<String, Number> {
        val values = sortedMapOf<String, Number>()
        val metricsSnapshot = metricsService.getMetricsSnapshot(vertx.eventBus())
        for ((key, value) in metricsSnapshot) {
            if (key.startsWith("handlers") && key != "handlers") {
                val handlerData = value as JsonObject
                for ((handlerKey, handlerValue) in handlerData) {
                    if (handlerValue is Number) {
                        val mapKey = handlerKey.replace(".", "").replace("%", "thPercentile")
                        values["$key.$mapKey"] = handlerValue
                    }
                }
            }
        }
        values["messages.pending"] = metricsSnapshot.getJsonObject("messages.pending").getInteger("count")
        return values
    }

    private fun addZmonTimerData(name: String, timer: Timer, values: SortedMap<String, Number>) {
        if (name.contains("health") || name.contains("metrics")) {
            return
        }
        if (!isNumeric(name.substring(0, name.indexOf(".")))) {
            return
        }

        val namePrefix = "zmon.response.$name"
        values["$namePrefix.count"] = timer.count
        values["$namePrefix.meanRate"] = timer.meanRate
        values["$namePrefix.oneMinuteRate"] = timer.oneMinuteRate
        values["$namePrefix.fiveMinuteRate"] = timer.fiveMinuteRate
        values["$namePrefix.fifteenMinuteRate"] = timer.fifteenMinuteRate
        values["$namePrefix.snapshot.max"] = timer.snapshot.max
        values["$namePrefix.snapshot.mean"] = timer.snapshot.mean
        values["$namePrefix.snapshot.median"] = timer.snapshot.median
        values["$namePrefix.snapshot.min"] = timer.snapshot.min
        values["$namePrefix.snapshot.stdDev"] = timer.snapshot.stdDev
        values["$namePrefix.snapshot.75thPercentile"] = timer.snapshot.get75thPercentile()
        values["$namePrefix.snapshot.95thPercentile"] = timer.snapshot.get95thPercentile()
        values["$namePrefix.snapshot.98thPercentile"] = timer.snapshot.get98thPercentile()
        values["$namePrefix.snapshot.99thPercentile"] = timer.snapshot.get99thPercentile()
        values["$namePrefix.snapshot.999thPercentile"] = timer.snapshot.get999thPercentile()
    }

    fun add(method: HttpMethod, endpoint: String, statusCode: Int, millis: Long) {
        val name = "$statusCode.$method${endpoint.replace("/", ".")}"
        val timer = metrics.timer(name)
        timer.update(millis, TimeUnit.MILLISECONDS)
    }

    /*
    Code and naming borrowed from: org.springframework.boot.actuate.endpoint.SystemPublicMetrics

    https://github.com/spring-projects/spring-boot/blob/master/spring-boot-actuator/src/main/java/org/springframework/boot/actuate/endpoint/SystemPublicMetrics.java

     */
    fun addAppStatistics(values: SortedMap<String, Number>) {
        val runtime = Runtime.getRuntime()
        val classLoadingMxBean = ManagementFactory.getClassLoadingMXBean()
        val memoryUsage = ManagementFactory.getMemoryMXBean().heapMemoryUsage;
        val threadMxBean = ManagementFactory.getThreadMXBean();

        values["classes"] = classLoadingMxBean.loadedClassCount
        values["classes.loaded"] = classLoadingMxBean.totalLoadedClassCount
        values["classes.unloaded"] = classLoadingMxBean.unloadedClassCount
        values["heap"] = memoryUsage.max
        values["heap.committed"] = memoryUsage.committed
        values["heap.init"] = memoryUsage.init
        values["heap.used"] = memoryUsage.used
        values["nonheap.committed"] = memoryUsage.committed;
        values["nonheap.init"] = memoryUsage.init;
        values["nonheap.used"] = memoryUsage.used;
        values["nonheap"] = memoryUsage.max;
        values["mem"] = runtime.totalMemory() + getTotalNonHeapMemoryIfPossible()
        values["mem.free"] = runtime.freeMemory()
        values["processors"] = runtime.availableProcessors()
        values["threads"] = threadMxBean.threadCount
        values["threads.daemon"] = threadMxBean.daemonThreadCount
        values["threads.peak"] = threadMxBean.peakThreadCount
        values["threads.totalStarted"] = threadMxBean.totalStartedThreadCount
        values["uptime"] = ManagementFactory.getRuntimeMXBean().uptime
        values["instance.uptime"] = System.currentTimeMillis() - start
        values["systemload.average"] = ManagementFactory.getOperatingSystemMXBean().systemLoadAverage

        addGarbageCollectionMetrics(values)
    }

    private fun getTotalNonHeapMemoryIfPossible(): Long {
        try {
            return ManagementFactory.getMemoryMXBean().nonHeapMemoryUsage.used;
        } catch (ex: Throwable) {
            return 0;
        }
    }

    private fun addGarbageCollectionMetrics(values: SortedMap<String, Number>) {
        val garbageCollectorMxBeans = ManagementFactory.getGarbageCollectorMXBeans();
        for (garbageCollectorMXBean in garbageCollectorMxBeans) {
            val name = beautifyGcName(garbageCollectorMXBean.name);
            values["gc.$name.count"] = garbageCollectorMXBean.collectionCount;
            values["gc.$name.time"] = garbageCollectorMXBean.collectionTime;
        }
    }

    /**
     * Turn GC names like 'PS Scavenge' or 'PS MarkSweep' into something that is more
     * metrics friendly.
     * @param name the source name
     * @return a metric friendly name
     */
    private fun beautifyGcName(name: String) = replace(name, " ", "_").toLowerCase();
}