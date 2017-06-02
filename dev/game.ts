/// <reference path="ball.ts"/>
/// <reference path="paddle.ts"/>
class Game {
    
    // geef hier de ball instance een naam
    allBalls:Array<Ball>;
    p1:Paddle;
    p2:Paddle;
    
    constructor() {
        this.allBalls = new Array<Ball>();
        // Balls
        for (var i = 0; i < 20; i++){
            this.allBalls.push(new Ball());
        }
        // Paddles
        this.paddle1();
        this.paddle2();
        // start de game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    
    private gameLoop(){
        // roep hier de move functie van de bal aan
        ///
        for (let ball of this.allBalls){
            ball.move();
        }
        this.p1.move();
        this.p2.move();
        this.collision1();
        this.collision2();
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private collision1(){
        for (let ball of this.allBalls){
            if(ball.posX < this.p1.x + this.p1.width &&
            ball.posX + ball.width > this.p1.x &&
            ball.posY < this.p1.y + this.p1.height &&
            ball.height + ball.posY > this.p1.y) {
            ball.speedY *= -1;
            ball.speedX *= -1;
        }
        }
    }   
    private collision2(){
        for (let ball of this.allBalls){
            if(ball.posX < this.p2.x + this.p2.width &&
            ball.posX + ball.width > this.p2.x &&
            ball.posY < this.p2.y + this.p2.height &&
            ball.height + ball.posY > this.p2.y) {
            ball.speedY *= -1;
            ball.speedX *= -1;
        }
        }
    }

    private paddle1(){
        this.p1 = new Paddle();
        this.p1.upkey = 87;
        this.p1.downkey = 83;
        this.p1.x = 0;
    }

    private paddle2(){
        this.p2 = new Paddle();
        this.p2.upkey = 38;
        this.p2.downkey = 40;
        this.p2.x = window.innerWidth-25;
        
    }
}