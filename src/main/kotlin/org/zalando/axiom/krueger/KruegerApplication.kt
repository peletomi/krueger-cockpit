package org.zalando.axiom.krueger

import de.zalando.axiom.service.AppMetricsService
import io.vertx.core.DeploymentOptions
import io.vertx.core.VertxOptions
import io.vertx.ext.dropwizard.DropwizardMetricsOptions
import io.vertx.ext.dropwizard.Match
import io.vertx.ext.dropwizard.MatchType
import org.zalando.axiom.krueger.api.WebApiVerticle
import org.zalando.axiom.krueger.logging.logger
import uy.klutter.vertx.VertxWithSlf4jInjektables
import uy.klutter.vertx.vertx
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.InjektMain
import uy.kohesive.injekt.api.InjektRegistrar
import uy.kohesive.injekt.api.addSingleton
import uy.kohesive.injekt.api.addSingletonFactory
import uy.kohesive.injekt.api.get

object KruegerApplication : InjektMain() {
    @JvmStatic fun main(args: Array<String>) {
        vertx(Injekt.get<VertxOptions>()) success  { vertx ->
            vertx.deployVerticle(WebApiVerticle::class.java.name, DeploymentOptions().setInstances(8))
            Injekt.registrar.addSingleton(vertx)
            logger().info("Vertx is running!")
        }
    }

    override fun InjektRegistrar.registerInjectables() {
        monitoring()
        importModule(VertxWithSlf4jInjektables)
        addSingleton(AppMetricsService())
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
