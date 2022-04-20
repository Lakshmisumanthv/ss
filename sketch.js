
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var car1Image
var car2Image
var car3Image
var car4Image
var trackImage
var skyImage
var finishlineImage 
  
function preload(){
car1Image=loadImage("car1.png")
car2Image=loadImage("car2.png")
car4Image=loadImage("car4.png")
car3Image=loadImage("car3.png")  
trackImage=loadImage("track.jpg") 
skyImage=loadImage("sky.jpg")
finishlineImage=loadImage("finishline.png") 
  
 
} 

function setup(){
createCanvas(1010,1449) 
  
  track =createSprite(900,879,100,100)
  track.addImage(trackImage)
  track.velocityX =3; 
  track.scale=3
  
  sky =createSprite(339,120,50,50)
  sky.addImage(skyImage)
  sky.scale=3
  
  car1=createSprite(110,1246,70,70)
  car1.addImage(car1Image)
   car1.scale=0.15

  car2 =createSprite(110,949,10,10)
  car2.addImage(car2Image)
   car2.scale=0.15
   
  car3=createSprite(110,1099,60,60)
  car3.addImage(car3Image)
   car3.scale=0.2

  car4 =createSprite(110,1399,10,10)
  car4.addImage(car4Image)
   car4.scale=0.2
  
  finishline =createSprite(1110,1159,10,10)
  finishline.addImage(finishlineImage)
  finishline.scale=0.2 
  
   
 } 

function draw(){
  background("lightblue");
 
  if (gameState===PLAY){
   if(track.x > 400 ){
    track.x = width/3;
   }
   
  
    
  if (keyDown("UP")){
   car1.y=car1.y-2
  }
   
  if (keyDown("DOWN")){
   car1.y=car1.y+2
  } 
  
    
  if (keyDown("RIGHT")){
car1.x=car1.x+2
  }
    
  if (keyDown("LEFT")){
 car1.x=car1.x-2
  }
 
  
  if (keyDown("W")){
   car2.y=car2.y-2
  }
   
  if (keyDown("S")){
   car2.y=car2.y+2
  } 
  
    
  if (keyDown("D")){
  car2.x=car2.x+2
  }
    
  if (keyDown("A")){
  car2.x=car2.x-2
  }
  
  
  if (keyDown("I")){
   car3.y=car3.y-2
  }
   
  if (keyDown("K")){
   car3.y=car3.y+2
  } 
  
    
  if (keyDown("L")){
car3.x=car3.x+3
  }
    
  if (keyDown("J")){
 car3.x=car3.x-2
  }
 
  if (keyDown("T")){
   car4.y=car4.y-2
  }
   
  if (keyDown("G")){
   car4.y=car4.y+2
  } 
   
  if (keyDown("H")){
car4.x=car4.x+2
  }
    
  if (keyDown("F")){
 car4.x=car4.x-2
  }
    
   
  
    drawSprites()
  }   
}