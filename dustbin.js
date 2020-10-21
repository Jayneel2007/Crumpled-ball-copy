class Dustbin{
    constructor(x,y,height,angle){

        var options ={

            'restitution':0.5,
            'friction':0.5,
            'density':1.0

        }
        
        
        this.body = Bodies.rectangle(x, y, 20, height, options);
        Matter.Body.setAngle(this.body,angle)
        this.width = 20;
        this.height = height;

        World.add(world,this.body)
    }


    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white")
        rect(0,0,this.width,this.height)
        pop();
        
    }

}