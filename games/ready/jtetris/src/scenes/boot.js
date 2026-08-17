export default class Boot extends Phaser.Scene {
    constructor() {
        super('boot');
    }

    preload() {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        window.centerX = centerX;
        window.centerY = centerY;

        this.load.atlas('atlas-menu', 'assets/imgs/tetris1080menu.png', 'assets/imgs/tetrismenu.json');

        this.load.on('complete', () => { this.scene.start('load');});
    }
}