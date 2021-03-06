package org.zalando.axiom.krueger

import de.zalando.axiom.service.AppMetricsService
import io.vertx.core.DeploymentOptions
import io.vertx.core.VertxOptions
import io.vertx.core.json.Json
import io.vertx.ext.dropwizard.DropwizardMetricsOptions
import io.vertx.ext.dropwizard.Match
import io.vertx.ext.dropwizard.MatchType
import org.zalando.axiom.krueger.api.DiscoveryVerticle
import org.zalando.axiom.krueger.api.TimeSeriesReaderVerticle
import org.zalando.axiom.krueger.api.WebApiVerticle
import org.zalando.axiom.krueger.logging.logger
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.TimeSeriesService
import org.zalando.axiom.krueger.service.discovery.Discovery
import org.zalando.axiom.krueger.service.discovery.DiscoveryFactory
import org.zalando.axiom.krueger.service.discovery.StaticDiscovery
import org.zalando.axiom.krueger.service.discovery.TaupageDiscovery
import uy.klutter.vertx.VertxWithSlf4jInjektables
import uy.klutter.vertx.vertx
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.InjektMain
import uy.kohesive.injekt.api.InjektRegistrar
import uy.kohesive.injekt.api.addSingleton
import uy.kohesive.injekt.api.addSingletonFactory
import uy.kohesive.injekt.api.get

val timeSeriesSources = mapOf(
        "metrics" to 1000,
        "env" to 1,
        "properties" to 1,
        "health" to 1
)

object KruegerApplication : InjektMain() {
    @JvmStatic fun main(args: Array<String>) {
        vertx(Injekt.get<VertxOptions>()) success  { vertx ->
            vertx.deployVerticle(DiscoveryVerticle())
            vertx.deployVerticle(TimeSeriesReaderVerticle())
            vertx.deployVerticle(WebApiVerticle::class.java.name, DeploymentOptions().setInstances(8))

            Json.mapper.findAndRegisterModules()

            Injekt.registrar.addSingleton(vertx)
            logger().info("Vertx is running!")
        }
    }

    override fun InjektRegistrar.registerInjectables() {
        monitoring()
        importModule(VertxWithSlf4jInjektables)
        addSingleton(AppMetricsService())
        addSingleton(DiscoveryService())
        addSingleton(TimeSeriesService(timeSeriesSources))
        addSingleton(DiscoveryFactory())
    }


    private fun InjektRegistrar.monitoring() {
        addSingletonFactory {
            VertxOptions()
                    .setMetricsOptions(DropwizardMetricsOptions()
                            .setEnabled(true)
                            .setJmxEnabled(true)
                            .addMonitoredEventBusHandler(Match().setValue(".*").setType(MatchType.REGEX))
                            .addMonitoredHttpServerUri(Match().setValue("*"))
                            .addMonitoredHttpClientUri(Match().setValue("*"))
                            .addMonitoredHttpServerUri(Match().setValue("/.*").setType(MatchType.REGEX)))
        }
    }
}
