class Ball {
    
    private div : HTMLElement;
    posX : number;
    posY : number;
    height: number = 40;
    width: number = 40;
    speedX : number;
    speedY : number;
    
    constructor() {
        // creeer een div element
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        
        
        // start positie
        this.posX = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4);
        this.posY = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4);
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * 5);
        this.speedY = Math.ceil(Math.random() * 5);
                
        // plaatsen
        this.move();
    }
    
    
    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        // gebruik window.innerWidth en window.innerHeight om te zien of we nog in beeld zijn
        // let op dat de bal 40 pixels breed en hoog is
        if (this.posY >= window.innerHeight - 40 || this.posY <= 0){
            this.speedY *= -1;
        }
        if (this.posX >= window.innerWidth - 40 || this.posX <= 0){
            this.speedX *= -1;
        }

        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }
}