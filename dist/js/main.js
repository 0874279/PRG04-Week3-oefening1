var Ball = (function () {
    function Ball() {
        this.height = 40;
        this.width = 40;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.posX = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.posY = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
        this.move();
    }
    Ball.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posY >= window.innerHeight - 40 || this.posY <= 0) {
            this.speedY *= -1;
        }
        if (this.posX >= window.innerWidth - 40 || this.posX <= 0) {
            this.speedX *= -1;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Ball;
}());
var Paddle = (function () {
    function Paddle() {
        this.width = 25;
        this.height = 100;
        this.x = 0;
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.createDiv();
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    Paddle.prototype.createDiv = function () {
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.y = window.innerHeight * 0.5 - 50;
        this.move();
    };
    Paddle.prototype.move = function () {
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Paddle.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 5;
                break;
            case this.downkey:
                this.downSpeed = 5;
                break;
        }
    };
    Paddle.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 0;
                break;
        }
    };
    return Paddle;
}());
var Game = (function () {
    function Game() {
        this.allBalls = new Array();
        for (var i = 0; i < 20; i++) {
            this.allBalls.push(new Ball());
        }
        this.paddle1();
        this.paddle2();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        for (var _i = 0, _a = this.allBalls; _i < _a.length; _i++) {
            var ball = _a[_i];
            ball.move();
        }
        this.p1.move();
        this.p2.move();
        this.collision1();
        this.collision2();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    Game.prototype.collision1 = function () {
        for (var _i = 0, _a = this.allBalls; _i < _a.length; _i++) {
            var ball = _a[_i];
            if (ball.posX < this.p1.x + this.p1.width &&
                ball.posX + ball.width > this.p1.x &&
                ball.posY < this.p1.y + this.p1.height &&
                ball.height + ball.posY > this.p1.y) {
                ball.speedY *= -1;
                ball.speedX *= -1;
            }
        }
    };
    Game.prototype.collision2 = function () {
        for (var _i = 0, _a = this.allBalls; _i < _a.length; _i++) {
            var ball = _a[_i];
            if (ball.posX < this.p2.x + this.p2.width &&
                ball.posX + ball.width > this.p2.x &&
                ball.posY < this.p2.y + this.p2.height &&
                ball.height + ball.posY > this.p2.y) {
                ball.speedY *= -1;
                ball.speedX *= -1;
            }
        }
    };
    Game.prototype.paddle1 = function () {
        this.p1 = new Paddle();
        this.p1.upkey = 87;
        this.p1.downkey = 83;
        this.p1.x = 0;
    };
    Game.prototype.paddle2 = function () {
        this.p2 = new Paddle();
        this.p2.upkey = 38;
        this.p2.downkey = 40;
        this.p2.x = window.innerWidth - 25;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map