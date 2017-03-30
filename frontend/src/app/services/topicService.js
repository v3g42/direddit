export class TopicService {
  constructor() {
    this.topics = [];
  }

  addTopic(topic) {
    this.topics.push({
      text: topic,
      upvotes: 0,
      downvotes: 0
    });
    return topic;
  }

  getTopics() {
    return this.topics;
  }
}

