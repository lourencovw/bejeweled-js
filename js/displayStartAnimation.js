export const displayStartAnimation = (app) => {
    // holder to store the diamonds
    const diamonds = [];

    const totalDiamonds = 20;
    const diamondSprites = [
        PIXI.Sprite.from('./assets/diamonds/blue.png'),
        PIXI.Sprite.from('./assets/diamonds/green.png'),
        PIXI.Sprite.from('./assets/diamonds/pink.png'),
        PIXI.Sprite.from('./assets/diamonds/red.png'),
        PIXI.Sprite.from('./assets/diamonds/yellow.png'),
    ];

    for (let i = 0; i < totalDiamonds; i++) {
        // create a new Sprite that uses the image name that we just generated as its source
        const diamond = diamondSprites[Math.floor(Math.random() * 5)];

        // set the anchor point so the texture is centered on the sprite
        diamond.anchor.set(0.5);

        // set a random scale for the diamond - no point them all being the same size!
        diamond.scale.set(0.8 + Math.random() * 0.3);

        // finally lets set the diamond to be at a random position..
        diamond.x = Math.random() * app.screen.width;
        diamond.y = Math.random() * app.screen.height;

        diamond.tint = Math.random() * 0xFFFFFF;

        // create some extra properties that will control movement :
        // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
        diamond.direction = Math.random() * Math.PI * 2;

        // this number will be used to modify the direction of the diamond over time
        diamond.turningSpeed = Math.random() - 0.8;

        // create a random speed for the diamond between 2 - 4
        diamond.speed = 2 + Math.random() * 2;

        // finally we push the diamond into the diamonds array so it it can be easily accessed later
        diamonds.push(diamond);

        app.stage.addChild(diamond);
    }

    // create a bounding box for the little diamonds
    const diamondBoundsPadding = 100;
    const diamondBounds = new PIXI.Rectangle(-diamondBoundsPadding,
        -diamondBoundsPadding,
        app.screen.width + diamondBoundsPadding * 2,
        app.screen.height + diamondBoundsPadding * 2);

    app.ticker.add(() => {
        // iterate through the diamonds and update their position
        for (let i = 0; i < diamonds.length; i++) {
            const diamond = diamonds[i];
            diamond.direction += diamond.turningSpeed * 0.01;
            diamond.x += Math.sin(diamond.direction) * diamond.speed;
            diamond.y += Math.cos(diamond.direction) * diamond.speed;
            diamond.rotation = -diamond.direction - Math.PI / 2;

            // wrap the diamonds by testing their bounds...
            if (diamond.x < diamondBounds.x) {
                diamond.x += diamondBounds.width;
            } else if (diamond.x > diamondBounds.x + diamondBounds.width) {
                diamond.x -= diamondBounds.width;
            }

            if (diamond.y < diamondBounds.y) {
                diamond.y += diamondBounds.height;
            } else if (diamond.y > diamondBounds.y + diamondBounds.height) {
                diamond.y -= diamondBounds.height;
            }
        }
    });
}