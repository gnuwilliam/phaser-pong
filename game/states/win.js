class Win extends Phaser.State {
    create () {
        this.game.add.tileSprite(0, 0, 800, 600, 'win');

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.restart, this);
    }

    restart () {
        this.game.state.start('menu');
    }
}