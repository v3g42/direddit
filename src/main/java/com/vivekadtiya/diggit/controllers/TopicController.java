package com.vivekadtiya.diggit.controllers;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.vivekadtiya.diggit.models.TopicSet;
import com.vivekadtiya.diggit.models.Topic;
import com.vivekadtiya.diggit.util.JsonUtil;

import java.util.Map;

import static spark.Spark.get;
import static spark.Spark.post;

/**
 * Controller exposing REST apis for topic
 */
public class TopicController {
    public static void setup(Gson gson, TopicSet topicSet) {

        get("/topics", (request, response) -> {
            return topicSet.hotTopics();
        }, gson::toJson);

        post("/topics", (request, response) -> {
            Map<String, String> map = JsonUtil.parse(request.body());
            String text = map.get("text");
            Topic topic = topicSet.add(text);
            return topic;
        }, gson::toJson);

        post("/topics/:id/upvote", (request, response) -> {
            Integer id = Integer.valueOf(request.params("id"));
            JsonObject json = new JsonObject();
            json.addProperty("success", topicSet.upvote(id));
            json.add("topic", gson.toJsonTree(topicSet.get(id)));
            return json;
        }, gson::toJson);

        post("/topics/:id/downvote", (request, response) -> {
            Integer id = Integer.valueOf(request.params("id"));
            JsonObject json = new JsonObject();
            json.addProperty("success", topicSet.downvote(id));
            json.add("topic", gson.toJsonTree(topicSet.get(id)));
            return json;
        }, gson::toJson);
    }
}
