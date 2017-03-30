package com.vivekadtiya.diggit.util;

import com.google.gson.Gson;

import java.util.Map;

/**
 * Utility class to parse body
 */
public class JsonUtil {

    public static Map<String, String> parse(String object) {
        Map<String, String> map = new Gson().fromJson(object, Map.class);
        if(map == null) {
            throw new IllegalArgumentException("body is empty");
        }
        return map;
    }
}
