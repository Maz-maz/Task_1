angular.module("adminPages").
  component("adminPages", {
    template: "<div id='admin_pages_place'></div>",
    controller: ["$routeParams", "$http", 
      function AdminPagesController ($routeParams, $http) {

        var self = this;
        /*Div to put some HTML*/
        self.pages_place = document.querySelector("#admin_pages_place");

        /*Page name to get*/
        self.pageName = $routeParams.pageName;

        /*Array of names of js assets to reload*/
        self.js_assets = [];

        /*Get HTML of page*/
        $http.get('pages/' + self.pageName + '.html').then(function(response) {
          /*Place HTML*/
          self.pages_place.innerHTML = response.data;

          /*Reload assets*/
          self.reloadAssets();
        });

        /*Get file names to reload and make reload*/
        self.reloadAssets = function() {

          $http.get('pages/' + self.pageName + '_reload.json').then(function(response) {
            /*Reload js files*/
            //console.dir(response.data.js);


            /*Array what needed*/
            self.js_assets = response.data.js;

            /*Reload js assets*/
            if(self.js_assets.length !== 0) {
              for(i = 0; i <= self.js_assets.length; i++) {
                reloadAssets.reloadAssets(self.js_assets[i], "js");
              }
            }
          });

        };

      }
    ]
  });