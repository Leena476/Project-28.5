//name the class
class Ground {

    //add properties into constructor
    constructor(x,y,width,height){

        //write all the options
        var options = {
            isStatic: true
        }

        //create this.body using Bodies.rectangle
        this.body = Bodies.rectangle(x,y,width,height,options);

        //add this.body to World
        World.add(world,this.body);

        //store width and height properties in this.width and this.height
        this.width = width;
        this.height = height;

    }

     display(){

        //define pos
        var pos = this.body.position;

        //set the rectMode as CENTER
        rectMode(CENTER);

        //display rect with no stroke that is green
        noStroke();
        fill("green");
        rect(pos.x,pos.y,this.width,this.height);

    }

}