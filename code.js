var a,b;

function setup() {
  createCanvas(800,400);
 a=createSprite(200,200,50,80);
 b=createSprite(450,200,50,30);

 a.shapeColor="green";
 b.shapeColor="green";

 //a.debug=true;
 b.debug=true;
  
 
}

function draw() {
  background("black");
  
  b.x=mouseX;
  b.y=mouseY;
  console.log(b.x-a.x);

  if(b.x-a.x<=a.width/2+b.width/2 && a.x-b.x<=a.width/2+b.width/2
    && b.y-a.y<=a.height/2+b.height/2 && a.y-b.y<=a.height/2+b.height/2)
  {
    a.shapeColor= "cyan"
    b.shapeColor= "cyan"
  }
  else
  {
    a.shapeColor="green";
    b.shapeColor="green";
  }

  drawSprites();
}
