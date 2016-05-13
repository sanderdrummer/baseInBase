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
}

export = Player;