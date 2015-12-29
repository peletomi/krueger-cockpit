package org.zalando.axiom.krueger.service.discovery;

import org.zalando.axiom.krueger.ApplicationGroup

interface Discovery {

    /**
     * Method returns a list of IPs to be monitored.
     */
    fun discover(): Set<ApplicationGroup>
}
