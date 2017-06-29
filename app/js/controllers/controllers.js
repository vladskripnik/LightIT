'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'ngResource']);
/* Config */
phonecatApp.config([
  '$routeProvider', '$locationProvider',
  function($routeProvide, $locationProvider){
    $routeProvide
    .when('/',{
      templateUrl:'template/home.html',
      controller:'PhoneListCtrl'
    })
    .when('/register',{
      templateUrl:'template/register.html',
      controller:'RegisterCtrl'
    })
    .when('/contact',{
      templateUrl:'template/contact.html',
      controller:'ContactCtrl'

    })
    .when('/authorization',{
      templateUrl:'template/authorization.html',
      controller:'authorizationCtrl'
      
    })
    .when('/phones/:phoneId', {
      templateUrl:'template/phone-detail.html',
      controller:'PhoneDetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
  ]);
