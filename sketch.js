 var path,infinity_path;
 var jaxon,jaxon_moving;
 var invisible_boundary,invisible_boundary2;
 

function preload(){
  //pre-load images
  path = loadImage("path.png");
  jaxon = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  infinity_path = createSprite(200,200,400,400);
  infinity_path.y = infinity_path.width/2
  infinity_path.addImage("my path",path);
  infinity_path.scale=1.3;
  infinity_path.velocityY = 4;
  jaxon_moving = createSprite(330,300,50,50);
  jaxon_moving.addAnimation("my jaxon",jaxon);
  jaxon_moving.scale = 0.06;
  invisible_boundary = createSprite(10,200,10,400);
  invisible_boundary.visible = false;
  invisible_boundary2 = createSprite(390,200,10,400);
  invisible_boundary2.visible = false;
}

function draw() {
  background("black");

 if(infinity_path.y > 400){
    infinity_path.y = width/2
 }
 
 if(keyDown("left")){
   jaxon_moving.x -= 4
 }

 if(keyDown("right")){
   jaxon_moving.x += 4
 }

 jaxon_moving.collide(invisible_boundary);
 jaxon_moving.collide(invisible_boundary2);

  drawSprites();
}
