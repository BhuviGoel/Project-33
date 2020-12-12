var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;
var turn=0;
var divisionHeight=300;
var score =0;
var gameState="play"
var count=0;
function setup() {
  createCanvas(490, 790);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("100", 265,480)
 text("100", 185,480)
 text("300", 105,480)
 text("300", 345,480)
 text("500", 425,480)
 text("500", 25,480)
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var i = 0; i < divisions.length; i++) {
       divisions[i].display();
   }
 
    if (particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x < 80 && particle.body.position.x>0){
          score=score+500;
          particle=null;
          if (count>=5) gameState="end";
        }
      }
    }
    if (particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x >400 && particle.body.position.x<480){
          score=score+500;
          particle=null;
          if (count>=5) gameState="end";
        }
      }
    }
    if (particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x < 160 && particle.body.position.x>80){
          score=score+300;
          particle=null;
          if (count>=5) gameState="end";
        }
      }
    }
    if (particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x > 320 && particle.body.position.x<400){
          score=score+300;
          particle=null;
          if (count>=5) gameState="end";
        }
      }
      
    }
    if (particle!=null){
      particle.display();
      if (particle.body.position.y>700){
        if (particle.body.position.x < 320 && particle.body.position.x>160){
          score=score+100;
          particle=null;
          if (count>=5) gameState="end";
        }
      }
    }

    if (gameState==="end"){
      textSize(40)
      text("GAME OVER", 110,235)
    }

}
function mousePressed(){
  if (gameState!=="end"){
    count++
    particle=new Particle(mouseX,10,10,10)
  }
}