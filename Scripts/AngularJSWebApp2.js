var AngularJSWebApp2 = angular.module('AngularJSWebApp2', ['ngRoute','ngCookies']);
AngularJSWebApp2.controller('BaseController',BaseController);
AngularJSWebApp2.controller('LoginController',LoginController);
AngularJSWebApp2.controller('RegisterController',RegisterController);
AngularJSWebApp2.controller('ValuesController', ValuesController);
AngularJSWebApp2.service('SessionService',SessionService);
AngularJSWebApp2.factory('LoginFactory',LoginFactory);
AngularJSWebApp2.factory('RegisterFactory',RegisterFactory);
AngularJSWebApp2.factory('GetValuesFactory',GetValuesFactory);

var ConfigFunction = function($routeProvider) {
  $routeProvider
   .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'Views/Register.html',
    controller: 'RegisterController'
  })

  .when('/values', {
    templateUrl: 'views/values.html',
    controller: 'ValuesController'
  });
};
ConfigFunction.$inject = ['$routeProvider'];
AngularJSWebApp2.config(ConfigFunction);
