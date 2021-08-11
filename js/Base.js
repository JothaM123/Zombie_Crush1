class Base {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        noStroke();
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}