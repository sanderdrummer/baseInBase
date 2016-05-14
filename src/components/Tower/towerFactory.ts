///<reference path="../../../dist/Excalibur.d.ts" />

import Tower = require('./tower');

class TowerFactory{

	engine: ex.Engine;

	constructor(engine: ex.Engine) {
		this.engine = engine;

	}

	addTower(x:number, y:number) {
		this.engine.currentScene.add(new Tower(x, y));
	}
}

export = TowerFactory;