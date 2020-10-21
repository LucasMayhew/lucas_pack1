const allImages = [Lucas_pack1Sprites.mySprite2,Lucas_pack1Sprites.mySprite,Lucas_pack1Sprites.mySprite3,Lucas_pack1Sprites.mySprite4,Lucas_pack1Sprites.mySprite5,Lucas_pack1Sprites.mySprite6,Lucas_pack1Sprites.mySprite7,Lucas_pack1Sprites.mySprite8,Lucas_pack1Sprites.mySprite9,Lucas_pack1Sprites.mySprite10,Lucas_pack1Sprites.mySprite11,Lucas_pack1Sprites.mySprite12,Lucas_pack1Sprites.mySprite13,Lucas_pack1Sprites.mySprite14,Lucas_pack1Sprites.mySprite15,Lucas_pack1Sprites.mySprite16,Lucas_pack1Sprites.mySprite17,Lucas_pack1Sprites.mySprite18,Lucas_pack1Sprites.mySprite19,Lucas_pack1Sprites.mySprite20,Lucas_pack1Sprites.mySprite21,Lucas_pack1Sprites.mySprite22,Lucas_pack1Sprites.mySprite23,Lucas_pack1Sprites.mySprite24,Lucas_pack1Sprites.mySprite25,Lucas_pack1Sprites.mySprite26,Lucas_pack1Sprites.mySprite27,Lucas_pack1Sprites.mySprite28,Lucas_pack1Sprites.mySprite29,Lucas_pack1Sprites.mySprite30,Lucas_pack1Sprites.mySprite31,Lucas_pack1Sprites.mySprite32,Lucas_pack1Sprites.mySprite33,Lucas_pack1Sprites.mySprite34,Lucas_pack1Sprites.mySprite35,Lucas_pack1Sprites.mySprite36,Lucas_pack1Sprites.mySprite37,Lucas_pack1Sprites.mySprite38,Lucas_pack1Sprites.mySprite39,Lucas_pack1Sprites.mySprite40,Lucas_pack1Sprites.mySprite41,Lucas_pack1Sprites.mySprite42,Lucas_pack1Sprites.mySprite43,Lucas_pack1Sprites.mySprite44,Lucas_pack1Sprites.mySprite45,Lucas_pack1Sprites.mySprite46,Lucas_pack1Sprites.mySprite47,Lucas_pack1Sprites.mySprite48,Lucas_pack1Sprites.mySprite49,Lucas_pack1Sprites.mySprite50,Lucas_pack1Sprites.mySprite51,Lucas_pack1Sprites.mySprite52,Lucas_pack1Sprites.mySprite53,Lucas_pack1Sprites.mySprite54,Lucas_pack1Sprites.mySprite55,Lucas_pack1Sprites.mySprite56,Lucas_pack1Sprites.mySprite57,Lucas_pack1Sprites.mySprite58,Lucas_pack1Sprites.mySprite59]

const padding = 10;
const speed = 50;
game.onUpdate(function() {
    for (const sprite of sprites.allOfKind(SpriteKind.Player)) {
        if (sprite.vx > 0 && sprite.x >= screen.width - padding) {
            sprite.x = screen.width - padding;
            sprite.vx = 0;
            sprite.vy = speed;
        }
        else if (sprite.vy > 0 && sprite.y >= screen.height - padding) {
            sprite.y = screen.height - padding;
            sprite.vx = -speed;
            sprite.vy = 0;
        }
        else if (sprite.vx < 0 && sprite.x <= padding) {
            sprite.x = padding;
            sprite.vx = 0;
            sprite.vy = -speed;
        }
        else if (sprite.vy < 0 && sprite.bottom <= 0) {
            sprite.destroy();
        }
    }
})

let index = 0;
game.onUpdateInterval(700, function() {
    const asset = sprites.create(allImages[index], SpriteKind.Player);
    asset.x = padding;
    asset.y = padding;
    asset.vx = speed;
    asset.setFlag(SpriteFlag.Ghost, true)
    index = (index + 1) % allImages.length;
})

let line1 = sprites.create(img`0`, SpriteKind.Food)
line1.say("PRESS A TO  ")

let line2 = sprites.create(img`0`, SpriteKind.Food)
line2.say("CHANGE COLOR")
line2.top += 10

let bgColor = 0;
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function() {
    scene.setBackgroundColor(bgColor);
    bgColor = (bgColor + 1) % 15
})