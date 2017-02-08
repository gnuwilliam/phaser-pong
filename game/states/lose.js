class Lose extends Phaser.State {
    create () {
        this.game.add.tileSprite(0, 0, 800, 600, 'over');

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.restart, this);
    }

    restart () {
        this.game.state.start('menu');
    }
}