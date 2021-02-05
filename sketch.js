var flamingo, fImg;
var backP, backImg;
var rock, leopard, obstacleGroup;
var balloon, balloonGroup;

function preload(){
  fImg = loadImage("download.png");
  backImg = loadImage("jungle.jpg");
}

function setup(){
  createCanvas(600,200);

  backP = createSprite(0,100,10,10);
  backP.addImage("back", backImg);
  backP.scale = 1;
  backP.x = backP.width /2;
  backP.velocityX = -2;

  flamingo = createSprite(50,180,10,10);
  flamingo.addImage("fl", fImg);
  flamingo.scale = 0.8;

  obstacleGroup = new Group();
  balloonGroup = new Group();

  edges = createEdgeSprites();
}

function draw(){
  background(0);

  if (backP.x < 0) {
    backP.x = backP.width/2;
  }

  if(keyDown("space") && flamingo.y === 161.6){
    flamingo.velocityY = -10;
  }

  flamingo.velocityY = flamingo.velocityY + 0.8;

  flamingo.collide(edges[3]);

 // console.log(flamingo.y);


  drawSprites();
}

function obstacles(){
  if (frameCount % 300 === 0) {
    
    var rock = createSprite(590,161,40,10);
    obstacles.addImage("obstacler", obstacleImage);
    obstacles.scale = 0.17;
    obstacles.velocityX = -3;
    
    obstacles.lifetime = 160;
    
    obstacleGroup.add(obstacles);
  }
}