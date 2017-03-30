class AppController {
  constructor(topicService) {
    this.topicService = topicService;
  }
}

export const App = {
  templateUrl: 'src/app/containers/App.html',
  controller: AppController
};
