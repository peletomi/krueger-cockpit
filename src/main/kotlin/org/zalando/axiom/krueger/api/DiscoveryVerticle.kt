package org.zalando.axiom.krueger.api

import io.vertx.core.AbstractVerticle
import org.zalando.axiom.krueger.logging.logger
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.discovery.Discovery
import org.zalando.axiom.krueger.service.discovery.DiscoveryFactory
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get


class DiscoveryVerticle(val discoveryFactory: DiscoveryFactory = Injekt.get(), val discoveryService: DiscoveryService = Injekt.get()) : AbstractVerticle() {

    override fun start() {
        vertx.setPeriodic(discoveryService.discoveryPeriod) { id ->
            val discoveredApplications = discoveryFactory.getDiscoveryMethods().flatMap { discovery -> discovery.discover() }
            discoveryService.addDiscoveredIps(discoveredApplications)
        }
    }

}
