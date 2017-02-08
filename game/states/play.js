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
        game.input.onDown.addOnce(this.ball.launch(), this);

        game.stage.backgroundColor = "#292953";

        this.score_one = this.game.add.text(
            32, 32,
            `Score: ${this.paddle_one.score}`,
            { font: '20px Courier', fill: '#FFF' }
        );

        this.score_two = this.game.add.text(
            800-132, 32,
            `Score: ${this.paddle_two.score}`,
            { font: '20px Courier', fill: '#FFF' }
        );

        this.start_text = this.game.add.text(
            this.game.world.centerX-160, this.game.world.centerY-22,
            `Click to Start`,
            { font: '40px Courier', fill: '#FFF' }
        );

        game.input.onDown.addOnce(this.removeStarText(), this);
    }

    update () {
        this.game.physics.arcade.collide(this.paddle_one, this.ball);
        this.game.physics.arcade.collide(this.paddle_two, this.ball);

        if (this.ball.body.blocked.right) {
            this.paddle_one.score += 1;
            this.score_one.setText(`Score: ${this.paddle_one.score}`);
        } else if (this.ball.body.blocked.left) {
            this.paddle_two.score += 1;
            this.score_two.setText(`Score: ${this.paddle_two.score}`);
        }

        if (this.paddle_one.score >= 5) {
            this.game.state.start('win');
        } else if (this.paddle_two.score >= 5) {
            this.game.state.start('lose');
        }
    }

    removeStarText () {
        return function () {
            this.start_text.destroy();
        }
    }
}