
angular.module("adminApp").
  config(["$locationProvider", "$routeProvider",
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.
      when('/:pageName', {
        /*!!! Below, in comment, first variant with some bug*/
        //template: '<admin-pages></admin-pages>'
        template: '<admin-nav></admin-nav> <div id="page-wrapper"><admin-pages></admin-pages></div>'
      }).
      otherwise('/dashboard');
    }
  ]);