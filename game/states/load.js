class Load extends Phaser.State {
    preload () {
        this.game.load.image('menu_bg', 'assets/bg.bmp');
        this.game.load.image('paddle', 'assets/paddle.png');
        this.game.load.image('ball', 'assets/ball.png');

        this.game.add.tileSprite(0, 0, 800, 600, 'loading');
    }

    create () {
        setTimeout(function() {
            this.game.state.start('menu');
        }, 1000);
    }
}