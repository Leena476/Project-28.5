//name the class
class Elastic {

    //add properties into constructor
    constructor(bodyA,pointB){

        //write all the options
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 10,
            stiffness : 0.004
        }

        //create this.body using Constraint.create
        this.body = Constraint.create(options);

        //add this.body to World
        World.add(world,this.body);

        //store pointB in this.pointB
        this.pointB = pointB;

    }

    //fly function used in mouseReleased in sketch.js to disconnect pointB and stone.body
    fly(){
        this.body.bodyA = null;
    }

    //attach function used in keyPressed in sketch.js to reconnect pointB and stone.body
    attach(newBodyA){
        this.body.bodyA = newBodyA;
    }

    display(){

        //if this.body.bodyA is not equal to null (is connected to pointB)...
        if(this.body.bodyA){
            
            //define posA and posB
            var posA = this.body.bodyA.position;
            var posB = this.pointB;
            
            //set the stroke weight of the line defined in line 49
            strokeWeight(5);

            //display a line between posA and posB (pointB and stone.body)
            line(posA.x,posA.y,posB.x,posB.y);

        }

    }

}