class Dustbin{
    constructor(x,y){
      
        this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		

        this.w = width;
        this.h = height;
        this.image = loadImage('dustbingreen.png');
        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
    }
    display(){
        var pos = this.bottomBody.position;
        var leftPos =  this.leftWallBody.position;
        var rightpos = this.rightWallBody.position;
             push()
			translate(leftPos.x, leftPos.y);
			rectMode(CENTER)
			translate(pos.x,pos.y);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
            pop();
            

            push();
			translate(rightpos.x, rightpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
            pop();
            

            push()
			translate(pos.x, pos.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()



    }
}
