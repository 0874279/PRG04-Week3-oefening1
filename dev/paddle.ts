class Paddle {
    div:HTMLElement;
    width:number = 25;
    height:number = 100;
    y:number;
    x:number = 0;
    //keyboard
    downSpeed:number = 0;
    upSpeed:number = 0;
    upkey:number;
    downkey:number;

    constructor() {
    this.createDiv();

    window.addEventListener("keydown", this.onKeyDown.bind(this));
    window.addEventListener("keyup", this.onKeyUp.bind(this));

}

    createDiv(){
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);

        
        this.y = window.innerHeight*0.5-50;
        this.move();
    }
    
    public move(){
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.div.style.transform ="translate("+this.x+"px,"+this.y+"px)";
    }

    // keyboard Moving
    private onKeyDown(event:KeyboardEvent):void{
        switch(event.keyCode){
            case this.upkey:
            this.upSpeed = 5;
            break;
            case this.downkey:
            this.downSpeed = 5;
            break;
        }
    }
    
    private onKeyUp(event:KeyboardEvent):void{
        switch(event.keyCode){
            case this.upkey:
            this.upSpeed = 0;
            break;
            case this.downkey:
            this.downSpeed = 0;
            break;
        }
    }
}   