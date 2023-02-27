function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let fgc = "rgb(40,177,255)" //foreground tile color
  let bgc = "rgb(80,80,131)"  //background tile color
  rowSquares(0,fgc,fgc,fgc,fgc,fgc)
  rowSquares(80,fgc,bgc,bgc,bgc,fgc)
  rowSquares(160,fgc,bgc,bgc,bgc,bgc)
  rowSquares(240,fgc,bgc,bgc,bgc,fgc)
  rowSquares(320,fgc,fgc,fgc,fgc,fgc)


}
function rowSquares(y,color1,color2,color3,color4,color5){
  fill(color1)
  rect(0, y, 80)
  fill(color2)
  rect(80, y, 80)
  fill(color3)
  rect(160, y, 80)
  fill(color4)
  rect(240, y, 80) 
  fill(color5)
  rect(320, y, 80)
}
  
  
  
