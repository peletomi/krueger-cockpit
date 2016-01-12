package org.zalando.axiom.krueger.service

import io.vertx.core.AsyncResultHandler
import io.vertx.core.Future
import org.zalando.axiom.krueger.ApplicationGroup
import java.util.*

class DiscoveryService() {

    val discoveryPeriod: Long = 5000

    private val _discoveredApplications: MutableSet<ApplicationGroup> = HashSet()
    var discoveredApplications: MutableSet<ApplicationGroup> = HashSet()
        get() {
            synchronized(_discoveredApplications) {
                return _discoveredApplications
            }
        }

    fun addDiscoveredIps(discoveredApplications: Iterable<ApplicationGroup>) {
        synchronized(_discoveredApplications) {
            _discoveredApplications.clear()
            _discoveredApplications.addAll(discoveredApplications)
        }
    }

    fun getDiscoveredApplications(handler: AsyncResultHandler<Set<ApplicationGroup>>) {
        handler.handle(Future.succeededFuture(discoveredApplications))
    }

}