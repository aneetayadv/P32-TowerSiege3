class SlingShot {
    constructor(body,pointB)
	{		
		var options={
			bodyA:body,			 
			pointB:pointB, 
			stiffness:0.04, 
			length:1			
		}
		
		this.bodyA=body
		this.pointB=pointB
		this.sling=Constraint.create(options)
		World.add(myWorld,this.sling)
	}

	attach(body){
		this.sling.bodyA=body;
	}

	fly()
	{
		this.sling.bodyA=null;
	}

	show()
	{
		if(this.sling.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			
			push();
			strokeWeight(2);
			stroke("Black");	
			line(pointA.x,pointA.y,pointB.x,pointB.y);
			pop();
		}
	}
}