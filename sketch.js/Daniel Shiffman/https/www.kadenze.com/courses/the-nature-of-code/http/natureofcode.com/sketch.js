var person;

function setup() {
  createCanvas(720, 450);
	person = new Person();
}

function keyPressed

function draw() {
  background(100);
	
	if(mouseIsPressed){
		
	var force = createVector( -0.001,0);
      person.applyForce(force);
	}
  
	translate( -person.pos.x , 0 );	
	person.update();
    person.display();

	
// immobile obstacle
  fill(235);
  rect (620,385,100,65);
}
