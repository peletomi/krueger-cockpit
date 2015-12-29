package org.zalando.axiom.krueger.api

import com.netflix.hystrix.HystrixCommand
import io.vertx.core.AbstractVerticle
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.util.EntityUtils
import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.logging.logger
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.TimeSeriesService
import uy.klutter.vertx.json.jsonObjectFromString
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get

class ReadTimeSeriesCmd(val application: Application, val source: String, val timeSeriesService: TimeSeriesService)
: HystrixCommand<Unit>(
        com.netflix.hystrix.HystrixCommandGroupKey.Factory.asKey("timeSeries"),
        com.netflix.hystrix.HystrixThreadPoolKey.Factory.asKey("readTimeSeries")) {

    override fun run() {
        val get = HttpGet("http://${application.ip}/$source")
        val client = HttpClients.createDefault()

        val response = client.execute(get)
        if (response.statusLine.statusCode == 200) {
            val jsonObject = jsonObjectFromString(EntityUtils.toString(response.entity))
            timeSeriesService.add(application, source, jsonObject)
            logger().debug("data $jsonObject")
        }
    }
}

class TimeSeriesReaderVerticle(val discoveryService: DiscoveryService = Injekt.get(), val timeSeriesService: TimeSeriesService = Injekt.get()) : AbstractVerticle() {

    override fun start() {

        vertx.setPeriodic(5000, { id ->
            discoveryService.discoveredApplications.forEach { applicationGroup ->
                applicationGroup.applications.forEach { application ->
                    logger().debug("Getting data for [$application].")
                    getTimeSeriesData(application)
                }
            }
        })

    }

    private fun getTimeSeriesData(application: Application) {
        ReadTimeSeriesCmd(application, "/metrics", timeSeriesService).execute()
    }

}
