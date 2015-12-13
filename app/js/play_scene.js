'use strict';

var Player = require('./player/player.js');


var PlayScene = {
  create: function () {

    // add backgorund logo
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    // create gameWorld
    this.game.world.setBounds(0, 0, 1400, 1400);

    // add player to gameWorld
    Player.create(this.game);


  },
  update: function () {

    // update Player
    Player.update();
  }
};

module.exports = PlayScene;
