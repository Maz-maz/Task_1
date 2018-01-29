/*!!! JQuery is needed!*/

angular.module("adminNav").
  component("adminNav",{
    templateUrl: "admin-nav/admin-nav.template.html",
    /*
    controller: function AdminNavController () {
      //empty
    }*/
    controller: ["$http", 
      function AdminNavController ($http) {

        var self = this;

        /*Array of names of js assets to reload*/
        self.js_assets = [];

        /*Set collapse class on sidebar-nav*/
        $(".sidebar-nav").addClass("collapse");

        /*Get file names to reload and make reload*/
        self.AdminNavReloadAssets = function() {

          $http.get('admin-nav/admin-nav.reload.json').then(function(response) {
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

        /*When will be created this controller make reload assets*/
        self.AdminNavReloadAssets();

      }
    ]


  });