package org.zalando.axiom.krueger.service

import io.vertx.core.json.JsonObject
import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.ApplicationData
import org.zalando.axiom.krueger.ApplicationQuery
import org.zalando.axiom.krueger.TimeSeriesSources
import java.util.*


interface StorageService {

    fun add(application: Application, source: String, value: JsonObject)

}

class TimeSeriesService(val sourceConfiguration: Map<String, Int>, val values: MutableMap<Application, TimeSeriesSources> = HashMap()) : StorageService {

    fun getByApplication(applicationQuery: ApplicationQuery) = values[applicationQuery.toApplication()]?.get(applicationQuery.source)

    override fun add(application: Application, source: String, value: JsonObject) =
            values.getOrPut(application, { TimeSeriesSources(application, sourceConfiguration) }).add(application, source, ApplicationData(value))

    val sources: Set<String>
        get() = sourceConfiguration.keys

}
