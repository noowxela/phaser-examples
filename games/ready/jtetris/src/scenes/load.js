export default class Load extends Phaser.Scene {
    constructor() {
        super('load');
    }

    preload() {

        let logo = this.add.image(centerX, centerY, 'atlas-menu', 'logowhite');
        this.text_loading = this.add.text(logo.x, logo.y + 150, 'Loading...', 30)
            .setOrigin(0.5);

        this.load.on('complete', function () {
            this.scene.start('menu');
        }, this);

        // Images
        this.load.atlas('atlas', 'assets/imgs/tetris1080.png', 'assets/imgs/jtetris.json');
        this.load.image('mask', 'assets/imgs/mask.png');
        this.load.image('highscore', 'assets/imgs/highscore.png');

        // Music
        this.load.audio('ingame', 'assets/audio/music/ingame.mp3');
        this.load.audio('gameover', 'assets/audio/music/gameover.mp3');

        // Sound FX
        this.load.audio('button', 'assets/audio/fx/button.wav');
        this.load.audio('explosion', 'assets/audio/fx/explosion.mp3');
        this.load.audio('move', 'assets/audio/fx/move.wav');
        this.load.audio('spin', 'assets/audio/fx/spin.wav');
        this.load.audio('knock', 'assets/audio/fx/knock.mp3');
        this.load.audio('line', 'assets/audio/fx/explode1cc0.mp3');
        this.load.audio('go', 'assets/audio/fx/go.wav');
        this.load.audio('score4', 'assets/audio/fx/score4.wav');
        this.load.audio('levelup', 'assets/audio/fx/levelup.mp3');


        this.load.on('progress', this.updateText, this);

    }

    updateText(progress) {
        this.text_loading.setText(`Loading ... ${Math.round(progress * 100)}%`);
    }
}