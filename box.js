class Box{


constructor(x,y,w,h){

var boxOptions= {
    restitution: 1
}
this.Body = Bodies.rectangle(x,y,w,h,boxOptions);
this.width = w;
this.height = h;
World.add(world,this.Body);
}




display(){
    push()
translate(this.Body.position.x,this.Body.position.y)
rotate(this.Body.angle)
fill("blue");
    rectMode(CENTER)
    rect(0,0,this.width,this.height)

    pop()

}


}