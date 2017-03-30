package com.vivekadtiya.diggit.models;


import java.util.concurrent.atomic.AtomicInteger;

/**
 * Data Structure for each topic created
 */
public class Topic  {
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
        if(text == null) throw new IllegalArgumentException("text cannot be null");
        if(text.length()>255 || text.length()<0) throw new IllegalArgumentException("text length can be between 1 and 255");
        this.id = id;
        this.text = text;
        this.upvotes = new AtomicInteger(0);
        this.downvotes  = new AtomicInteger(0);
    }

    public Integer getId() {
        return id;
    }

    void incrUpvotes() {
        this.upvotes.incrementAndGet();
    }

    void incrDownvotes() {
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

    public String toString() {
        return this.getText() + ":" + this.getUpvotes() + ":" + this.getDownvotes();
    }
    @Override
    public boolean equals(Object o){
        if(o instanceof Topic){
            Topic c = (Topic)o;
            return this.id == c.id;
        }
        return false;
    }
}
