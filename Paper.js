
        class Paper{

            constructor(x,y,radius){
        
                var options ={
                    isStatic: false,
                    restitution: 0.3,
                    friction: 0.5,
                    density: 1.2
                }
        
                this.body = Bodies.circle(x,y,radius,options);
                this.width = radius;
                this.height=radius;
                World.add(world, this.body);
        
        
            }
            display()
            {
                var paperPos = this.body.position;
                push()
                translate(paperPos.x, paperPos.y);
                rectMode(CENTER)
                fill("white");
                ellipse(0,0,this.width, this.height);
                pop()
                    
        
            }
        }