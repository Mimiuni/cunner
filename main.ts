controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`tear`, P1, 200, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 500)
    info.changeScoreBy(1)
})
let enemigo: Sprite = null
let projectile: Sprite = null
let P1: Sprite = null
P1 = sprites.create(assets.image`shooter`, SpriteKind.Player)
controller.moveSprite(P1)
P1.setStayInScreen(true)
info.setLife(1)
game.onUpdateInterval(1000, function () {
    enemigo = sprites.create(img`
        . . . . f f f f f . f f f . 
        . . . f f c c c c f f f f f 
        . . f c c c c c c b f f f f 
        . . f c c c c c c 3 c f f f 
        . f c c c c c c c c 3 3 f . 
        . f c c 4 c c c c c f f f . 
        . f f e 4 4 c c c f f f f . 
        . f f e 4 4 f b f 4 4 f f . 
        . . f f d d f 1 4 d 4 f . . 
        . . . f d d d d 4 f f f . . 
        . . . f e 4 4 4 e e f . . . 
        . . . f 3 3 3 e d d 4 . . . 
        . . . f 3 3 3 e d d e . . . 
        . . . f 6 6 6 f e e f . . . 
        . . . . f f f f f f . . . . 
        . . . . . . f f f . . . . . 
        `, SpriteKind.Enemy)
    enemigo.setVelocity(-50, 0)
    enemigo.setPosition(160, randint(5, 115))
    enemigo.setFlag(SpriteFlag.AutoDestroy, true)
})
