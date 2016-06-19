'use strict';

angular.module('kidsApp.auth', ['kidsApp.constants', 'kidsApp.util', 'ngCookies', 'ngRoute'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
