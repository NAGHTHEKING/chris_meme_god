//variables 
var database;
var dog, dogImg, happyDog;
var foodS = 20;
var lastFed = 0;
var foodObj = null;
var feedButton, addButton;

//load images
function preload()
{
  backgroundImg = loadImage("bg.png");
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
  opinionImg = loadImage("comment.png");
}


function setup() {

  //canvas
  createCanvas(800, 500);

   var greeting = createElement('h3');
   var greeting1 = createElement('h3');
  
  //button to feed the dog
  feedButton = createButton("Feed your dog");
  feedButton.position(700, 95);
  feedButton.mousePressed(feedDog);

  //To wriite name of the dog
  input = createInput ("Fill your Dog's Name"); 
  input.position (500, 95); 

  var name = input.value();

  

  // var button = createButton("submit");
  // button.position(850, 500);
  
  //button to add food for the dog
  addButton = createButton("Buy Milk Bottles");
  addButton.position(820, 95);
  addButton.mousePressed(addFood);

  // button.mousePressed(function(){
  //   input.hide();
  //   addButton.hide();
  //   feedButton.hide();
  //   //create comment
    
 //})


  //create foodObj
  foodObj = new Food();

  //create dog
  dog = createSprite(650, 280);
  dog.scale = 0.3;
  dog.addImage("dog1", dogImg);
  dog.addImage("dog2", happyDog);

  
}


function draw() {  

  //background
  background(backgroundImg);

  //display last fed
  fill("white");
  textSize(15);
  if(lastFed>=12){
    text("Last Fed (approx timing) : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Fed (approx timing) : 12 AM",350,30);
   }else{
     text("Last Fed (approx timing) : "+ lastFed + " AM", 350,30);
   }

   //draw all sprites
  drawSprites();

  //display food stock
  strokeWeight(3);
  stroke("blue")
  fill("white");
  textSize(30);
  text("Milk bottles left in stock : " + foodS, 30, 475);

  strokeWeight(3);
  stroke("red")
  fill("white");
  textSize(20);
  //text("*To be filled only after you enjoyed playing the game ", 310, 410);

  //display foodObj
  foodObj.display();

}


//increment foodS, updateFoodStock using foodS
function addFood(){
  foodS++;
  foodObj.updateFoodStock(foodS);
}


//change dog image, deduct foodS, updateFoodStock using foodS, set lastFed
function feedDog(){
  if(foodS > 0){
    dog.changeAnimation("dog2", happyDog);
    foodS--;
    foodObj.updateFoodStock(foodS);
    lastFed = hour();
    foodObj.updateLastFed(lastFed);
  }
}

