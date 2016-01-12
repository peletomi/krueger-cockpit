package org.zalando.axiom.krueger.service.discovery

import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import com.netflix.hystrix.HystrixCommand
import com.netflix.hystrix.HystrixCommandKey
import io.vertx.core.json.Json
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.util.EntityUtils
import org.zalando.axiom.krueger.Application
import org.zalando.axiom.krueger.ApplicationGroup
import org.zalando.axiom.krueger.logging.logger
import java.util.*

private fun parseApplicationNode(applicationNode: JsonNode): List<Application> {
    val result = LinkedList<Application>()

    val ip = applicationNode.get("key").asText().replace("/taupage/", "")
    val applicationData = Json.mapper.readTree(applicationNode.get("value").asText())
    val applicationId = applicationData.get("application_id").asText()

    applicationData.get("ports").fields()?.let { fields ->
        fields.forEach { field ->
            result.add(Application(applicationId, "$ip:${field.key}"))
        }
    }

    return result
}

fun parseJsonString(jsonString: String): Set<ApplicationGroup> {
    val result = HashSet<ApplicationGroup>()
    val taupageNode = Json.mapper.readTree(jsonString)
    val applicationsNode = taupageNode.get("node").get("nodes")

    val applications = applicationsNode.flatMap { parseApplicationNode(it) }
    val applicationGroups = applications.groupBy { it.applicationId }
    applicationGroups.forEach { entry -> result.add(ApplicationGroup(entry.key, entry.value.toSet())) }
    return result
}

class TaupageDiscoveryCommand(val etcdDomain: String, val mapper: ObjectMapper = ObjectMapper())
: HystrixCommand<Set<ApplicationGroup>>(HystrixCommand.Setter.withGroupKey({ "krueger" }).andCommandKey(HystrixCommandKey({ "taupageDiscovery" }))) {

    override fun run(): Set<ApplicationGroup>? {
        val result = HashSet<ApplicationGroup>()
        val etcdNodeUrl = if (etcdDomain.startsWith("http://")) "$etcdDomain/v2/keys/taupage" else "http://$etcdDomain/v2/keys/taupage"
        logger().debug("Getting data from [$etcdNodeUrl].")

        val get = HttpGet(etcdNodeUrl)
        val client = HttpClients.createDefault()

        val response = client.execute(get)
        val statusCode = response.statusLine.statusCode
        if (statusCode != 200) {
            logger().error("Could not retrieve Taupage registry! Status code [$statusCode].")
            return result
        }

        val jsonString = EntityUtils.toString(response.entity)
        return parseJsonString(jsonString)
    }

}

class TaupageDiscovery(val etcdDomain: String) : Discovery {

    override fun discover() = TaupageDiscoveryCommand(etcdDomain).execute()

}