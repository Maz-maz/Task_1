angular.module("adminPages").
  controller("AdminPagesController", ["$routeParams", "$scope", 
      function AdminPagesController ($routeParams, $scope) {
        $scope.pageName = $routeParams.pageName;
      }
    ]
  ).directive('myCustomer', function() {
    return {
      templateUrl: function(elem, attr) {
        return 'admin-pages/pages/' + attr.type + '.html';
      }
    };
    });