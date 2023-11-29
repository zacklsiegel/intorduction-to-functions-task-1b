controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Hello How are you?", 500, false)
    pause(500)
    mySprite2.sayText("Hello I am great! Thanks for asking.")
    music.play(music.createSong(hex`0078000408020100001c00010a006400f4016400000400000000000000000000000000050000041f0000000400012408000c00011e0c0010000129140018000220251c0020000127`), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 f f f 5 5 5 5 f f f 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 f f f f f f f f f f 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . . . 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 . 9 9 9 9 9 . . . 
    . . . 9 9 9 . . . 9 9 9 . . . . 
    . . . . 9 . . . . . 9 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite2.setPosition(50, 50)
