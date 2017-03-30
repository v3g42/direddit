package com.vivekadtiya.diggit.dao;

import com.vivekadtiya.diggit.models.Topic;

import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * TopicSet datastructure has a TreeSet to keep the inserted elements ordered
 * Also maintains a hashmap indexing topic with an id
 *
 */
public class TopicSet {

    TreeSet<Topic> treeSet;
    HashMap<Integer, Topic> index;
    Set synchronizedSet;
    AtomicInteger counter;

    /**
     * Initialises the counter for maintaing ids, treeset and synchronised set
     * Treeset doesn't support multithreading, hence the usage of synchronised set.
     */
    public TopicSet() {
        counter = new AtomicInteger(0);
        treeSet = new TreeSet();
        synchronizedSet = Collections.synchronizedSet(treeSet);
        index = new HashMap<>();
    }

    /**
     *
     * @return Size of the set
     */
    public int size() {
        return synchronizedSet.size();
    }

    /**
     * Increments the counter and adds to the treeset
     * @param text text to be added
     * @return Topic with its associated id stored
     */
    public Topic add(String text) {
        int currentId = counter.incrementAndGet();
        Topic topic = new Topic(text, currentId);
        index.put(currentId, topic);
        // This will always return true as two topics are never deemed equal
        synchronizedSet.add(topic);
        return topic;
    }

    /**
     *
     * @param id Topic ID
     * @return Returns the Topic stored in the hashmap
     */
    public Topic get(int id) {
        return index.get(id);
    }

    /**
     * Increments the atomic integer on topic.upvotes
     * @param id Topic ID
     * @return true if success,false if topic doesnt exist
     */
    public boolean upvote(int id) {
        Topic topic = get(id);
        if(topic == null) return false;

        topic.incrUpvotes();
        return true;
    }


    /**
     * Increments the atomic integer on topic.downvotes
     * @param id Topic ID
     * @return true if success,false if topic doesnt exist
     */
    public boolean downvote(int id) {
        Topic topic = get(id);
        if(topic == null) return false;

        topic.incrDownvotes();
        return true;
    }

    /**
     *
     * @return The top 20 topics in the order of upvotes
     */
    public List<Topic> hotTopics() {
        LinkedList<Topic> list = new LinkedList<>();
        Iterator<Topic> iter = synchronizedSet.iterator();
        int c = 0, n = 20;
        while (c<n  && iter.hasNext()) {
            list.add(iter.next());
            c++;
        }
        return list;
    }
}
