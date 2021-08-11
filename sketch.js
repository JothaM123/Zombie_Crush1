const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground, block1, block2, bridge, bridgeCon;
var stonesArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  ground = new Base(width / 2, height - 50, width, 150);
  block1 = new Base(width / 20, height - 150, 200, 150);
  block2 = new Base(width - 110, height - 150, 200, 150);
  fill("yellow");
  bridge = new Bridge(25, { x: width / 20, y: height - 150 });
  Matter.Composite.add(bridge, block1);
  bridgeCon = new Link(bridge, block2);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 50);
    var stone = new Stone(x, y, 80, 80);
    stonesArray.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
  fill(0, 0, 0, 0);
  noFill();
  ground.show();
  fill(105, 70, 49);
  block1.show();
  block2.show();
  bridge.show();
  for (var i = 0; i <= 8; i++) {
    fill("white");
    stonesArray[i].show();
  }
}
