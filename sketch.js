var pathImg,path;
var Runner_running,Runner;



function preload(){
  //pre-load images

  pathImg = loadImage("path.png");
  Runner_running = loadAnimation("Runner-1.png" , "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(180,200);
  path.addImage(pathImg);
  path.y = path.length /2;
  path.velocity.y = 4;

  Runner = createSprite(200,300);
  Runner.addAnimation("Runner running",Runner_running);
  Runner.scale = 0.1;

  invisiblebarrier1=createSprite(400,200,10,400);
  invisiblebarrier1.visible=false;
  invisiblebarrier2=createSprite(200,400,10,400);
  invisiblebarrier2.visible=false;

}

function draw() {
  background(0);

  Runner.x = mouseX;
  if (path.y < 0) {
    path.y = path.length /2;
  }

  drawSprites();
}
