'use strict';

var Player = {
  cursors: {},
  jumpButton: {},
  sprite:{},
  player: function () {
    console.log('construct');
  },
  create: function (game) {

    // save the game reference
    this.game = game;

    // create player sprite
    this.sprite = this.game.add.sprite(10, 10, 'mushroom');

    // enable basic physics for player sprite
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.gravity.y = 1000;
    this.sprite.body.maxVelocity.y = 500;
    this.sprite.body.setSize(20, 32, 5, 16);

    // hook the camera to the player sprite
    // use FOLLOW_LOCKON as follow style
    this.game.camera.follow(this.sprite, Phaser.Camera.FOLLOW_LOCKON);





    // create input handlers
    this.cursors = game.input.keyboard.createCursorKeys();
    this.jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  },
  update: function () {
    // console.log(this.game);
    // console.log('update', this.cursors);
    if (this.cursors.up.isDown) {
      //up
      this.sprite.y -= 10;

    } else if (this.cursors.down.isDown) {
      //down
      this.sprite.y += 10;

    } if (this.cursors.left.isDown) {
      //left
      this.sprite.x -= 10;

    } else if (this.cursors.right.isDown) {
      //right
      this.sprite.x += 10;
    }
  }
}

module.exports = Player;
