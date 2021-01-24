let text;

//var zerkalo = 'ZERKALO.LIVE';


function preload() {
  angleMode(DEGREES);
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
 // font = loadFont();
  
}

function setup() {
  //frameRate(60);
  createCanvas(windowWidth, windowHeight, WEBGL);
  pixelDensity(2);
 
  //textFont(font);

 text = createGraphics(100,100);
  text.textFont('Source Code Pro');
  text.textAlign(CENTER);
  text.textSize(18);
  text.fill(255);
  //text.noStroke();
  text.text('People', 50,40);
  text.text('outside', 50,55);
  text.text('the box', 50,70);
}

function draw() {
  background(0);
  //translate(width/2, height/2);
  

//light
    
  //Mouse CENTER position in 3D
  let mX = mouseX - width / 2;
  let mY = mouseY - height / 2;
  let mZ = 250;
  
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  
   pointLight(255, 255, 255, mX, mY, mZ);

  
//BOX
 push();
  rotateX(frameCount * 0.2);
  rotateY(frameCount * 0.5);
  //normalMaterial();
  ambientMaterial(255, 255, 255);
  //noStroke();
  // texture(text);
  box(10, 400, 250);
 pop();

}