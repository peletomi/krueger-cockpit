package org.zalando.axiom.krueger

import com.google.common.collect.EvictingQueue
import io.vertx.core.json.JsonObject
import java.time.LocalDateTime
import java.util.*

data class Application(val applicationId: String, val ip: String)

data class ApplicationGroup(val applicationId: String, val applications: Set<Application>)

data class ApplicationData(val data: JsonObject, val timestamp: String = LocalDateTime.now().toString())

data class TimeSeriesSource(val application: Application,
                            val source: String,
                            val storageSize: Int = 1000,
                            val applicationData: EvictingQueue<ApplicationData> = EvictingQueue.create<ApplicationData>(storageSize))

data class TimeSeriesSources(val application: Application, val sourceConfiguration: Map<String, Int>, val sourceToData: MutableMap<String, TimeSeriesSource> = HashMap()) {
    fun add(application: Application, source: String, applicationData: ApplicationData) {
        sourceToData.getOrPut(source, { TimeSeriesSource(application, source, sourceConfiguration[source] ?: 1) }).applicationData.add(applicationData)
    }

    fun get(source: String) = sourceToData[source]
}

data class ApplicationQuery(val applicationId: String, val ip: String, val source: String) {

    fun toApplication() = Application(applicationId, ip)

}
