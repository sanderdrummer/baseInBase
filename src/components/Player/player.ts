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

		if (engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
			engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
			this.y -= 1 * this.velocity;
		}
		if (engine.input.keyboard.isHeld(ex.Input.Keys.S) ||
			engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
			this.y += 1 * this.velocity;
		}
		if (engine.input.keyboard.isHeld(ex.Input.Keys.A) ||
			engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
			this.x -= 1 * this.velocity;
		}
		if (engine.input.keyboard.isHeld(ex.Input.Keys.D) ||
			engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
			this.x += 1 * this.velocity;
		}

		if (engine.input.keyboard.isHeld(ex.Input.Keys.V)) {
			this.velocity = this.velocity < 4 ? 
				this.velocity * 1.1 : this.velocity ;
		} else {
			this.velocity = this.velocity > 1 ?
				this.velocity / 1.1 : this.velocity;
		}

	}
}

export = Player;