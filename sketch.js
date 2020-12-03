 const Engine = Matter.Engine;
 const World= Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;
    
         var background
     //ground
         var ground,ground2,ground3
     //stage 1 level 1
          var box,box2,box3,box4,box5,box6,box7
     //stage 1  level 2
         var box8,box9,box10,box11,box12
     //stage 1 level 3
         var box13,box14,box15
     //stage 1 level 4
         var box16

     //stage 2 level 1
         var box17,box18,box19,box20,box21
     //stage 2 level 2
         var box22,box23,box24 
     //stage 2 level 3
         var box25  

     //image
     var ball
     var polygon
    //shot
     var sling 
 function preload() {
   polygon = loadImage("hexagon.png")
 }



     function setup(){
     var canvas = createCanvas(1300,600)
 
    engine = Engine.create()
    world = engine.world;
        
      

        // ground and stage 
            ground = new Ground(600,570,1400,10);
            ground2 = new Ground(450,450,300,10);
            ground3 = new Ground(1000,400,250,10);
        //stage 1 level 1
            box = new Box(330,300,40,50);
            box2 = new Box(370,300,40,50);
            box3 = new Box(410,300,40,50);
            box4 = new Box(450,300,40,50);
            box5 = new Box(490,300,40,50); 
            box6 = new Box(530,300,40,50);
            box7 = new Box(570,300,40,50); 
        //stage 1 level 2
            box8 = new Box(370,200,40,50); 
            box9 = new Box(410,200,40,50);
            box10 = new Box(450,200,40,50);
            box11 = new Box(490,200,40,50); 
            box12 = new Box(530,200,40,50); 
        //stage 1 level 3
            box13 = new Box(410,100,40,50); 
            box14 = new Box(450,100,40,50); 
            box15 = new Box(490,100,40,50); 
        //stage 1 level 4
            box16 = new Box(450,50,40,50);

        //stage 2 level 1
            box17 = new Box(920,200,40,50);
            box18 = new Box(960,200,40,50);
            box19 = new Box(1000,200,40,50);
            box20 = new Box(1040,200,40,50);
            box21 = new Box(1080,200,40,50);
        //stage 2 level 2
            box22 = new Box(960,100,40,50);
            box23 = new Box(1000,100,40,50);
            box24 = new Box(1040,100,40,50);
        //stage 2 level 3
            box25 = new Box(1000,50,40,50); 
        //ball     
            ball = Bodies.circle( 50, 200 , 20 ) ;
            World.add( world , ball ) ;
        //slingshot
        sling = new Slingshot(this.ball,{x:100,y:200});    

         
 }




 function draw(){
 background(155);
    Engine.update(engine);
        
     imageMode(CENTER)
     image(polygon,100,250, 50,50);
     
    // Ground
        ground.display()
        ground2.display()
        ground3.display()
    // stage 1
    // level 1
        fill("red")
        box.display()
        box2.display()
        box3.display()
        box4.display()
        box5.display()
        box6.display()
        box7.display()
    // level 2
        fill("yellow")
        box8.display()
        box9.display()
        box10.display()
        box11.display()
        box12.display()
    // level 3
        fill("lightblue")
        box13.display()
        box14.display()
        box15.display()
    //level 4
        fill("brown")
        box16.display()
    //stage 2
    //level 1
        fill("lightpink")
        box17.display()  
        box18.display()  
        box19.display()  
        box20.display()  
        box21.display()
    //level 2
        fill("blue")
        box22.display()  
        box23.display() 
        box24.display() 
    //level 3
        fill("yellow")
       box25.display() 
                 
 }



 function mouseDragged(){
    Matter.Body.setPosition(ball.Body ,{x:mouseX , y: mouseY})
 }
 function mouseReleased(){
	ball.fly()
  
  }
