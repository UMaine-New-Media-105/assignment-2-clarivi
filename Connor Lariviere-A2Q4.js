function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke()
  background(220);
  fill("rgb(199,26,26)")
  rect(0,0,150,400)
  rect(450,0,600,400)
  fill("rgb(165,11,11)")
  rect(150,0,300,120)
  fill("black")
  rect(150,120,300,150)
  fill("green")
  rect(150,270,300,134)
  drawMoon()
  drawLeaf()
}

function drawMoon(){
  fill("white")
  circle(280,200, 100)
  noStroke()
  fill("black")
  circle(287,200, 90)
  
}
