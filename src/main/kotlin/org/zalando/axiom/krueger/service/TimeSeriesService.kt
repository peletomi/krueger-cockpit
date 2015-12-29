package org.zalando.axiom.krueger.service

import io.vertx.core.json.JsonObject
import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.TimeSeriesData
import org.zalando.axiom.krueger.TimeSeriesSources
import java.util.*


class TimeSeriesService(val values: MutableMap<Application, TimeSeriesSources> = HashMap()) {

    fun getByApplication(application: Application) = values[application]

    fun add(application: Application, source: String, value: JsonObject) =
            values.getOrPut(application, { TimeSeriesSources(application) }).add(application, source, TimeSeriesData(value))
}
