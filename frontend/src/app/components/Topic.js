class TopicController {
  /** @ngInject */
  constructor(topicService) {
    this.topicService = topicService;
  }
  copy(topic, res) {
    topic.upvotes = res.topic.upvotes;
    topic.downvotes = res.topic.downvotes;
    this.processing = false;
  }

  upvote(topic) {
    this.processing = true;
    this.topicService.upvote(topic.id)
      .then((res) => this.copy(topic, res), () => {
        this.processing = false;
        window.alert("cannot upvote");
      });
  }

  downvote(topic) {
    this.topicService.downvote(topic.id)
      .then((res) => this.copy(topic, res), () => {
        this.processing = false;
        window.alert("cannot upvote");
      });
  }
}

export const Topic = {
  templateUrl: 'src/app/components/Topic.html',
  controller: TopicController,
  bindings: {
    topic: '='
  }
};
