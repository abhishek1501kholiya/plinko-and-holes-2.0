const Engine = Matter.Engine;
const World = Matter.World ;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var ground;
 
var particle;
var plinkos = [];
var divisions   = [];

var score = 0;
var turn = 0;
var gameState = "play";

var divisionHeight=300;
var count =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

 //    for (var j = 75; j <=width; j=j+50) 
   //{
    
   //   plinkos.push(new Plinko(j,275));
  //  }

    // for (var j = 50; j <=width-10; j=j+50) 
 //   {
    
     //  plinkos.push(new Plinko(j,375));
 //   }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  //if(frameCount%60 ===0){
  //  particles.push(new Particle(random(width/2-25,width/2+10),10,10));

//}

 //text("Score : "+score,20,30);
 ground.display();
 for(var k = 0 ; k < divisions.length; k++ ){
     divisions[k].display();
 }
 for(var  i= 10 ; i < plinkos.length; i++ ){
     plinkos[i].display();
 }
 for(var  p= 0 ; p < plinkos.length ; p++ ){
     plinkos[p].display();
 }
// for(var  j= 0 ; j < particles.length ; j++ ){
  //   particles[j].display();
// }
 if(particle!= null){
   particle.display();
   if(particle.body.position.y>760){
   if(  particle.body.position.x>0 &&particle.body.position.x<300){
     score = score +500;
    // particle = null;
   }
   if(particle.body.position.x>301 && particle.body.position.x<600){
     score = score +100;
     //particle = null;
   }
   if(particle.body.position.x>601 && particle.body.position.x<840){
     score = score +200;
     //particle = null;
   }
    particle = null;
   
  }

 }
 if(count>=5){
  gameState = "end";

textSize(46);
text("Game Over",300,300)  

} 
textSize(36);
text("score:" + score ,200,200);

textSize(35);
text("500",10,550);

textSize(35);
text("500",90,550);

textSize(35);
text("500",170,550);

textSize(35);
text("500",250,550);

textSize(35);
text("100",330,550);

textSize(35);
text("100",410,550);

textSize(35);
text("100",490,550);

textSize(35);
text("200",570,550);

textSize(35);
text("200",650,550);

textSize(35);
text("200",730,550);
   Engine.update(engine);
  
}
   function mousePressed (){
     if(gameState!= "end"){

       count++;
       particle = new Particle(mouseX,10,10,10);
     }

   }
