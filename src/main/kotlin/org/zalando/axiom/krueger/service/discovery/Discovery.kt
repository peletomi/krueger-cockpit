package org.zalando.axiom.krueger.service.discovery;

import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.ApplicationGroup
import org.zalando.axiom.krueger.logging.logger
import java.util.*

interface Discovery {

    /**
     * Method returns a list of IPs to be monitored.
     */
    fun discover(): Set<ApplicationGroup>
}

class DiscoveryFactory() {

    fun getDiscoveryMethods(): List<Discovery> {
        val result = LinkedList<Discovery>()
        System.getenv("ETCD_DISCOVERY_DOMAIN")?.let { etcdUrl ->
            logger().debug("adding taupage discovery using [$etcdUrl]")
            result.add(TaupageDiscovery(etcdUrl))
        }
        System.getenv("APPLICATION_GROUP")?.let { applicationGroupString ->
            logger().debug("adding static discovery using [$applicationGroupString]")
            val applications = applicationGroupString.split(",").map { applicationGroup ->
                val parts = applicationGroup.split(":", limit = 2)
                Application(parts[0], parts[1])
            }
            val applicationGroups = applications.groupBy { it.applicationId }.map {  applicationEntry ->
                ApplicationGroup(applicationEntry.key, applicationEntry.value.toSet())
            }.toSet()
            result.add(StaticDiscovery(applicationGroups))
        }
        return result
    }
}