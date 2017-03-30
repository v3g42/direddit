class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }
  copy(topic, res) {
    topic.upvotes = res.topic.upvotes;
    topic.downvotes = res.topic.downvotes;
  }

  upvote(topic) {
    this.topicService.upvote(topic.id)
      .then((res) => this.copy(topic, res));
  }

  downvote(topic) {
    this.topicService.downvote(topic.id)
      .then((res) => this.copy(topic, res));
  }
}

export const Topic = {
  templateUrl: 'src/app/components/Topic.html',
  controller: TopicController,
  bindings: {
    topic: '='
  }
};
