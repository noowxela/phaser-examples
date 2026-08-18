import Boot from "./scenes/boot.js";
import InGame from "./scenes/ingame.js";
import Load from "./scenes/load.js";
import Menu from "./scenes/menu.js";

function runGame() {
    var config = {
        type: Phaser.AUTO,
        width: 648,
        height: 1080,
        parent: 'game',
        backgroundColor: 0,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH
        },
        roundPixels: true,
        scene: [Boot, Load, Menu, InGame]
    };

    new Phaser.Game(config);
}

window.onload = function () {
    runGame();
};