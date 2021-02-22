class fly{
    constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,
    pointB:bodyB,
    length:200,
    stiffness:1
    }
    this.Body=Constraint.create(options);
    World.add(world,this.Body);

    }
  
    display(){
    var pointA=this.Body.bodyA.position;
    var pointB=this.Body.pointB;
    push ();
    stroke (48,22,9);
    strokeWeight(0);

    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop ();
    }
    }