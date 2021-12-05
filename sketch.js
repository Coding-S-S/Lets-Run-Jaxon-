var runnerImg, pathImg, path, left_boundary, right_boundary;
function preload(){

  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
  pathImg=loadImage("path.png")
  
}
function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY=5;
  path.y=path.height/30;
  runner=createSprite(180,340,50,170);
  left_boundary=createSprite(10,200,20,400)
  right_boundary=createSprite(380,200,20,400)
  runner.addAnimation("running", runnerImg);
  runner.scale=0.1;
  left_boundary.visible=false
  right_boundary.visible=false
}
function draw() {
  background(0);
  path.velocityY=5;
  runner.x=World.mouseX
  if(path.y>400) {
    path.y=path.height/2
  }
runner.collide(left_boundary);
runner.collide(right_boundary);
edges=createEdgeSprites()
runner.collide(edges[3])
drawSprites()
}



  