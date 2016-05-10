///<reference path="../../../dist/Excalibur.d.ts" />

class PlayerController {
	engine: ex.Engine;

	constructor(engine:ex.Engine) {
		this.engine = engine;
		console.log(this);
	}
}

export = PlayerController;