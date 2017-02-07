// game instance
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update
});

// define game objects
var paddle_one,
    paddle_two,
    ball;

function preload () {
    game.load.image('paddle', 'assets/paddle.png');
    game.load.image('ball', 'assets/ball.png');
}

function create () {
    // paddles
    paddle_one = new Paddle(game, 0, game.world.centerY, false, false);
    paddle_two = new Paddle(game, game.world.width - 16, game.world.centerY, true, true);

    // ball
    ball = new Ball(game, game.world.centerX, game.world.centerY, false);
    game.input.onDown.add(ball.launch(), this);
}

function update () {
    game.physics.arcade.collide(paddle_one, ball);
    game.physics.arcade.collide(paddle_two, ball);

    if (ball.body.blocked.left) {
        console.log('Player 1 scores');
    } else if (ball.body.blocked.right) {
        console.log('Player 2 scores');
    }
}
