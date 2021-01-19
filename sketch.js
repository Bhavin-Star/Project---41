// Add matter.js first
// give the physics engines
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
// create the array of ranindrops
var raindrops = [];
// make  a new umbrella 
var img;
// give image to the background
var backgroundImg;
// give image to thunder
var thunder1,thunder2 ,thunderImg1 , thunderImg2, thunderImg3, thunderImg4 , lightning;

function preload(){
  
  
    thunder1 = loadImage("Image/thunderbolt/1.png");
    thunder2 = loadImage("Image/thunderbolt/2.png");
    thunder3 = loadImage("Image/thunderbolt/3.png");
    thunder4 = loadImage("Image/thunderbolt/4.png");
}

function setup(){
  
var canvas = createCanvas(windowWidth, windowHeight);
 
    engine = Engine.create();
    world = engine.world;
 
    thunderImg1 = createSprite(displayWidth/2,5,10,40);
    thunderImg2 = createSprite(200,5,10,40);
    thunderImg3 = createSprite(random(100,windowWidth - 100), 5, 10, 40);
    thunderImg4 = createSprite(random(100,windowWidth - 100), 5, 10, 40);
    lightning = createSprite(1100,5,10,40);

    img = new Umbrella(displayWidth/2,500);
}

function draw(){
  
    background(0);
  
    Engine.update(engine);
   
    if(frameCount % 1 === 0){
      var raindrop = new Drop(random(0, windowWidth), -100,10);
      raindrops.push(raindrop);
    }

    img.display();

    for(var i = 0; i < raindrops.length; i++){
      raindrops[i].fall(20);
      raindrops[i].display();
    } 

    if(frameCount % 10 === 0) {
    var rand = Math.round(random(1,2));
      switch(rand) {
        case 1:thunderImg1.addImage(thunder1);
                break;
        case 2: thunderImg1.addImage(thunder2);
                break;
        default: break;
      }
    }   
  
    if(frameCount % 10 === 0) {
      var rand = Math.round(random(1,2));
        switch(rand) {
          case 1:thunderImg2.addImage(thunder1);
                  break;
          case 2: thunderImg2.addImage(thunder2);
                  break;
          default: break;
        }
      }   
  
      if(frameCount % 10 === 0) {
        var rand = Math.round(random(1,2));
          switch(rand) {
            case 1:lightning.addImage(thunder1);
                    break;
            case 2: lightning.addImage(thunder2);
                    break;
            case 3:lightning.addImage(thunder3);
                    break;
            case 4: lightning.addImage(thunder4);
                    break;
            default: break;
          }
        } 
  
    drawSprites();
}   

