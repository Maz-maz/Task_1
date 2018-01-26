var reloadAssets = {};

var toReload = {
  js: [
    "bower_components/raphael/raphael.min.js", 
    "bower_components/morrisjs/morris.min.js",
    "js/morris-data.js"
  ]
};

/*Put string to "src='string'"*/
reloadAssets.searchString = function(string) {
  return "script[src=\'" + string + "\']";
}

reloadAssets.reloadAssets = function(string) {

  var $script = $(reloadAssets.searchString(string));
  /*Put div after*/
  var $div = $("<div></div>")
  $script.after($div);
  /*Create element*/
  //var clone = $script.clone();
  var $clone = $("<script class=\'new\'></script>");
  $clone.attr("src", string);
  /*Remove script*/
  $script.remove();
  /*Insert copy*/
  $($div).before($clone);
  /*Remove div*/
  $($div).remove();

} /*end: reloadAssets.reload = function(string) {*/

/*
for(i = 0; i <= toReload.js.length; i++) {
  reloadAssets.reloadAssets(toReload.js[i]);
}
*/


//console.dir( $(reloadAssets.searchString(toReload.js[0])).get(0) );