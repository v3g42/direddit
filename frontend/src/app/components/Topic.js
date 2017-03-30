'use strict';

class TopicController {
  constructor(topicService) {
    this.topicService = topicService;
  }
  upvote(topic) {
    this.topicService.upvote(topic);
  }

  downvote(topic) {
    this.topicService.downvote(topic);
  }
}

export const Topic = {
  templateUrl: 'src/app/components/Topic.html',
  controller: TopicController,
  replace: true,
  bindings: {
    topic: '='
  }
};
