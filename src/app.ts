///<reference path="../dist/Excalibur.d.ts" />

declare function require(string): string;
require('../style/main.less');

import Player = require("./Player");


let game = new ex.Engine({
	width: 800,
	height: 600
});

var player = new Player(100, game.getHeight() - 40, 200, 20, ex.Color.Chartreuse);

game.add(player);

game.start();