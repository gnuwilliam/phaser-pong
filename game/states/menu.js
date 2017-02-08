class Menu extends Phaser.State {
    create () {
        this.game.stage.smoothed = false;

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);

        this.game.add.tileSprite(0, 0, 800, 600, 'menu_bg');
    }

    start () {
        this.game.state.start('play');
    }
}