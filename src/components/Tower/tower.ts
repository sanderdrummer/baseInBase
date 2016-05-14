///<reference path="../../../dist/Excalibur.d.ts" />

class Tower extends ex.Actor {

	constructor(x: number, y: number ) {
	    super(x, y, 15,15, ex.Color.Azure);

	    // set collisions active
	    this.collisionType = ex.CollisionType.Fixed;
	}
}

export = Tower;