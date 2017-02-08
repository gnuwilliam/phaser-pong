class Boot extends Phaser.State {
    preload () {
        this.game.load.image('loading', 'assets/loading.bmp');
    }

    create () {
        this.game.state.start('load');
        this.game.stage.smoothed = false;
        this.game.scale.pageAlignVertically = true;
    }
}