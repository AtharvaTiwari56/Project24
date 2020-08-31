class Paper {
    constructor(x, y, radius) {
        var paperoptions = {
            //isStatic: false,
            restitution :0.5,
            friction:0.5,
            density:1.0
        }
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.radius, paperoptions);
        World.add(world, this.body);
    }

    display() {
        push ();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius, this.radius);
        pop ();
    }
}