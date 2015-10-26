(function() {
  'use strict';

  function Light(game, x, y) {
      Phaser.Sprite.call(game, x, y, 'light');
  }

  Light.prototype = {
    preload: function(){
      this.game.load.image('light', '/assets/preloader.gif');
    },

    create: function () {

      this.LIGHT_RADIUS = 100;

      this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);

      var lightSprite = this.game.add.image(0, 0, this.shadowTexture);

      // Set the blend mode to MULTIPLY. This will darken the colors of
      // everything below this sprite.
      lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

    },

    update: function () {
      // Draw shadow
    this.shadowTexture.context.fillStyle = 'rgb(100, 100, 100)';
    this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);

    // Draw circle of light
    this.shadowTexture.context.beginPath();
    this.shadowTexture.context.fillStyle = 'rgb(255, 255, 255)';
    this.shadowTexture.context.arc(this.game.input.activePointer.x, this.game.input.activePointer.y,
        this.LIGHT_RADIUS, 0, Math.PI*2);
    this.shadowTexture.context.fill();

    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;
    }
  };

  window['bib'] = window['bib'] || {};
  window['bib'].Light = Light;
}());
