angular.module("adminApp").
  config(["$locationProvider", "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.
      when('/:pageName', {
        template: '<admin-pages></admin-pages>'
        //template: "<div ng-controller='AdminPagesController'><div my-customer type='{{pageName}}'></div></div>"
      }).
      otherwise('/dashboard');
    }
  ]);