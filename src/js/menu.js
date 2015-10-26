(function() {
  'use strict';

  function Menu() {}

  Menu.prototype = {
    create: function () {
      var text = this.add.text(this.game.width * 0.5, this.game.height * 0.5,
        'MENU', {font: '42px Arial', fill: '#ffffff', align: 'center'
      });
      text.anchor.set(0.5);
      this.game.stage.backgroundColor = 0x4488cc;
      this.LIGHT_RADIUS = 100;

      this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);

      var lightSprite = this.game.add.image(0, 0, this.shadowTexture);

      // Set the blend mode to MULTIPLY. This will darken the colors of
      // everything below this sprite.
      lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

      // Simulate a pointer click/tap input at the center of the stage
      // when the example begins running.
      this.game.input.activePointer.x = this.game.width/2;
      this.game.input.activePointer.y = this.game.height/2
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
  window['bib'].Menu = Menu;
}());
