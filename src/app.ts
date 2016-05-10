///<reference path="../dist/Excalibur.d.ts" />

declare function require(string): string;
require('../style/main.less');

import Player = require("./components/player/player");


let game = new ex.Engine({
	width: 800,
	height: 600
});

var player = new Player(100, game.getHeight() - 40, 20, 20, ex.Color.Red);

game.add(player);

game.start();