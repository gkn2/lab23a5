SPRITE_WIDTH = 16
SPRITE_HEIGHT = 16
SCREEN_WIDTH = 160
SCREEN_HEIGHT = 120


x = 0
while x < SCREEN_WIDTH:
    sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
    sprite.set_position(x, 20)
    x += SPRITE_WIDTH


y = 0
while y < SCREEN_HEIGHT:
    sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
    sprite.set_position(20, y)
    y += SPRITE_HEIGHT


i = 0
while i < min(SCREEN_WIDTH, SCREEN_HEIGHT):
    sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
    sprite.set_position(i, i)
    i += SPRITE_WIDTH


x = 0
while x < SCREEN_WIDTH:
    y = 0
    while y < SCREEN_HEIGHT:
        sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
        sprite.set_position(x, y)
        y += SPRITE_HEIGHT * 2
    x += SPRITE_WIDTH * 2


x = 0
while x < SCREEN_WIDTH:
    y = 0
    while y < SCREEN_HEIGHT:
        if (x + y) % (SPRITE_WIDTH * 4) == 0:
            sprite = sprites.create(assets.image("""duck"""), SpriteKind.player)
            sprite.set_position(x, y)
        y += SPRITE_HEIGHT * 2
    x += SPRITE_WIDTH * 2
