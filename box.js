class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
      display(){
        console.log(this.body.speed);
        if (this.body.speed < 3) {
          super.display();
        }
        else{
          World.remove (world, this.body);
          push();
           this.Visibility = this.Visibility -5;
           tint (255,this.Visibility);
    }
        push(); 
          translate(50, 0);
       strokeWeight(10);
      fill(204, 153, 0);
      ellipse(0, 50, 33, 33); 
       pop(); 

      ellipse(100, 50, 33, 33);
}

}
function keyPressed(params) {
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
}
