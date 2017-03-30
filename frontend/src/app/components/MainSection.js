class MainSectionController {
  /** @ngInject */
  constructor(topicService) {
    this.topicService = topicService;
    this.newTopic = null;
  }

  addTopic(topic) {
    this.topicService.addTopic(topic);
    this.newTopic = null;
  }
}

export const MainSection = {
  templateUrl: 'src/app/components/MainSection.html',
  controller: MainSectionController,
  bindings: {
    topics: '='
  }
};
