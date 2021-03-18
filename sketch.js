var canvas;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var lives = 5;
var database;
var outs = 0;
var score = 0;

var form, player, game;
var batter1img, batter2img, baseballfield, ground;
var batter1, batter2, batters;
var ob1, ob2, ob3,cp1, cp2, cp3;
var obimg, cpimg; 
function preload(){
  baseballfield = loadImage("images/field.png");
  batter1img = loadImage("images/car1.png");
  batter2img = loadImage("images/car2.png");
  obimg = loadImage("images/ob.png");
  cpimg = loadImage("images/cp.png");

}

function setup(){
  canvas = createCanvas(800, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
