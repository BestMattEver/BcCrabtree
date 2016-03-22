
// var tabbyApp = angular.module('tabbyApp', ['ngRoute']);

var bcApp = angular.module('bcApp', ['ngRoute']);

  bcApp.config(function($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/lrgPaintings.html',
    })
    .when('/lrgPainting', {
      templateUrl: 'views/lrgPaintings.html',
    })
    .when('/smPainting', {
      templateUrl: 'views/smPainting.html',
    })
    .when('/sketchbook', {
      templateUrl: 'views/sketchbook.html',
    })
    .when('/bio', {
      templateUrl: 'views/bio.html',
    })
    .when('/blog', {
      templateUrl: 'views/blog.html',
    })
  });//end bcapp.config
