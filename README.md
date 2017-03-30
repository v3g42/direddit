### Diggit

This project aims to create a digg/reddit clone where users can upvote or downvote list of topics.
Sample application is deployed on Heroku. [https://direddit.herokuapp.com/](https://direddit.herokuapp.com/)

### Implementation

Breaking down into frontend and backend modules.
As we are not really worried about things like persistence and state management on the web server, 
server can be a simple embedded web server serving REST APIs and static files and a featured SPA can
be used to build the frontend.

- Java Spark (Uses an embedded Jetty server and gives a simple API to create routes.)
- AngularJS 1 

### Prerequisites

- Java 8 (IntelliJ/Eclipse)
- Maven
- node 4+ (building frontend)

### Running the application
```
mvn clean
mvn package
mvn exec:java
```

### JavaDoc
```
mvn javadoc:javadoc
```

### Deployment

```
heroku plugins:install heroku-cli-deploy

mvn clean package
heroku deploy:jar target/diggit-1.0-SNAPSHOT-jar-with-dependencies.jar
```

### Frontend
More details about frontend can be found [here](1).

```
cd frontend
npm run build
npm run serve
npm run serve:dist
npm test
```

### Data Structure Implementation

To store the values in order I have used TreeSet. And to make it multithread supported have used
`Collections.synchronizedSet`.  `AtomicInteger` counters are used to keep track of upvotes and downvotes.

##### Update
Instead of storing in a `TreeSet`, a Priority Queue/Max Heap can be maintained as items are upvoted.
As we only need K top elements there is no need to keep the whole list sorted.


#### Links
- 1: ./frontend/README.md
- 2: http://www.michaelpollmeier.com/selecting-top-k-items-from-a-list-efficiently-in-java-groovy
- 3: http://stevehanov.ca/blog/index.php?id=122



