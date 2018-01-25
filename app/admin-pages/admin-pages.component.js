angular.module("adminPages").
  component("adminPages", {
    template: "<div id='admin_pages_place'></div>",
    controller: ["$routeParams", "$http", 
      function AdminPagesController ($routeParams, $http) {

        var self = this;
        /*Div to put some HTML*/
        var admin_pages_place = document.querySelector("#admin_pages_place");

        self.pageName = $routeParams.pageName;

        $http.get('admin-pages/pages/' + self.pageName + '.html').then(function(response) {
          admin_pages_place.innerHTML = response.data;
        });
      }
    ]
  });