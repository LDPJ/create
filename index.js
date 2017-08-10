/* Object created to hold image references. */ 
var images = {};

loadImage("AstroboyLeftArm");
loadImage("AstroboyLegs");
loadImage("AstroboyTorso");
loadImage("AstroboyTorsoTransparent");
loadImage("AstroboyRightArm");  
loadImage("AstroboyHead");
loadImage("AstroboyHair");

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
      resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

/* Variables to track the image load process.  
During the redraw process the canvas will be cleared and all the parts will be redrawn farthest away. */

var totalResources = 7;
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
                      
  context.drawImage(images["AstroboyLeftArm"], x + 40, y - 42);
  context.drawImage(images["AstroboyLegs"], x, y);
  context.drawImage(images["AstroboyTorso"], x, y - 50);
  context.drawImage(images["AstroboyRightArm"], x - 15, y - 42);
  context.drawImage(images["AstroboyHead"], x - 10, y - 125);
  context.drawImage(images["AstroboyHair"], x - 37, y - 138);
}

/* Draw Eyes */
function redraw() {
  ...
  drawEllipse(x + 47, y - 68, 8, 14); // Left Eye
  drawEllipse(x + 58, y - 68, 8, 14); // Right Eye
}

function drawEllipse(centerX, centerY, width, height) {
	
  context.beginPath();
  
  context.moveTo(centerX, centerY - height/2);
  
  context.bezierCurveTo(
    centerX + width/2, centerY - height/2,
    centerX + width/2, centerY + height/2,
    centerX, centerY + height/2);

  context.bezierCurveTo(
    centerX - width/2, centerY + height/2,
    centerX - width/2, centerY - height/2,
    centerX, centerY - height/2);
 
  context.fillStyle = "black";
  context.fill();
  context.closePath();	
}

function redraw() {
  ...
  canvas.width = canvas.width; // clears the canvas 
  
  drawEllipse(x + 40, y + 29, 160, 6);
  ...
}
  
/* Breathe Dynamic */
  var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
  
  function updateBreath() { 
                        
  if (breathDir === 1) {  // breath in
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else {  // breath out
    breathAmt += breathInc;
    if(breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}
