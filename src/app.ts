///<reference path="../dist/Excalibur.d.ts" />

declare function require(string): string;
require('../style/main.less');

import Player = require("./components/player/player");
import Guard = require("./components/Guard/Guard");


let game = new ex.Engine({
	width: 800,
	height: 600
});

var player = new Player(100, game.getHeight() - 40, 20, 20, ex.Color.Red);
var guard = new Guard(150, game.getHeight() - 80, 25, 25, ex.Color.Yellow);

game.add(player);
game.add(guard);

game.start();