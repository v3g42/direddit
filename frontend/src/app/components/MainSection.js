class MainSectionController {
  /** @ngInject */
  constructor(topicService) {
    this.topicService = topicService;
    this.newTopic = null;
    this.getTopics();
  }

  /**
   * Calls the server with the new topic and adds it to the top of the list
   * @param topic
     */
  addTopic(topic) {
    this.processing = true;
    this.topicService.addTopic(topic).then((t) => {
      this.topics.unshift(t);
      this.newTopic = null;
      this.processing = false;
    }, () => {
      this.processing = false;
    });
  }
  getTopics() {
    this.processing = true;
    this.topicService.getTopics().then((topics) => {
      this.processing = false;
      this.topics = topics;
    }, () => {
      this.processing = false;
    });
  }
}

export const MainSection = {
  templateUrl: 'src/app/components/MainSection.html',
  controller: MainSectionController,
  bindings: {
    topics: '='
  }
};
