package org.zalando.axiom.krueger.api

import com.netflix.hystrix.HystrixCommand
import io.vertx.core.AbstractVerticle
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.util.EntityUtils
import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.logging.logger
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.StorageService
import org.zalando.axiom.krueger.service.TimeSeriesService
import uy.klutter.vertx.json.jsonObjectFromString
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get

class ReadDataCmd(val application: Application, val source: String, val storageService: StorageService)
: HystrixCommand<Unit>(
        com.netflix.hystrix.HystrixCommandGroupKey.Factory.asKey("dataReader"),
        com.netflix.hystrix.HystrixThreadPoolKey.Factory.asKey("readData")) {

    override fun run() {
        val get = HttpGet("http://${application.ip}/$source")
        val client = HttpClients.createDefault()

        val response = client.execute(get)
        if (response.statusLine.statusCode == 200) {
            val jsonObject = jsonObjectFromString(EntityUtils.toString(response.entity))
            storageService.add(application, source, jsonObject)
            logger().debug("data $jsonObject")
        }
    }

    override fun getFallback() {
        // no op
    }
}

interface DataReader {

    fun readData(sources: Set<String>, discoveryService: DiscoveryService, storageService: StorageService) {
        discoveryService.discoveredApplications.forEach { applicationGroup ->
            applicationGroup.applications.forEach { application ->
                logger().debug("Getting data for [$application].")
                sources.forEach { ReadDataCmd(application, it, storageService).execute() }
            }
        }
    }

}

class TimeSeriesReaderVerticle(val discoveryService: DiscoveryService = Injekt.get(),
                               val timeSeriesService: TimeSeriesService = Injekt.get()) : AbstractVerticle(), DataReader {

    override fun start() {

        vertx.setPeriodic(5000, { id ->
            readData(timeSeriesService.sources, discoveryService, timeSeriesService)
        })

    }

}
