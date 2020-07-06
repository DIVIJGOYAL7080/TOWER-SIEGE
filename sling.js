class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 7
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }
    attatch(body){

this.sling.bodyA=body;




    }
       fly(){

             
       this.sling.bodyA=null;
             



       }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        fill("red");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}