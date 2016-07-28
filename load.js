(function() {

  console.log("working");
  
  function hasES6() {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) { return false; }

    return true;
  }

  if (hasES6()) {
    var p = document.createElement('script');
    p.src = "phaser.js";
    document.body.appendChild(p);
    var s = document.createElement('script');
    var name = document.currentScript['data-file'];
    console.log(name);
    s.src = name;
    document.body.appendChild(s);
  } else {
    document.write("<h1>Your browser is too old to play this game.</h1>"); 
  }

})();
