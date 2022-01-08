
var edges,girl,chef1,chef2,chef3,wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wal12,wall13,wall14,wal15,wal16,wall17,wall18,wall19,wall20;
var girlImage,girlr1Image,chef1Image,chef2Image,chef3Image;
var taco, roll,pizza,popcorn,riceball;
var tacoImage, rollImage, pizzaImage, riceballImage;
var foodGroups, score, chefGroup;

function preload() {
    girlImage=loadAnimation("images/girl1.png","images/girl2.png");
    girlr1Image=loadAnimation("images/girlr1.png","images/girlr2.png");
    chef1Image=loadImage("images/chef1.png");
    chef2Image=loadImage("images/chef2.png");
    chef3Image=loadImage("images/chef3.png");
    tacoImage=loadImage("images/taco.png");
    rollImage=loadImage("images/roll.png");
    pizzaImage=loadImage("images/pizza.png");
    riceballImage=loadImage("images/rice ball.png");
}

function setup(){
    createCanvas(1400,800);
    edges=createEdgeSprites();
    girl = createSprite(50,750,20,50);
    chef1 = createSprite(740,400,20,50);
    chef2 = createSprite(800,430,20,50);
    chef3 = createSprite(860,400,20,50);
    girl.addAnimation("running", girlImage);
    girl.addAnimation("leftRunning", girlr1Image);
    girl.scale=1.5

    chef1.addImage(chef1Image);
    chef1.velocityX=1
    chef1.velocityY=-2
    chef1.scale=2.5

    chef2.addImage(chef2Image);
    chef2.velocityX=5
    chef2.velocityY=-2
    chef2.scale=1.5

    chef3.addImage(chef3Image);
    chef3.velocityX=3
    chef3.velocityY=-2
    chef3.scale=1.5

    taco = createSprite(820,356,20,50);
    roll = createSprite(560,278,20,50);
    pizza = createSprite(400,146,20,50);
    riceball = createSprite(178,650,20,50);

    taco.addImage(tacoImage);
    roll.addImage(rollImage);
    pizza.addImage(pizzaImage);
    riceball.addImage(riceballImage);

    //wall1
    wall1=createSprite(700,795,1400,20);
    //wall2
    wall2=createSprite(700,5,1400,20);
    //wall3
    wall3=createSprite(5,400,20,800);
    //wall4
    wall4=createSprite(1395,400,20,800);
    //wall5
    wall5=createSprite(310,490,200,20);
    //wall6
    wall6=createSprite(100,350,200,20);
    //wall7
    wall7=createSprite(700,400,20,200);
    //wall8
    wall8=createSprite(930,400,20,200);
    //wall9
    wall9=createSprite(815,500,250,20);
    //wall10
    wall10=createSprite(387,289,20,200);
    //wall11
    wall11=createSprite(647,168,200,20);

    wall12=createSprite(982,86,200,20);

    wall13=createSprite(1259,347,20,200)

    wall14=createSprite(123,690,200,20)

    wall15=createSprite(797,668,200,20)

    wall16=createSprite(508,709,20,200)

    foodGroups=new Group();
    foodGroups.add(pizza);
    foodGroups.add(riceball);
    foodGroups.add(taco);
    foodGroups.add(roll);

    chefGroup=new Group();
    chefGroup.add(chef1);
    chefGroup.add(chef2);
    chefGroup.add(chef3);


    score=0;
}

function draw() {

    girl.bounceOff(edges[0]);
    chef1.bounceOff(edges[0]);
    chef2.bounceOff(edges[0]);
   chef3.bounceOff(edges[0]);

   girl.bounceOff(edges[1]);
   chef1.bounceOff(edges[1]);
   chef2.bounceOff(edges[1]);
  chef3.bounceOff(edges[1]);

  girl.bounce(edges[2]);
  chef1.bounceOff(edges[2]);
   chef2.bounceOff(edges[2]);
  chef3.bounceOff(edges[2]); 

  girl.bounce(edges[3]);
  chef1.bounceOff(edges[3]);
   chef2.bounceOff(edges[3]);
  chef3.bounceOff(edges[3]);

  girl.bounce(wall1);
  chef1.bounceOff(wall1);
   chef2.bounceOff(wall1);
  chef3.bounceOff(wall1);

  girl.bounce(wall2);
  chef1.bounceOff(wall2);
   chef2.bounceOff(wall2);
  chef3.bounceOff(wall2);

  girl.bounce(wall3);
  chef1.bounceOff(wall3);
   chef2.bounceOff(wall3);
  chef3.bounceOff(wall3);

  girl.bounce(wall4);
  chef1.bounceOff(wall4);
   chef2.bounceOff(wall4);
  chef3.bounceOff(wall4);

  girl.bounce(wall5);
  chef1.bounceOff(wall5);
   chef2.bounceOff(wall5);
  chef3.bounceOff(wall5);

  girl.bounce(wall6);
  chef1.bounceOff(wall6);
   chef2.bounceOff(wall6);
  chef3.bounceOff(wall6);

  girl.bounce(wall7);
  chef1.bounceOff(wall7);
   chef2.bounceOff(wall7);
  chef3.bounceOff(wall7);

  girl.bounce(wall8);
  chef1.bounceOff(wall8);
   chef2.bounceOff(wall8);
  chef3.bounceOff(wall8);

  girl.bounce(wall9);
  chef1.bounceOff(wall9);
   chef2.bounceOff(wall9);
  chef3.bounceOff(wall9);

  girl.bounce(wall10);
  chef1.bounceOff(wall10);
   chef2.bounceOff(wall10);
  chef3.bounceOff(wall10);

  girl.bounce(wall11);
  chef1.bounceOff(wall11);
   chef2.bounceOff(wall11);
  chef3.bounceOff(wall11);

  girl.bounce(wall12);
  chef1.bounceOff(wall12);
   chef2.bounceOff(wall12);
  chef3.bounceOff(wall12);

  girl.bounce(wall13);
  chef1.bounceOff(wall13);
   chef2.bounceOff(wall13);
  chef3.bounceOff(wall13);

  girl.bounce(wall14);
  chef1.bounceOff(wall14);
   chef2.bounceOff(wall14);
  chef3.bounceOff(wall14);

  girl.bounce(wall15);
  chef1.bounceOff(wall15);
   chef2.bounceOff(wall15);
  chef3.bounceOff(wall15);

  girl.bounce(wall16);
  chef1.bounceOff(wall16);
   chef2.bounceOff(wall16);
  chef3.bounceOff(wall16);

    background("yellow");

    if(foodGroups.isTouching(girl)){
        score=score+1;
    
    }

    textSize(40);
    text("Score: "+ score, 500,50);
    
    if(chefGroup.isTouching(girl)){
        textSize(40);
    text("GAME OVER",700,400);
    }

    if(keyDown(UP_ARROW)){
        girl.y=girl.y-10
        
    }

    if(keyDown(DOWN_ARROW)){
        girl.y=girl.y+10
       
    }

    if(keyDown(LEFT_ARROW)){
        girl.x=girl.x-10
        girl.changeAnimation("leftRunning");
    }

    if(keyDown(RIGHT_ARROW)){
        girl.x=girl.x+10
        girl.changeAnimation("running");
    
    }

    drawSprites();
}




