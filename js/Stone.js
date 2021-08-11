class Stone {
    constructor(x, y, w, h) {
        this.stone = Bodies.circle(x, y, w, h);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.stone);
    }

    show() {
        var pos = this.stone.position;
        var angle = this.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(pos.x, pos.y, this.w, this.h);
        pop();
    }
}