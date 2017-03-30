package com.vivekadtiya.diggit;

import static spark.Spark.*;

/**
 * SparkMain class serving all routes using SparkJava
 */
public class SparkMain {
    public static void main(String[] args) {

        String env = System.getProperty("environment");
        System.out.println("ENvironment: " + env);
        // This will let static files reload on refresh without build
        if (env.equals("development")) {

            String projectDir = System.getProperty("user.dir");
            String staticDir = "/frontend/";
            staticFiles.externalLocation(projectDir + staticDir);
        } else {
            staticFiles.location("frontend/");
        }

        port(9090); // Spark will run on port 9090

        // Adding gzip support
        after((request, response) -> {
            response.header("Content-Encoding", "gzip");
        });

        get("/hello", (req, res) -> "Hello World");
    }
}
