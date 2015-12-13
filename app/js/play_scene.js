'use strict';

var Player = require('./player/player.js');
var Light = require('./light.js');


var PlayScene = {
  create: function () {

    // add backgorund logo
    var logo = this.game.add.sprite(
      this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    // create gameWorld
    this.game.world.setBounds(0, 0, 800, 400);

    // add player to gameWorld
    Player.create(this.game);

    // lighting
    this.game.stage.backgroundColor = 0x4488cc;
    this.lights = this.game.add.group();
    this.lights.add(new Light(this.game, 0, 0));
    this.lights.add(new Light(this.game, this.game.width-200, 150));

  },
  update: function () {

    // update Player
    Player.update();
  }
};

module.exports = PlayScene;
