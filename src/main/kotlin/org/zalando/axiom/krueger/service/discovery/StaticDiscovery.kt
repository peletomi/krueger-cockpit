package org.zalando.axiom.krueger.service.discovery

import org.zalando.axiom.krueger.ApplicationGroup

class StaticDiscovery(val ips: Set<ApplicationGroup>) : Discovery {

    override fun discover() = ips

}