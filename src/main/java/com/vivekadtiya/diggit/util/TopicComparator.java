package com.vivekadtiya.diggit.util;

import com.vivekadtiya.diggit.models.Topic;

import java.util.Comparator;

/**
 * Created by vivek on 31/3/17.
 */
public class TopicComparator implements Comparator<Topic> {
    @Override
    public int compare(Topic o1, Topic o2) {
        if(o1.getUpvotes() < o2.getUpvotes()) {
            return 1;
        } else if (o1.getUpvotes() > o2.getUpvotes()) {
            return -1;
        } else {
            return 0;
        }

    }
}
