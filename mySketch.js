function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}
let angle = 0;
let r=235,g=29,b=35
let i=1;

function draw() {
	
	if (i>208) {
		noLoop()
	}
	

	fill(r,g,b)
	
	push()
	translate(windowWidth/2+170,windowHeight/2+230) // bottom left spiral
	rotate(0.145)
	spiral()
	pop()

	push()
	translate(windowWidth/2-170, windowHeight/2+230) // bottom right spiral
	rotate(89.375)
	spiral()
	pop()
	
	push()
	translate(windowWidth/2-270,windowHeight/2-96) // top left spiral
	rotate(134.62)
	spiral()
	pop()
	
	push()
	translate(windowWidth/2+270,windowHeight/2-96) // top right spiral
	rotate(225.15)
	spiral()
	pop()
	
	push()
	translate(windowWidth/2,windowHeight/2-299)
	rotate(179.79)
	spiral()
	pop()
	

}

function spiral() {
	
	push()
	angle_radians = radians(angle)
	rotate(angle_radians)
	
	stroke(i^2,i*10)
	strokeWeight(1.3);
	
	square(i,i,4)
	angle+=0.45
	
	r=r+(i/2000)%50
	b=b-(i/500)%50
	g=g+(i/1000)%50
	

	pop()
	
	//increment that controls spiral shape
	i=(i+0.1)
		
}