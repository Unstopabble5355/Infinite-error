var zombieImg,Zombie,zomgroup;
var unicorn,UnicornAnimation,unicornImg;
var ground,groundImg;
var serve;
var play;
var end;
var score;
var arrowImg,arrow;
function preload(){
zombieImg=loadImage("zombie.png");
UnicornAnimation=loadAnimation("unicorn1.png","unicorn2.png");
unicornImg=loadImage("uni.png")
groundImg=loadImage("ground2.png");
arrowImg=loadImage("ARROW.png")
}

function setup() {
    createCanvas(600,600)
 zombie=createSprite(200,50);
 zombie.addImage(zombieImg);
zomgroup=new Group();
 unicorn=createSprite(300,70);
 arrow=createSprite(400,70);
}
function draw() {
background("cyan");
if(ground.y>400){
ground.y=height/2;
}

if(gameState===serve){
unicorn.x=56;
unicorn.y=305;
unicorn.addImage(unicornImg);
ground.velocity=0;
zomgroup.add(zombie);
}

if(gameState===play){
ground.velocity=-3;
unicorn.addAnimation(UnicornAnimation);
if(keyDown(LEFT_ARROW)){
arrow.addImage(arrowImg);

}

if(arrow.isTouching(zombie)){
score=score+5;
zombie.destroy;
}

text("score",+score,72,29);
}

    drawsprites();
}

function mousePressed(){

gamestate=play;

}