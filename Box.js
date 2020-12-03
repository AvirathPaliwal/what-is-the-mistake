class Box{
 constructor(x,y,width,height){
   var position ={
       isStatic:false
   }
    this.body=Bodies.rectangle(x,y,width,height,position)
    this.w=width
    this.h=height
    World.add(world,this.body)
 }
  display(){
    var pos =this.body.position
    rectMode(CENTER)
     push()
         
         translate(pos.x, pos.y);
         rotate(this.body.angle);
         rect(0,0,this.w,this.h)
         rect(0,0,this.w,this.h)
         pop()
  }

}