 var images = {};

loadImage("leftArm");
loadImage("legs");
loadImage("torso");
loadImage("github.com/LDPJ/create/Right Arm.png");  
loadImage("head");
loadImage("hair");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}
