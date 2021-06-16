class Plane {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var planepos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(planepos.x, planepos.y, this.width, this.height);
    }
  };