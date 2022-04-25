class Form{
    constructor(){
        fill("black");
        textSize(32)
        this.title = text("PatternGame",Height/2 + 130,50);
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.input.position(Height/2 + 140, 100);
        this.submit = createButton("Play!");
        this.submit.position(Height/2 + 200, 150)
    }

    click(){
        this.submit.mousePressed(()=>{
            gameState = 1;
            this.name = this.input.value();
            this.input.hide();
            this.submit.hide();
            database.ref("/userCount").get().then(data=>{
                this.userCount = data.val() + 1;
            });
            database.ref("/users/").update({

            })
            database.ref("/").update({
                userCount: this.userCount,
            })
        });
    }
}