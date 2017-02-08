class Ball extends Phaser.Sprite {
    constructor (game, x, y, launched) {
        super(game, x, y, 'ball');

        game.physics.arcade.enable(this);

        this.anchor.setTo(0.5, 0.5);
        this.body.collideWorldBounds = true;
        this.body.bounce.setTo(1, 1);
        this.velocity = 400;

        game.add.existing(this);
    }

    launch () {
        var self = this;
        return function () {
            this.angle += 1;
            if (self.launched) {
                self.x = self.game.world.centerX;
                self.y = self.game.world.centerY;
                self.body.velocity.setTo(0, 0);
                self.launched = false;
            } else {
                self.body.velocity.x = -self.velocity;
                self.body.velocity.y = self.velocity;
                self.launched = true;
            }
        }
    }

    update () {
        this.angle += 1;
    }
}

