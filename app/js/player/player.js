var Player = {
  cursors: {},
  sprite:{},
  player: function () {
    console.log('construct');
  },
  create: function (game) {
    console.log('Kuchen');
    this.game = game;
    this.sprite = this.game.add.sprite(200, 200, 'mushroom');
    this.cursors = game.input.keyboard.createCursorKeys();
  },
  update: function () {
    // console.log(this.game);
    // console.log('update', this.cursors);
    if (this.cursors.up.isDown)
    {
      //up
      this.sprite.y -= 10;
    }
    else if (this.cursors.down.isDown)
    {
      //down
      this.sprite.y += 10;
    }

    if (this.cursors.left.isDown)
    {
      //left
      this.sprite.x -= 10
    }
    else if (this.cursors.right.isDown)
    {
      //right
      this.sprite.x += 10
    }
  }
}

module.exports = Player;
