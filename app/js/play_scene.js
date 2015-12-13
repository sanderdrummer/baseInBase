'use strict';

var Player = require('./player/player.js');


var PlayScene = {
  create: function () {
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
    Player.create(this.game);

  },
  update: function () {
    Player.update();
  }
};

module.exports = PlayScene;
