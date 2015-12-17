package org.zalando.axiom.krueger.api

import de.zalando.axiom.service.AppMetricsService
import io.vertx.core.AbstractVerticle
import io.vertx.core.Future
import io.vertx.core.json.Json
import io.vertx.ext.web.Router
import org.zalando.axiom.web.SwaggerRouter
import uy.kohesive.injekt.Injekt
import uy.kohesive.injekt.api.get

class WebApiVerticle(val appMetricsService: AppMetricsService = Injekt.get()) : AbstractVerticle() {

    override fun start(startFuture: Future<Void>?) {
        val metricsRegistry = appMetricsService.metrics

        val mainRouter = Router.router(vertx);

        // @formatter:off
        val operationRouter = SwaggerRouter.configure()
                                           .collectMetricsTo(metricsRegistry)
                                           .mapper(Json.mapper)
                                .swaggerDefinition("/operations-swagger.json")
                                .bindTo("/metrics")
                                    .get { -> appMetricsService.getApp() }
                                    .doBind()
                                .bindTo("/metrics/statusCodes")
                                    .get { -> appMetricsService.getStatusCodes() }
                                .doBind()
                                .bindTo("/metrics/vertx")
                                    .get { -> appMetricsService.get() }
                                .doBind()
                                .bindTo("/metrics/eventBus")
                                    .get { -> appMetricsService.getEventBus() }
                                .doBind()
                                .bindTo("/env")
                                    .get { -> System.getenv() }
                                .doBind()
                                .bindTo("/properties")
                                    .get { -> System.getProperties() }
                                .doBind()
                                .bindTo("/health")
                                    .get { -> "ok" }
                                .doBind()
                                .router(vertx)
        // @formatter:on
        mainRouter.mountSubRouter("/", operationRouter)

        val server = vertx.createHttpServer()
        server.requestHandler { requestHandler -> mainRouter.accept(requestHandler) }.listen(8080)
    }
}