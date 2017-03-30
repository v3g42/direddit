export class TopicService {
  constructor() {
    this.topics = [];
  }

  addTopic(text) {
    if(!text || text.length>255 ) throw new Error("text should between 0 and 255");
    var topic = {
      id: this.topics.length,
      text: text,
      upvotes: 0,
      downvotes: 0
    };
    this.topics.push(topic);
    return topic;
  }

  getTopic(topicId) {
    let i = 0;
    while (i<this.topics.length) {
      if(this.topics[i].id === topicId) {
        console.log(this.topics[i]);
        return this.topics[i];
      }
      i++;
    }
  }

  downvote(topicId) {
    let topic = this.getTopic(topicId);
    topic.downvotes = topic.downvotes + 1;
  }

  upvote(topicId) {
    let topic = this.getTopic(topicId);
    topic.upvotes = topic.upvotes + 1;
  }

  getTopics() {
    return this.topics;
  }
}

