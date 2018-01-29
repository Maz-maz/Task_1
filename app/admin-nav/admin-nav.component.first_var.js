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


        /*Get links that change route*/
        //console.log($("a[href^='#!/'"));
        self.links = $("a[href^='#!/'");

        /*When they clicked remove active from nav and reload js assets:*/
        self.links.on("click", function() {

          /*Remove "active" classes*/
          $.each(self.links, function(index, elm) {
            if($(elm).hasClass("active")) {
              $(elm).removeClass("active");
            }
          });
          /*Reload js assets*/
          self.AdminNavReloadAssets();
        })

      }
    ]


  });