
 colorMode(HSB);
  noFill();
  stroke(0,255,255);
var h = 100;

while(true) {
  background(255);
  colorMode(HSB);
  noFill();
  ellipse(h, 100, 30, 30);
  h = h + 10;
  
  if (h >= 300) {
 
    while(true) {
  background(255);
  colorMode(HSB);
  noFill();
  ellipse(h, 100, 30, 30);
 h = h - 10;
    }   
  }
}
