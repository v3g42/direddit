import {TopicService} from './topicService.js';

describe('TopicService', () => {
  let topicService, topic;
  beforeEach(() => {
    topicService = new TopicService();
    topic = topicService.addTopic('Hello');

  });

  it('should add a topic', () => {
    expect(topicService.getTopics().length).toEqual(1);
  });

  it('should upvote a topic', () => {
    topicService.upvote(topic.id);
    expect(topicService.getTopic(topic.id).upvotes).toEqual(1);
  });

  it('should downvote a topic', () => {
    topicService.downvote(topic.id);
    expect(topicService.getTopic(topic.id).downvotes).toEqual(1);
  });
});
