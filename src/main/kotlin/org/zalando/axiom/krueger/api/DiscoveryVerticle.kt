package org.zalando.axiom.krueger.api

import io.vertx.core.AbstractVerticle
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.discovery.Discovery
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get


class DiscoveryVerticle(val discovery: Discovery = Injekt.get(), val discoveryService: DiscoveryService = Injekt.get()) : AbstractVerticle() {

    override fun start() {
        vertx.setPeriodic(discoveryService.discoveryPeriod) { id ->
            discoveryService.addDiscoveredIps(discovery.discover())
        }
    }

}
