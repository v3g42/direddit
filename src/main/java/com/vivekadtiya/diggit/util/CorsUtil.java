package com.vivekadtiya.diggit.util;

import static spark.Spark.*;

/**
 * Utility to implement Cors
 */
public class CorsUtil {
    public static void setup() {
        options("/*",
        (request, response) -> {

            String accessControlRequestHeaders = request
            .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
            .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
    }
}
