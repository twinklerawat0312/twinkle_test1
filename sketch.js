var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;


var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  //database = firebase.database();
 form=new Form()

 form1=new Instructions()
}


function draw(){
  background(0)
  if(gameState===0){
    form.display()
  }
  if(gameState===1){
    form1.display()
  }
}
