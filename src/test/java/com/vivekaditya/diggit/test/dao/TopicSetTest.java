package com.vivekaditya.diggit.test.dao;

import com.vivekadtiya.diggit.models.TopicSet;
import com.vivekadtiya.diggit.models.Topic;
import org.junit.Test;

import java.util.Iterator;

import static org.junit.Assert.*;

/**
 * Created by vivek on 30/3/17.
 */
public class TopicSetTest {
    @Test
    public void addTopicAndCheckSize() {
        TopicSet topicSet = new TopicSet();
        topicSet.add("hello");
        assertEquals(topicSet.size(),1);
    }

    @Test
    public void addDuplicateTopic() {
        TopicSet topicSet = new TopicSet();
        topicSet.add("hello");
        topicSet.add("hello");
        assertEquals(topicSet.size(), 2);
    }

    @Test
    public void addShouldIncrementCounter() {
        TopicSet topicSet = new TopicSet();
        Topic topic1 = topicSet.add("hello");
        Topic topic2  = topicSet.add("hello");
        assertTrue((topic1.getId() + 1) == topic2.getId());
    }

    @Test
    public void getShouldRetrieveTopic() {
        TopicSet topicSet = new TopicSet();
        Topic topic = topicSet.add("hello");
        assertTrue((topic.equals(topicSet.get(topic.getId()))));
    }

    @Test
    public void getHotTopicsIfLessThan20() {
        TopicSet topicSet = new TopicSet();
        for(int i=0; i < 10; i++) {
            topicSet.add("hello");
        }
        assertEquals(topicSet.hotTopics().size(), 10);
    }


    @Test
    public void getHotTopics() {
        TopicSet topicSet = new TopicSet();
        for(int i=0; i < 25; i++) {
            topicSet.add("hello");
        }

        assertEquals(20, topicSet.hotTopics().size());
    }

    @Test
    public void mustReturnInSorted() {
        TopicSet topicSet = new TopicSet();
        Topic topic1 =  topicSet.add("hello 1");
        topicSet.upvote(topic1.getId());

        Topic topic2 =  topicSet.add("hello 2");
        topicSet.upvote(topic2.getId());
        topicSet.upvote(topic2.getId());
        Iterator<Topic> iter = topicSet.hotTopics().listIterator();
        Topic first = iter.next();
        boolean sorted = true;
        while(iter.hasNext()) {
            Topic current = iter.next();
            sorted = sorted & (first.getUpvotes() > current.getUpvotes());
            first = current;
        }
        assertTrue(sorted);
    }
}
