///<reference path="../dist/Excalibur.d.ts" />

class Player extends ex.Actor {
	constructor(x:number, y:number, width:number, height:number, color:ex.Color) {
		super(x, y, width, height, color);
		
		// set collisions active
		this.collisionType = ex.CollisionType.Active;
	}
}

export = Player;