class AppController {
  constructor(topicService) {
    this.topicService = topicService;
    this.topics = this.topicService.getTopics();
  }
}

export const App = {
  templateUrl: 'src/app/containers/App.html',
  controller: AppController
};
