const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var engine,world;
var rj, koya, shooky, mang, chimmy, tata, cooky;

function preload() {
  rj_img = loadImage("images/RJ_img.png");
  koya_img = loadImage("../images/Koya_img.png", "../images/Koya_running.png");
  shooky_img = loadImage("../images/shooky_img.png", "../images/shooky_running.png");
  mang_img = loadImage("../images/mang_img.png", "../images/mang_running.png");
  chimmy_img = loadImage("../images/chimmy_img.png", "../images/chimmy_running.png");
  tata_img = loadImage("../images/tata_img.png", "../images/tata_running.png");
  cooky_img = loadImage("../images/cooky_img.png", "../images/cooky_running.png");
}

function setup() {
  var canvas = createCanvas(displayWidth - 20, displayHeight - 38);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, height, 1200, 20);
  rj = new Players(900, 320, 75, 75);

  koya = new Players(800, 320, 65, 65);
  shooky = new Players(700, 320, 65, 65);
  mang = new Players(600, 320, 65, 65);
  chimmy = new Players(500, 320, 65, 65);
  tata = new Players(400, 320, 65, 65);
  cooky = new Players(300, 320, 65, 65);
  image(rj_img, 0, 0);
 }

function draw() {
  background(0);
  
  Engine.update(engine);
  ground.display();
  rj.display();
  koya.display();
  shooky.display();
  mang.display();
  chimmy.display();
  tata.display();
  cooky.display();

}
