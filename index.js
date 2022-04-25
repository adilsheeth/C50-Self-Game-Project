let database = firebase.database();
let form, Width, Height, gameState;

//0 = start, 1 = wait, 2 = play, 3 = end.

function setup(){
    createCanvas(displayWidth,displayHeight);
    Width = displayWidth;
    Height = displayHeight;
    database.ref("/gameState").on('value',data =>{
        gameState = data.val();
    });
    form = new Form();
}

function preload(){

}

function draw(){
    if(gameState == 0){
        form.click();
    }
    if(gameState == 1){
        
    }
}