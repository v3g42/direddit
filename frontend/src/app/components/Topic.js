class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }
  upvote(topicId) {
    this.topicService.upvote(topicId);
  }

  downvote(topicId) {
    this.topicService.downvote(topicId);
  }
}

export const Topic = {
  templateUrl: 'src/app/components/Topic.html',
  controller: TopicController,
  bindings: {
    topic: '='
  }
};
