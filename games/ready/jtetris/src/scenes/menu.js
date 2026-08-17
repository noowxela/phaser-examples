import { getCookie } from "../prefabs/helpers.js";
import { COOKIE_TOP } from "../prefabs/constants.js";
export default class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    create() {
        // Background
        this.add.image(100, 20, 'atlas', 'background').setOrigin(0);

        // Top score
        let topScore = getCookie(COOKIE_TOP).padStart(6, '0');
        this.add.text(324, 1012, `TOP-${topScore}`, { fontSize: 24 }).setOrigin(0.5);

        // Board
        this.add.image(0, 0, 'atlas', 'table')
            .setOrigin(0);

        // Sounds
        this.snd_play = this.sound.add('go');
        this.snd_button = this.sound.add('button');

        // Menu contents
        this.createContents();

        this.menuCamera = this.cameras.add(121, 195, 406, 770, false)
            .setOrigin(0)
            .setBounds(2000, 2000, 3 * 406, 770)
            .setScroll(2000, 2000);
    }

    createContents() {
        const originX = 2000;
        const originY = 2000;
        const snapPadding = 406;

        this.createMenu(originX, originY);
        this.createCredits(originX + 1 * snapPadding, originY);
        this.createControls(originX + 2 * snapPadding, originY);
    }

    createMenu(originX, originY) {
        const centerX = originX + 406 / 2;
        const originYbt = originY + 300;

        this.add.image(centerX, originY + 140, 'atlas-menu', 'logowhite');

        // Button play
        this.bt_play = this.add.image(centerX, originYbt, 'atlas-menu', 'btplay')
            .setInteractive();
        this.bt_play.on('pointerdown', () => {
            this.snd_play.play();
            this.scene.start('inGame');
        });

        // Button controls
        this.bt_controls = this.add.image(centerX, originYbt + 1 * 130, 'atlas-menu', 'btcontrols')
            .setInteractive();
        this.bt_controls.on('pointerdown', () => {
            this.snd_button.play();
            this.menuCamera.pan(2000 + 406 * 2 + 406 / 2, 2000, 300 * 2, 'Bounce');
        });

        //Button credits
        this.bt_credits = this.add.image(centerX, originYbt + 2 * 130, 'atlas-menu', 'btcredits')
            .setInteractive();
        this.bt_credits.on('pointerdown', () => {
            this.snd_button.play();
            this.menuCamera.pan(2000 + 406 * 1 + 406 / 2, 2000, 300, 'Bounce');
        });

    }

    createCredits(originX, originY) {
        const centerX = originX + 406 / 2;

        this.add.image(centerX, originY + 100, 'atlas-menu', 'credits').setOrigin(0.5, 0);

        this.bt_back_credits = this.add.image(centerX, originY + 770 - 100, 'atlas-menu', 'btback')
            .setInteractive();

        this.bt_back_credits.on('pointerdown', () => {
            this.snd_button.play();
            this.menuCamera.pan(2000, 2000, 300, 'Bounce');
        });

    }

    createControls(originX, originY) {
        const centerX = originX + 406 / 2;

        this.add.image(centerX, originY + 100, 'atlas-menu', 'controls').setOrigin(0.5, 0);

        this.bt_back_controls = this.add.image(centerX, originY + 770 - 100, 'atlas-menu', 'btback')
            .setInteractive();

        this.bt_back_controls.on('pointerdown', () => {
            this.snd_button.play();
            this.menuCamera.pan(2000, 2000, 300, 'Bounce');
        });
    }
}