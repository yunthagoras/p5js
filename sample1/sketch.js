function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background(250);
  
  /* 도형 채우기 */  
    fill(77, 106, 177);
    noStroke();
    rect(30, 350, 40, 100);
    
    fill(227, 55, 64);
    noStroke();
    rect(10, 20, 120, 60);
    
    fill(77, 106, 177);
    noStroke();
    rect(230, 230, 100, 120);
    
    fill(241, 197, 42);
    noStroke();
    rect(100, 220, 100, 40);
    
    fill(123, 123, 123);
    noStroke();
    rect(100, 170, 130, 30);
    
    fill(241, 197, 42);
    noStroke();
    rect(350, 380, 90, 70);
    
    fill(123, 123, 123);
    noStroke();
    rect(350, 270, 50, 100);
     
    fill(77, 106, 177);
    noStroke();
    rect(420, 270, 70, 100);
    
    fill(227, 55, 64);
    noStroke();
    rect(350, 110, 140, 140);
    
    fill(227, 55, 64);
    noStroke();
    rect(60, 280, 140, 50);
    
    fill(227, 55, 64);
    noStroke();
    rect(460, 380, 30, 70);
    
    fill(77, 106, 177);
    noStroke();
    circle(210, 90, 130);
    
    fill(241, 197, 42);
    noStroke();
    circle(80, 130, 70);
    
    fill(227, 55, 64);
    noStroke();
    circle(300, 400, 70);
    
    fill(241, 197, 42);
    noStroke();
    triangle(100, 350, 200, 450, 100, 450);
    
    fill(241, 197, 42);
    noStroke();
    arc(330, 210, 160, 160, radians(180), radians(270));
    
    fill(123, 123, 123);
    noStroke();
    quad(345, 30, 435, 30, 475, 100, 305, 100);
    
    fill(77, 106, 177);
    noStroke();
    triangle(20, 140, 80, 220, 20, 300);
  
    fill(123, 123, 123);
    noStroke();
    quad(130, 350, 180, 350, 280, 450, 230, 450);
    
    fill(227, 55, 64);
    noStroke();
    triangle(290, 30, 330, 30, 290, 100);
    
    fill(241, 197, 42);
    noStroke();
    triangle(450, 30, 490, 30, 490, 100);
    
    
    
    
  /* 검은색 윤곽선 */  
    stroke(0, 0, 0);
    strokeWeight(2.3);
    noFill();
    rect(60, 320, 40, 100);
    
    noFill();
    rect(40, -10, 120, 60);
    
    noFill();
    rect(260, 200, 100, 120);
    
    noFill();
    rect(130, 190, 100, 40);
    
    noFill();
    rect(130, 140, 130, 30);
    
    noFill();
    rect(380, 350, 90, 70);
    
    noFill();
    rect(380, 240, 50, 100);
  
    noFill();
    rect(450, 240, 70, 100);
  
    noFill();
    rect(380, 80, 140, 140);
  
    noFill();
    rect(90, 250, 140, 50);
  
    noFill();
    rect(490, 350, 30, 70);
  
    noFill();
    circle(240, 60, 130);
     
    noFill();
    circle(110, 100, 70);
  
    noFill();
    circle(330, 370, 70);
  
    noFill();
    triangle(130, 320, 230, 420, 130, 420);
  
    noFill();
    quad(375, 0, 465, 0, 505, 70, 335, 70);
  
    noFill();
    triangle(50, 110, 110, 190, 50, 270);
  
    noFill();
    quad(160, 320, 210, 320, 310, 420, 260, 420);
  
    noFill();
    triangle(320, 0, 360, 0, 320, 70);
  
    noFill();
    triangle(480, 0, 520, 0, 520, 70);
  
    noFill();
    arc(360, 180, 160, 160, radians(180), radians(270));
    line(280, 180, 360, 180);
    line(360, 100, 360, 180);
  }
  
  