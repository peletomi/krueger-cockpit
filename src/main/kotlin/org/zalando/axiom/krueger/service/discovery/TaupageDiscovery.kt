package org.zalando.axiom.krueger.service.discovery

import com.fasterxml.jackson.databind.ObjectMapper
import com.netflix.hystrix.HystrixCommand
import com.netflix.hystrix.HystrixCommandKey
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.util.EntityUtils
import org.zalando.axiom.krueger.ApplicationGroup
import org.zalando.axiom.krueger.logging.logger


class TaupageDiscoveryCommand(val etcdDomain: String, val mapper: ObjectMapper = ObjectMapper())
: HystrixCommand<Set<ApplicationGroup>>(HystrixCommand.Setter.withGroupKey({ "krueger" }).andCommandKey(HystrixCommandKey({ "taupageDiscovery" }))) {

    override fun run(): Set<ApplicationGroup>? {
        val get = HttpGet("http://$etcdDomain/v2/keys/Taupage")
        val client = HttpClients.createDefault()

        val response = client.execute(get)
        val statusCode = response.statusLine.statusCode
        if (statusCode != 200) {
            logger().error("Could not retrieve Taupage registry! Status code [$statusCode].")
            return setOf()
        }

        val jsonString = EntityUtils.toString(response.entity) // TODO continue if we have working taupage - etcd discovery

        return setOf()
    }

}

class TaupageDiscovery(val etcdDomain: String) : Discovery {

    override fun discover() = TaupageDiscoveryCommand("localhost:2379").execute()

}