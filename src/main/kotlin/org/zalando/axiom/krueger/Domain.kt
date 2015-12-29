package org.zalando.axiom.krueger

import com.google.common.collect.EvictingQueue
import io.vertx.core.json.JsonObject
import java.time.LocalDateTime
import java.util.*

data class Application(val applicationId: String, val ip: String)

data class ApplicationGroup(val applicationId: String, val applications: Set<Application>)

data class TimeSeriesData(val data: JsonObject, val timestamp: LocalDateTime = LocalDateTime.now())

data class TimeSeriesSource(val application: Application, val source: String, val timeSeriesData: EvictingQueue<TimeSeriesData> = EvictingQueue.create<TimeSeriesData>(1000))

data class TimeSeriesSources(val application: Application, val sourceToData: MutableMap<String, TimeSeriesSource> = HashMap()) {
    fun add(application: Application, source: String, timeSeriesData: TimeSeriesData) {
        sourceToData.getOrPut(source, { TimeSeriesSource(application, source) }).timeSeriesData.add(timeSeriesData)
    }
}
