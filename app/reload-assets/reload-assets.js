/*!!! JQuery is needed!*/
var reloadAssets = {
};

/* !!! Delete later
var toReload = {
  js: [
    "bower_components/raphael/raphael.min.js", 
    "bower_components/morrisjs/morris.min.js",
    "js/morris-data.js"
  ]
};
*/

/*Put string to "src='string'" or other*/
reloadAssets.searchString = function(string, elm) {
  if(elm === "js") {
    return "script[src=\'" + string + "\']";
  }

  if(elm === "css") {
    return "link[href=\'" + string + "\']";
  }

  if(elm === "div") {
    return "div[class=\'" + string + "\']";
  }
  
}

reloadAssets.reloadAssets = function(string, type) {

  /*Search place*/
  var $div = $(reloadAssets.searchString(string, "div"));

  /*Remove present*/
  var $script = $(reloadAssets.searchString(string, type));

  if($script.length !== 0) {
    /*Remove script*/
    $script.remove();
  }

  /*Create element*/
  var $newScript = $("<script></script>");
  $newScript.attr("src", string);
  
  /*Insert new one*/
  $($div).after($newScript);

} /*end: reloadAssets.reload = function(string) {*/

/* !!! Delete later
for(i = 0; i <= toReload.js.length; i++) {
  reloadAssets.reloadAssets(toReload.js[i]);
}
*/


// !!! Delete later: console.dir( $(reloadAssets.searchString(toReload.js[0])).get(0) );