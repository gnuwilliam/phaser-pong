class Menu extends Phaser.State {
    create () {
        var nameLabel = this.game.add.text(80, 80, 'Pong', { font: '30px Courier', fill: '#FFF' });

        var startLabel = this.game.add.text(
            80,
            this.game.world.height - 80,
            'press space to start',
            { font: '30px Courier', fill: '#FFF' }
        );

        this.game.stage.smoothed = false;

        var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.addOnce(this.start, this);

        this.game.add.tileSprite(0, 0, 800, 600, 'menu_bg');
    }

    start () {
        this.game.state.start('play');
    }
}