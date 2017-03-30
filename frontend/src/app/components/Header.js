class HeaderController {
  /** @ngInject */
  constructor(topicService) {
    this.topicService = topicService;
  }
}

export const Header = {
  templateUrl: 'src/app/components/Header.html',
  controller: HeaderController
};
