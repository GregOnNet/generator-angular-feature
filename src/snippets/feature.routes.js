(function() {
  'use strict';

  angular
    .module('{{ feature }}')
    .config(defineRoutes);

  defineRoutes.$inject = ['$routeProvider'];

  function defineRoutes($routeProvider) {

    $routeProvider
      .when('/{{ feature }}', {

        templateUrl: '{{ feature }}/{{ feature }}.html',
        controller: '{{ feature }}',
        controllerAs: '{{ feature }}'
      });
  }
}());
