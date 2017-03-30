package com.vivekadtiya.diggit;

import com.google.gson.JsonObject;
import com.vivekadtiya.diggit.controllers.TopicController;
import com.vivekadtiya.diggit.models.TopicSet;

import static spark.Spark.*;
import com.google.gson.Gson;
import com.vivekadtiya.diggit.models.Topic;
import com.vivekadtiya.diggit.util.CorsUtil;
import com.vivekadtiya.diggit.util.TopicComparator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import spark.Request;

/**
 * SparkMain class serving all routes using SparkJava
 */
public class SparkMain {


    public static void main(String[] args) {
        Gson gson = new Gson();

        // Initialising TopicSet
        TopicSet topicSet = new TopicSet();
        setupBasic(gson);
        setupRoutes(gson, topicSet);
    }

    static void setupRoutes (Gson gson, TopicSet topicSet) {
        TopicController.setup(gson, topicSet);
    }

    private static String requestInfoToString(Request request) {
        StringBuilder sb = new StringBuilder();
        sb.append(request.requestMethod());
        sb.append(" " + request.url());
        sb.append(" " + request.body());
        return sb.toString();
    }

    static void setupBasic (Gson gson) {
        Logger logger = LoggerFactory.getLogger(SparkMain.class);
        String env = System.getProperty("environment");

        port(9090);

        System.out.println("Environment: " + env);
        String projectDir = System.getProperty("user.dir");
        String staticDir = "/frontend/dist";
        staticFiles.externalLocation(projectDir + staticDir);
        staticFiles.externalLocation(projectDir + "/frontend/.tmp");

        // Basic logging
        before((request, response) -> {
            logger.info(requestInfoToString(request));
        });

        // Adding gzip support
        after((request, response) -> {
            response.type("application/json");
            response.header("Content-Encoding", "gzip");
        });

        // Not found
        notFound((req, res) -> {
            JsonObject json = new JsonObject();
            json.addProperty("message", "Cannot find route");
            return gson.toJson(json);
        });

        // Handling Invalid Arguments
        exception(IllegalArgumentException.class, (exception, request, response) -> {
            JsonObject json = new JsonObject();
            json.addProperty("message", exception.getMessage());
            response.body(gson.toJson(json));
        });

        // Internal Server Error
        internalServerError((req, res) -> {
            JsonObject json = new JsonObject();
            json.addProperty("message", "Something unexpected happened");
            return gson.toJson(json);
        });

    }
}
