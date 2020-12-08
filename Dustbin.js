class Dustbin
{
	constructor(x,y)
	{
		var option ={
			isStatic: true
		}
		this.x=x;
		this.y=y;
		this.width=200;
		this.height=100;
		this.thickness=10;
		this.angle=0;	
		
		this.bottompart=Bodies.rectangle(this.x, this.y, this.width, this.thickness, option);
		World.add(world, this.bottompart);

		this.leftpart=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height,option);
		World.add(world, this.leftpart);

		this.rightpart=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height,option);
		World.add(world, this.rightpart);

	}
	display()
	{
			var posBottom=this.bottompart.position;
			var posLeft=this.leftpart.position;
			var posRight=this.rightpart.position;	

			rectMode(CENTER)
			fill(255)
			stroke(255)
			rect(posLeft.x,posLeft.y,this.thickness, this.height);
			
			rectMode(CENTER)
			stroke(255)
			fill(255)
			rect(posRight.x,posRight.y,this.thickness, this.height);

      		rectMode(CENTER)
			stroke(255)
			fill(255)
			rect(posBottom.x,posBottom.y,this.width, this.thickness);
	
			
	}

}
