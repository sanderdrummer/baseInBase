///<reference path="../dist/Excalibur.d.ts" />

declare function require(string): string;
require('../style/main.less');

let game = new ex.Engine({
	width: 800,
	height: 600
});

game.start();