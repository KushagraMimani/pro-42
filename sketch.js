var hr,mn,sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);

}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();


  noFill();
  strokeWeight(8);

  stroke("red");
  let scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(scAngle);
  line(0,0,100,0)
  pop();

  stroke("yellow");
  let mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);

  push();
  rotate(mnAngle);
  line(0,0,75,0)
  pop();

  stroke("blue");
  let hrAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);

  push();
  rotate(hrAngle);
  line(0,0,50,0)
  pop();

  stroke("white");
  point(0,0)
}