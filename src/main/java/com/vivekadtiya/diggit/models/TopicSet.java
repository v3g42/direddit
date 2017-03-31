package com.vivekadtiya.diggit.models;

import com.vivekadtiya.diggit.util.TopicComparator;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.PriorityBlockingQueue;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * TopicSet datastructure has a TreeSet to keep the inserted elements ordered
 * Also maintains a hashmap indexing topic with an id
 *
 */
public class TopicSet {

    ConcurrentHashMap<Integer, Topic> map;
    PriorityBlockingQueue<Topic> heap;
    AtomicInteger counter;
    final int K = 20;

    /**
     * Initialises the counter for maintaing ids and a hashmap to store the topics
     * PriorityQueue is used to get the top 20 topics
     */
    public TopicSet() {
        counter = new AtomicInteger(0);
        map = new ConcurrentHashMap<>();
        heap = new PriorityBlockingQueue<>(K, new TopicComparator());
    }

    /**
     *
     * @return Size of the set
     */
    public int size() {
        return map.size();
    }

    /**
     * Increments the counter and adds to the hashmap
     * @param text text to be added
     * @return Topic with its associated id stored
     */
    public Topic add(String text) {
        int currentId = counter.incrementAndGet();
        Topic topic = new Topic(text, currentId);
        map.put(currentId, topic);
        maintainHeap(topic);
        return topic;
    }

    private void maintainHeap(Topic item) {
        if (heap.size() < K || item.getUpvotes() > heap.peek().getUpvotes()) {
            if (heap.size() == K)
                heap.remove(heap.peek());
            heap.offer(item);
        }
    }
    /**
     *
     * @param id Topic ID
     * @return Returns the Topic stored in the hashmap
     */
    public Topic get(int id) {
        return map.get(id);
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
        heap.remove(topic);
        maintainHeap(topic);
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
        // To keep the sorting have to remove and add
        topic.incrDownvotes();
        heap.remove(topic);
        maintainHeap(topic);
        return true;
    }

    /**
     *
     * @return The top 20 topics in the order of upvotes
     */
    public List<Topic> hotTopics() {

        LinkedList<Topic> list = new LinkedList<>();
        Iterator<Topic> iter = heap.iterator();
        while (iter.hasNext()) {
            list.add(iter.next());
        }
        list.sort(new TopicComparator());
        return list;
    }
}
