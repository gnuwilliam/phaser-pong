class Play extends Phaser.State {
    create () {
        // define game objects
        this.paddle_one = null;
        this.paddle_two = null;
        this.ball = null;

        // paddles
        this.paddle_one = new Paddle(this.game, 0, this.game.world.centerY, false, false);
        this.paddle_two = new Paddle(this.game, this.game.world.width - 16, this.game.world.centerY, true, true);

        // ball
        this.ball = new Ball(this.game, this.game.world.centerX, this.game.world.centerY, false);
        game.input.onDown.add(this.ball.launch(), this);

        game.stage.backgroundColor = "#292953";
    }

    update () {
        this.game.physics.arcade.collide(this.paddle_one, this.ball);
        this.game.physics.arcade.collide(this.paddle_two, this.ball);

        if (this.ball.body.blocked.left) {
            console.log('Player 1 scores');
        } else if (this.ball.body.blocked.right) {
            console.log('Player 2 scores');
        }
    }
}