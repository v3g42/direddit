package com.vivekadtiya.diggit.models;


import java.util.concurrent.atomic.AtomicInteger;

/**
 * Data Structure for each topic created
 */
public class Topic  implements Comparable<Topic> {
    String text;
    Integer id;
    AtomicInteger upvotes;
    AtomicInteger downvotes;

    /**
     *
     * @param text text
     * @param id unique id
     */
    public Topic(String text, int id) {
        if(text.length()>255 || text.length()<0) throw new IllegalArgumentException("text lenhth can be between 1 and 255");
        this.id = id;
        this.text = text;
        this.upvotes = new AtomicInteger(0);
        this.downvotes  = new AtomicInteger(0);
    }

    public Integer getId() {
        return id;
    }

    public void incrUpvotes() {
        this.upvotes.incrementAndGet();
    }

    public void incrDownvotes() {
        this.downvotes.incrementAndGet();
    }

    public String getText() {
        return text;
    }

    public int getUpvotes() {
        return upvotes.get();
    }

    public int getDownvotes() {
        return downvotes.get();
    }

    /**
     *
     * @param o Topic to compare against
     * @return if greater returns 1 or -1 (Cannot return 0 as two topics will be deemed equal)
     */
    @Override
    public int compareTo(Topic o) {
        if(this.getUpvotes() > o.getUpvotes()) {
            return 1;
        } else {
            return -1;
        }
    }
}
