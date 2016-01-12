package org.zalando.axiom.krueger.api

import de.zalando.axiom.service.AppMetricsService
import io.vertx.core.AbstractVerticle
import io.vertx.core.Future
import io.vertx.core.json.Json
import io.vertx.ext.web.Router
import io.vertx.ext.web.handler.StaticHandler
import org.zalando.axiom.krueger.ApplicationQuery
import org.zalando.axiom.krueger.service.DiscoveryService
import org.zalando.axiom.krueger.service.TimeSeriesService
import org.zalando.axiom.web.SwaggerRouter
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get

class WebApiVerticle(val port: Int = 8080,
                     val appMetricsService: AppMetricsService = Injekt.get(),
                     val discoveryService: DiscoveryService = Injekt.get(),
                     val timeSeriesService: TimeSeriesService = Injekt.get()) : AbstractVerticle() {

    override fun start(startFuture: Future<Void>?) {
        val metricsRegistry = appMetricsService.metrics

        val mainRouter = Router.router(vertx);

        // @formatter:off
        val operationRouter = SwaggerRouter.configure()
                                           .collectMetricsTo(metricsRegistry)
                                           .mapper(Json.mapper)
                                .swaggerDefinition("/operations-swagger.json")
                                    .get("/metrics") { -> appMetricsService.getApp() }
                                    .get("/metrics/statusCodes") { -> appMetricsService.getStatusCodes() }
                                    .get("/env") { -> System.getenv() }
                                    .get("/properties") { -> System.getProperties() }
                                    .get("/health") { -> "ok" }
                                .router(vertx)

        val vertxOperationRouter = SwaggerRouter.configure()
                                   .collectMetricsTo(metricsRegistry)
                                   .mapper(Json.mapper)
                        .swaggerDefinition("/vertx-operations-swagger.json")
                            .get("/metrics/vertx") { -> appMetricsService.get() }
                            .get("/metrics/eventBus") { -> appMetricsService.getEventBus() }
                        .router(vertx)

        val apiRouter = SwaggerRouter.configure()
                                   .collectMetricsTo(metricsRegistry)
                                   .mapper(Json.mapper)
                         .swaggerDefinition("/krueger-swagger.json")
                               .get("/applications") { -> discoveryService.discoveredApplications }
                               .get("/data/:applicationId/:ip/:source", ApplicationQuery::class.java) { application -> timeSeriesService.getByApplication(application) }
                         .router(vertx)
        // @formatter:on
        mainRouter.mountSubRouter("/", operationRouter)
        mainRouter.mountSubRouter("/", vertxOperationRouter)
        mainRouter.mountSubRouter("/", apiRouter)
        mainRouter.route("/*").handler(StaticHandler.create().setWebRoot("static").setCachingEnabled(false));

        val server = vertx.createHttpServer()
        server.requestHandler { requestHandler -> mainRouter.accept(requestHandler) }.listen(port)
    }
}