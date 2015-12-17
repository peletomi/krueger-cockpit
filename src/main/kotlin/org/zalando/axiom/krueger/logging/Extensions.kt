package org.zalando.axiom.krueger.logging

import org.apache.logging.log4j.LogManager
import org.apache.logging.log4j.Logger

fun Any.logger(): Logger {
    return LogManager.getLogger(javaClass)
}
