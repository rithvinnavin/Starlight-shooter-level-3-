var splashimg
var gameState = "wait"
var storybutton, mutebutton, musicbutton, nextbutton, playbutton, infobutton, bglevel1
var e1, e2, e3
var ground, enemieslevel1Group, playermissile, enemymissile, playermissileimg, enemymissileimg
var playermissileGroup, enemymissileGroup
var explosionimg, explosion,i,j

function preload() {
    splashimg = loadImage("assets/splash.gif")
    // bglevel1=loadImage("assets/background.png")
    bglevel1 = loadImage("assets/level2_bg.jpg")

    playerimg = loadImage("assets/playersplane.gif")

    e1 = loadImage("assets/enemy plane1.gif")
    e2 = loadImage("assets/enemyplane2.png")
    e3 = loadImage("assets/enemyplane3.png")



    playermissileimg = loadImage("assets/player missile.gif")
    enemymissileimg = loadImage("assets/enemy missile.gif")

    explosionimg = loadImage("assets/explosion.gif")
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/startbutton.png")
    playbutton.position(0, height / 2)
    playbutton.size(250, 250)

    musicbutton = createImg("assets/soundButton.png")
    musicbutton.position(width - 250, height / 2)
    musicbutton.size(250, 250)


    mutebutton = createImg("assets/mute.png")
    mutebutton.position(width - 250, height / 2)
    mutebutton.size(250, 250)
    mutebutton.hide()

    // replace with information image
    infobutton = createImg("assets/popUpMessage.png")
    infobutton.position(0, 0)
    infobutton.size(width, height)
    infobutton.hide()

    ground = createSprite(width / 2, height / 2)
    ground.addImage(bglevel1)
    ground.visible = false
    ground.scale = 4.25
    // groundimg.resize(width*1.5,height)
    ground.velocityY = 7
    ground.y = ground.height / 2

    playermissileGroup = new Group()
    enemymissileGroup = new Group()
    enemieslevel1Group = new Group()

    // character
    player = createSprite(width / 2, height - 100)
    player.addImage(playerimg)
    player.scale = 0.1
    player.visible = false
    player.debug = true
    //player missile
    // playermissile=createSprite(width)




}

function draw() {
    if (gameState == "wait") {
        background(splashimg)
        infobutton.hide()

    }

    playbutton.mousePressed(() => {
        gameState = "info"
        playbutton.hide()
        infobutton.show()

    })
    if (gameState === "info") {
        infobutton.show()
    }

    infobutton.mousePressed(() => {
        background(bglevel1)

        gameState = "level1"
        playbutton.hide()
        infobutton.hide()
        mutebutton.hide()
        musicbutton.hide()


    })



    musicbutton.mousePressed(() => {
        musicbutton.hide()
        mutebutton.show()
    })

    mutebutton.mousePressed(() => {
        musicbutton.show()
        mutebutton.hide()
    })

    if (gameState == "level1") {
        background(0)
        spawnEnemiesLevel1()
        movement()
        ground.visible = true
        player.visible = true

        enemieslevel1Group.overlap(player, () => {
            alert("enemy destroyed")
        })

        if (ground.y > height) {
            ground.y = 0
        }

        mutebutton.hide()
        musicbutton.hide()

        for (var i = 0; i < playermissileGroup.length; i++) {

            for (var j = 0; j < enemieslevel1Group.length; J++) {
                if (playermissileGroup.get(i).isTouching(enemieslevel1Group.get(j))) {


                    explosion = createSprite(enemieslevel1Group.get(j).x, enemieslevel1Group.get(j).y)
                    explosion.addImage(explosionimg)
                    enemieslevel1Group.get(j).remove()
                }
            }

        }

    }

    drawSprites()

}



// Level 1 - spawn enemies
function spawnEnemiesLevel1() {
    if (frameCount % 80 == 0) {
        var randX = Math.round(random(50, width - 50))
        enemy = createSprite(randX, 0)
        enemy.velocityY = 4
        enemy.scale = 0.5


        rand = Math.round(random(1, 2))
        switch (rand) {
            case 1: enemy.addImage(e2)
                break;

            case 2: enemy.addImage(e3)
                break;

            default: break;

        }

        enemieslevel1Group.add(enemy)

    }
}


// level 1 score
function scorelevel1() {

    alert("destroyed enemy plane")


}



// level 2
function spawnEnemiesLevel2() {
    if (frameCount % 80 == 0) {
        var randX = Math.round(random(50, width - 50))
        enemy = createSprite(randX, 0)
        enemy.velocityY = 4
        enemy.scale = 0.5
        enemy.debug = true

        rand = Math.round(random(1, 3))
        switch (rand) {
            case 1: enemy.addImage(e1)
                enemy.scale = 0.2
                break;

            case 2: enemy.addImage(e2)

                break;

            case 3: enemy.addImage(e3)
                break;

            default: break;

        }
        enemieslevel1Group.add(enemy)

    }
}


function movement() {
    if (keyDown("Right_Arrow")) {
        player.x += 5
    }

    if (keyDown("Left_Arrow")) {
        player.x -= 5
    }

    if (keyDown("space")) {

        playermissile = createSprite(player.x, player.y)
        playermissile.addImage(playermissileimg)
        playermissile.velocityY = -6
        playermissile.scale = 0.65
        playermissileGroup.add(playermissile)

    }
}


function spawnplayermissile() {

}