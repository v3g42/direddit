export class TopicService {

  constructor($http, $q) {
    this.API_URL = 'http://localhost:9090';
    this.$http = $http;
    this.$q = $q;
  }

  addTopic(text) {
    const def = this.$q.defer();
    if (!text || text.length > 255) {
      throw new Error('text should between 0 and 255');
    }
    this.$http.post(this.API_URL + '/topics', {text})
      .then(res => def.resolve(res.data));
    return def.promise;
  }

  getTopic(topicId) {
    const def = this.$q.defer();
    this.$http.get(this.API_URL + '/topics/' + topicId)
      .then(res => def.resolve(res.data));
    return def.promise;
  }

  downvote(topicId) {
    const def = this.$q.defer();
    this.$http.post(this.API_URL + '/topics/' + topicId + '/downvote')
      .then(res => def.resolve(res.data));
    return def.promise;
  }

  upvote(topicId) {
    const def = this.$q.defer();
    this.$http.post(this.API_URL + '/topics/' + topicId + '/upvote')
      .then(res => def.resolve(res.data));
    return def.promise;
  }

  getTopics() {
    const def = this.$q.defer();
    this.$http.get(this.API_URL + '/topics')
      .then((res) => def.resolve(res.data));
    return def.promise;
  }
}

