let sprite: Sprite;
let SPRITE_WIDTH = 16
let SPRITE_HEIGHT = 16
let SCREEN_WIDTH = 160
let SCREEN_HEIGHT = 120
function get_duck_sprite(): Image {
    if (assets.image`duck` !== null) {
        return assets.image`duck`
    } else {
        //  Placeholder sprite in case "duck" is missing
        return assets.image`duck`
    }
    
}

let x = 0
while (x < SCREEN_WIDTH) {
    sprite = sprites.create(get_duck_sprite(), SpriteKind.Player)
    sprite.setPosition(x, 20)
    x += SPRITE_WIDTH
}
let y = 0
while (y < SCREEN_HEIGHT) {
    sprite = sprites.create(get_duck_sprite(), SpriteKind.Player)
    sprite.setPosition(20, y)
    y += SPRITE_HEIGHT
}
let i = 0
while (i < Math.min(SCREEN_WIDTH, SCREEN_HEIGHT)) {
    sprite = sprites.create(get_duck_sprite(), SpriteKind.Player)
    sprite.setPosition(i, i)
    i += SPRITE_WIDTH
}
x = 0
while (x < SCREEN_WIDTH) {
    y = 0
    while (y < SCREEN_HEIGHT) {
        sprite = sprites.create(get_duck_sprite(), SpriteKind.Player)
        sprite.setPosition(x, y)
        y += SPRITE_HEIGHT * 2
    }
    x += SPRITE_WIDTH * 2
}
x = 0
while (x < SCREEN_WIDTH) {
    y = 0
    while (y < SCREEN_HEIGHT) {
        if ((x + y) % (SPRITE_WIDTH * 4) == 0) {
            sprite = sprites.create(get_duck_sprite(), SpriteKind.Player)
            sprite.setPosition(x, y)
        }
        
        y += SPRITE_HEIGHT * 2
    }
    x += SPRITE_WIDTH * 2
}
