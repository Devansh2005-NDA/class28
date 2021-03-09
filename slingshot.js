class Slingshot{
    constructor(bodyA,pointB){
        var Option= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            lenght:13.5
        }
  this.Slingshot=Constraint.create(Option)
  this.bodyA=bodyA;
  this.pointB=pointB;
    World.add(world,this.Slingshot);

    }
    fly(){
        this.Slingshot.bodyA=null;
    }
    
display(){
    if(this.Slingshot.bodyA){
        var pointA=this.Slingshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
   
}
}