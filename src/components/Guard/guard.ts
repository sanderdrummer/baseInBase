///<reference path="../../../dist/Excalibur.d.ts" />

class Guard extends ex.Actor {

    velocity: number;
    constructor(x: number, y: number, width: number, height: number, color: ex.Color) {
        super(x, y, width, height, color);

        // physics
        this.velocity = 1;


        // set collisions active
        this.collisionType = ex.CollisionType.Active;
    }

    handleKeyInput(evtObj: ex.GameEvent) {
        console.log(evtObj);
    }

    onInitialize(engine: ex.Engine) {
    }

    update(engine: ex.Engine, delta) {
        super.update(engine, delta);

    }
}

export = Guard;