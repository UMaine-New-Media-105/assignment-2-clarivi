function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawStar(0,20,1.35)
}

function drawStar(x,y,starScale){
    fill("white")
  beginShape();
  scale(starScale)
  vertex(150 + x,0 + y)
  vertex(250 + x,250 + y)
  vertex(0 + x,100 + y)
  vertex(300 + x,100 + y)
  vertex(50 + x,250 + y)
  vertex(150 + x,0 + y)
  vertex(150 + x,190 + y)
  vertex(150 + x,140 + y)
  vertex(250 + x,250 + y)
  vertex(150 + x,140 + y)
  vertex(50 + x,250 + y)
  vertex(150 + x,140 + y)
  vertex(0 + x,100 + y)
  vertex(150 + x,140 + y)
  vertex(300 + x,100 + y)
  vertex(150 + x,140 + y)
  vertex(150 + x,0 + y)
  endShape();
}
