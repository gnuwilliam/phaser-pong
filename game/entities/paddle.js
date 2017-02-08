class Paddle extends Phaser.Sprite {
    constructor (game, x, y, flipX, mute) {
        super(game, x, y, 'paddle');

        this.anchor.setTo(0.5, 0.5);
        this.mute = mute;
        this.score = 0;

        if (flipX) {
            this.scale.x *= -1;
        }

        game.physics.arcade.enable(this);
        this.body.collideWorldBounds = true;
        this.body.immovable = true;

        game.add.existing(this);
    }

    update () {
        if (!this.mute) {
            this.y = this.game.input.y;

            if (this.y < this.texture.height / 2) {
                this.y = this.texture.height / 2;
            } else if (this.y > this.game.world.height - this.texture.height / 2) {
                this.y = this.game.world.height - this.texture.height / 2;
            }
        }
    }
}

