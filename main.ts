scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
function setLevels () {
    if (LV == 1) {
        tiles.setTilemap(tilemap`層級1`)
        tiles.placeOnRandomTile(Rico, sprites.dungeon.stairEast)
    } else if (LV == 2) {
        tiles.setTilemap(tilemap`層級2`)
        tiles.placeOnRandomTile(Rico, sprites.dungeon.stairLarge)
    } else {
        tiles.setTilemap(tilemap`層級3`)
        tiles.placeOnRandomTile(Rico, sprites.dungeon.floorLight3)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    LV += 1
    setLevels()
})
let LV = 0
let Rico: Sprite = null
Rico = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `, SpriteKind.Player)
LV = 1
setLevels()
controller.moveSprite(Rico)
