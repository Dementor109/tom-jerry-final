var bgImg;
var jerry, tom;
var tomI, tomII,tomIII;
var jerryI, jerryII,jerryIII;

function preload() {
    bgImg = loadImage("images/garden.png");

    tomI= loadAnimation("images/beginTom.png");
    tomII=loadAnimation("images/tomwALKING.png","images/tomW2.png");
    tomIII= loadAnimation("images/endTOm.png");

    jerryI=loadAnimation("images/start.png");
    jerryII= loadAnimation("images/t1.png","images/t2.png");
    jerryIII=loadAnimation("images/end.png");

}

function setup(){
    createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomLaying", tomI);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryI);
    jerry.scale = 0.15;

}

function draw() {

    background(bgImg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomSitting", tomIII);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomSitting");
        jerry.addAnimation("jerryCeleb", jerryIII);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryCeleb");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomChasing", tomII);
        tom.changeAnimation("tomChasing");
        
        jerry.addAnimation("jerryTeasing", jerryII);
        jerry.changeAnimation("jerryTeasing");
    }
}