import angular from 'angular';

import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css!';

import {TopicService} from './app/services/topicService.js';
import {App} from './app/containers/App.js';
import {Header} from './app/components/Header.js';
import {MainSection} from './app/components/MainSection.js';
import {Topic} from './app/components/Topic.js';

import 'angular-ui-router';
import routesConfig from './routes.js';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .service('topicService', TopicService)
  .component('app', App)
  .component('headerComponent', Header)
  .component('mainSection', MainSection)
  .component('topic', Topic);
