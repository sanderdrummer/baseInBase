///<reference path="../../../dist/Excalibur.d.ts" />

import PlayerController = require('./playerController');

class Player extends ex.Actor {

	controller: PlayerController;
	velocity: number;
	constructor(x:number, y:number, width:number, height:number, color:ex.Color) {
		super(x, y, width, height, color);

		// physics
		this.velocity = 1;


		// set collisions active
		this.collisionType = ex.CollisionType.Active;
	}

	handleKeyInput(evtObj:ex.GameEvent) {
		console.log(evtObj);
	}

	onInitialize(engine: ex.Engine) {
		this.controller = new PlayerController(engine);
		console.log(this.controller);
	}

	update(engine: ex.Engine, delta) {
		super.update(engine, delta);

        this.controller.handleMovement(engine, this);

	}

   public draw(ctx: CanvasRenderingContext2D, delta: number): void {

        this.drawGlow(ctx, delta);

        super.draw(ctx, delta);
    }

    private drawGlow(ctx: CanvasRenderingContext2D, delta: number): void {

        // create radial gradient
        var grd = ctx.createRadialGradient(this.getCenter().x, this.getCenter().y, 10, this.getCenter().x, this.getCenter().y, 180);

        grd.addColorStop(0, 'rgba(255,255,255,0.3)');
        grd.addColorStop(1, 'rgba(0,0,0,0.0)');

        ctx.fillStyle = grd;
        ctx.beginPath();

        ctx.arc(this.getCenter().x, this.getCenter().y, 180, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

export = Player;