 var spaceship, spaceshipImage
 var meteor, meteorImage, meteorGroup 
 var bala, balaImage, balaGroup
 var score = 0

  

  function preload(){
 spaceshipImage = loadImage("./images/spaceship.png");
 meteorImage = loadImage("./images/meteor.png");
 balaImage = loadImage("./images/bala.png");
}




  function setup() {
  createCanvas(1200,600);
  spaceship= createSprite(width/2, height-10, 50, 50);
  spaceship.addImage(spaceshipImage);
  spaceship.scale = 0.4
  
  
  meteorGroup = new Group();
  balaGroup = new Group();

  }


function draw() {
  background("blue");
  if(keyDown("space")){
    disparar();
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x +4

  }
  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x -4
  }
  if(keyDown(UP_ARROW)){
    spaceship.y = spaceship.y -4
  }
  if(keyDown(DOWN_ARROW)){
    spaceship.y = spaceship.y +4
  }

  if(meteorGroup.isTouching(balaGroup)){
    for(var i = 0; i < meteorGroup.length; i++){
        for(var j = 0; j < balaGroup.length; j++){
            if(meteorGroup[i].collide(balaGroup[j])){
                meteorGroup[i].destroy();
                balaGroup[j].destroy();
                score = score + 1;
            }
        }
    }

}

fill("#6d4c41");
textSize(40);
text(`Pontuação: ${score}`, 200, 50);
textAlign(CENTER, CENTER);
   
  
  meteoro();
    
  drawSprites();
}


function meteoro(){
  if(frameCount%Math.round(random(60,120)) === 0){
    meteor = createSprite( random(10, width), 10,60,100);
    meteor.addImage(meteorImage);
    meteor.scale = 0.05;
    meteor.velocityY = 3; 
    meteorGroup.add(meteor);

    }
  }


function disparar(){
  bala = createSprite(width/2, height-10,20,20);
  bala.x = spaceship.x;
  bala.y = spaceship.y;
  bala.addImage(balaImage);
  bala.scale = 0.1
  bala.velocityY = -5
  balaGroup.add(bala)
}
 