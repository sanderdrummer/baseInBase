///<reference path="../../../dist/Excalibur.d.ts" />

import Player = require('./player');
import TowerFactory = require('../Tower/towerFactory');

class PlayerController {
	engine: ex.Engine;
	towerFactory: TowerFactory;

	constructor(engine:ex.Engine) {
		this.engine = engine;
		this.towerFactory = new TowerFactory(engine);
	}

    handleMovement(engine, player:Player) {

        if (engine.input.keyboard.isHeld(ex.Input.Keys.W) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Up)) {
            player.y -= 1 * player.velocity;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.S) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Down)) {
            player.y += 1 * player.velocity;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.A) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
            player.x -= 1 * player.velocity;
        }
        if (engine.input.keyboard.isHeld(ex.Input.Keys.D) ||
            engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
            player.x += 1 * player.velocity;
        }

        if (engine.input.keyboard.isHeld(ex.Input.Keys.V)) {
            player.velocity = player.velocity < 4 ?
                player.velocity * 1.1 : player.velocity;
        } else {
            player.velocity = player.velocity > 1 ?
                player.velocity / 1.05 : player.velocity;
        }
    }

    handleConstruction(engine:ex.Engine, player:Player) {
    	if (engine.input.keyboard.wasPressed(ex.Input.Keys.C)) {
			this.towerFactory.addTower(player.x + 20, player.y + 20);
    	}
    }
}

export = PlayerController;