function kodaPatch(x, y) 
{
  colorMode(HSB);
  noFill();
  stroke(0,255,255);
  rect(x, y, 100, 100);
  
  
  var b = 60
  var h = 255
  var v = 100
  var k = 300
 rect(x, y, 100, 100);
  noFill();
  
  line(x+10, y+10, x+100, y+100, width-10, height-10);
  line(x+90, y+10, x+0, y+100, width-10, height-10);
  
  stroke(h, 50, 90);
  ellipse(10+x,10+y,10,10);
  ellipse(10+x,10+y,20,20);
  ellipse(10+x,20+y,10,10);
  ellipse(10+x,20+y,20,20);
  ellipse(10+x,30+y,10,10);
  ellipse(10+x,30+y,20,20);
  ellipse(10+x,40+y,10,10);
  ellipse(10+x,40+y,20,20);
  ellipse(10+x,50+y,10,10);	
  ellipse(10+x,50+y,20,20);
  ellipse(10+x,60+y,10,10);
  ellipse(10+x,60+y,20,20);
  ellipse(10+x,70+y,10,10);
  ellipse(10+x,70+y,20,20);
  ellipse(10+x,80+y,10,10);	
  ellipse(10+x,80+y,20,20);
  ellipse(10+x,90+y,10,10);
  ellipse(10+x,90+y,20,20);
  
  stroke(v, 50, 90);
  ellipse(90+x,10+y,10,10);
  ellipse(90+x,10+y,20,20);
  ellipse(90+x,20+y,10,10);
  ellipse(90+x,20+y,20,20);
  ellipse(90+x,30+y,10,10);
  ellipse(90+x,30+y,20,20);
  ellipse(90+x,40+y,10,10);
  ellipse(90+x,40+y,20,20);
  ellipse(90+x,50+y,10,10);	
  ellipse(90+x,50+y,20,20);
  ellipse(90+x,60+y,10,10);
  ellipse(90+x,60+y,20,20);
  ellipse(90+x,70+y,10,10);
  ellipse(90+x,70+y,20,20);
  ellipse(90+x,80+y,10,10);	
  ellipse(90+x,80+y,20,20);
  ellipse(90+x,90+y,10,10);
  ellipse(90+x,90+y,20,20);
  
  stroke(k, 50, 90);
  line(x+90, y+20, x+0, y+100, width-10, height-10);
  line(x+90, y+30, x+0, y+100, width-10, height-10);
  line(x+90, y+40, x+0, y+100, width-10, height-10);
 	line(x+90, y+50, x+0, y+100, width-10, height-10);
  line(x+90, y+60, x+0, y+100, width-10, height-10);
  line(x+90, y+70, x+0, y+100, width-10, height-10);
  line(x+90, y+80, x+0, y+100, width-10, height-10);
  line(x+90, y+90, x+0, y+100, width-10, height-10); 
  
  stroke(b, 50, 90);
  line(x+10, y+20, x+100, y+100, width-10, height-10);
  line(x+10, y+30, x+100, y+100, width-10, height-10);
  line(x+10, y+40, x+100, y+100, width-10, height-10);
 	line(x+10, y+50, x+100, y+100, width-10, height-10);
  line(x+10, y+60, x+100, y+100, width-10, height-10);
  line(x+10, y+70, x+100, y+100, width-10, height-10);
  line(x+10, y+80, x+100, y+100, width-10, height-10);
  line(x+10, y+90, x+100, y+100, width-10, height-10);

} 
  
background(255);

kodaPatch((width-100)/2, (height-100)/2);
kodaPatch(0,0);
