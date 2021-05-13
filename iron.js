class Iron{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            friction:3,
            density:30,
        }
        this.body =Matter.Bodies.circle(x, y, width, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
      push()
      ellipseMode(RADIUS);
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      ellipse(0,0,this.width,this.height)
      pop()
    }
  }