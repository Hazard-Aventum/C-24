class Paper{
  constructor(x,y,radius){
    var options = {
      'isStatic':false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2
     }
     this.body = Bodies.rectangle(x, y, radius, options);
     this.width = width;
     this.height = height;
     World.add(World, this.body);

  }
   display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
    rotate (angle)
    rectMode(CENTER);
    fill(255);
    rect(0,0, this.width, this.height);
    pop();
   }


}