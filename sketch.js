var splashimg
var gameState="wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton,infobutton,bglevel1



function preload(){
splashimg=loadImage("assets/splash.gif")
bglevel1=loadImage("assets/background.png")





}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton = createImg("assets/startbutton.png")
playbutton.position(25,0)
 playbutton.size(300,300)


musicbutton = createImg("assets/soundButton.png")
musicbutton.position(0, playbutton.y+100)
musicbutton.size(335,345)


mutebutton = createImg("assets/mute.png")
mutebutton.position(0, playbutton.y+100)
mutebutton.size(335,345)
mutebutton.hide()

// replace with information image
infobutton = createImg("assets/info.png")
infobutton.position(0, 0)
infobutton.size(500, 500)
 infobutton.hide()


}


function draw(){

if (gameState=="wait"){
    background(splashimg)
}


playbutton.mousePressed(() => {
    playbutton.hide()
    infobutton.show()
    gameState="info"
      
})


if (gameState =="info"){
    background(0)
}


}