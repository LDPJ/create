 var images = {};

loadImage("ldpj.github.io/create/AstroboyLeftArm.png");
loadImage("ldpj.github.io/create/AstroboyLegs.png");
loadImage("ldpj.github.io/create/AstroboyTorso.png");
loadImage("ldpj.github.io/create/AstroboyTorsoTransparent.png");
loadImage("ldpj.github.io/create/AstroboyRightArm.png");  
loadImage("ldpj.github.io/create/AstroboyHead.png");
loadImage("ldpj.github.io/create/AstroboyHair.png");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}
