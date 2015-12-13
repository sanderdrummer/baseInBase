'use strict';

//  Here is a custom game object
var Light = function (game, x, y, rotateSpeed) {

    Phaser.Sprite.call(this, game, x, y, 'light');

    this.LIGHT_RADIUS = 100;
    this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);
    var lightSprite = this.game.add.image(x, y, this.shadowTexture);

        // Set the blend mode to MULTIPLY. This will darken the colors of
        // everything below this sprite.
    lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

    this.rotateSpeed = rotateSpeed;

};

Light.prototype = Object.create(Phaser.Sprite.prototype);
Light.prototype.constructor = Light;

Light.prototype.update = function() {

  // Draw shadow
this.shadowTexture.context.fillStyle = 'rgb(100, 100, 100)';
this.shadowTexture.context.fillRect(this.x, this.y, this.game.width, this.game.height);


    // Randomly change the radius each frame
    var radius = this.LIGHT_RADIUS + this.game.rnd.integerInRange(1,10);

    // Draw circle of light with a soft edge
    var gradient =
        this.shadowTexture.context.createRadialGradient(
            this.x, this.y,this.LIGHT_RADIUS * 0.75,
            this.x, this.y, radius);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

    this.shadowTexture.context.beginPath();
    this.shadowTexture.context.fillStyle = gradient;
    this.shadowTexture.context.arc(this.x, this.y, radius, 0, Math.PI*2);
    this.shadowTexture.context.fill();


// This just tells the engine it should update the texture cache
this.shadowTexture.dirty = true;
};

module.exports = Light;
