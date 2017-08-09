/* Object created to hold image references. */ 
var images = {};

loadImage("ldpj.github.io/create/AstroboyLeft Arm.png");
loadImage("ldpj.github.io/create/AstroboyLegs.png");
loadImage("ldpj.github.io/create/AstroboyTorso.png");
loadImage("ldpj.github.io/create/AstroboyTorsoTransparent.png");
loadImage("ldpj.github.io/create/AstroboyRight Arm.png");  
loadImage("ldpj.github.io/create/AstroboyHead.png");
loadImage("ldpj.github.io/create/AstroboyHair.png");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

/* Variables to track the image load process.  
During the redraw process the canvas will be cleared and all the parts will be redrawn farthest away. */

var totalResources = 6;
var numResourcesLoaded = 0;
var fps = 30;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
    setInterval(redraw, 1000 / fps);
  }
}

/* Access to the HTML5 Canvas */
var context = document.getElementById('canvas').getContext("2d");

/* Each body part layered on the canvas. */

var charX = 245;
var charY = 185;
  
function redraw() {

  var x = charX;
  var y = charY;

  canvas.width = canvas.width; // clears the canvas 
                      
  context.drawImage(images["AstroboyLeft Arm"], x + 40, y - 42);
  context.drawImage(images["AstroboyLegs"], x, y);
  context.drawImage(images["AstroboyTorso"], x, y - 50);
  context.drawImage(images["AstroboyRight Arm"], x - 15, y - 42);
  context.drawImage(images["AstroboyHead"], x - 10, y - 125);
  context.drawImage(images["AstroboyHair"], x - 37, y - 138);
}
