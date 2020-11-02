class Ground{


    constructor(){
    
    var groundOptions= {
        isStatic: true
    }
    this.Body = Bodies.rectangle(400,390,800,10,groundOptions);
    World.add(world,this.Body);
    }
    
    
    
    
    display(){
    fill("yellow");
        rectMode(CENTER)
        rect(this.Body.position.x,this.Body.position.y,800,10)
    
    }
    
    
    }