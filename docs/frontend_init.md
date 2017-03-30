#### Frontend Project

Using [Fountain](1) to generate a boilerplate for frontend project.

```
npm install -g yo generator-fountain-webapp
cd $PROJECT_DIR/src/main/resources/frontend

yo fountain-webapp
node_modules/.bin/jspm install jquery bootstrap
```

I picked the follow tools/libraries and initialized a TODO MVC project.
- JSPM with SystemJS
- AngularJS 1
- latest Javascript with babel

Most of the boilerplate can be removed depending on the requirement 
but it gives a well defined project structure to go forward with.

1: http://fountainjs.io/