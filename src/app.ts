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


// emitter test
var emitter = new ex.ParticleEmitter(300,300, 10,10);
emitter.radius = 5;
emitter.minVel = 100;
emitter.maxVel = 200;
emitter.minAngle = 0;
emitter.maxAngle = Math.PI * 2;
emitter.emitRate = 3; // 300 particles/second
emitter.opacity = 0.5;
emitter.fadeFlag = true; // fade particles overtime
emitter.particleLife = 1000; // in milliseconds = 1 sec
emitter.maxSize = 4; // in pixels
emitter.minSize = 1;
emitter.isEmitting = true;



// emitter.particleColor = ex.Color.Rose;
game.add(player);
game.add(emitter);
game.add(guard);

game.start();