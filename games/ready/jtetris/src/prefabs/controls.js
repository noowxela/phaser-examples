import { AUTOREPEAT_INTERVAL, DAS_DELAY } from './constants.js'

export default class Controls {
    constructor(scene) {
        this.scene = scene;
        this.piece = scene.piece;
        this.table = scene.table;

        // Used to apply DAS behavior to rigth and left controls
        this.counter = 0;

        // Avoids immediate down action after piece spawn
        this.downIsActive = false;
        this.softDrop = false;

        this.init();
    }

    init() {
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.keyZ = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        this.keyX = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X);

        this.keyX.on('down', () => {
            this.spin(true);
        });

        this.keyZ.on('down', () => {
            this.spin(false);
        });

        // cursor left

        this.cursors.left.on('up', () => {
            this.counter = 0;
        });

        this.cursors.left.on('down', () => {
            this.moveLeft();
            this.counter = DAS_DELAY;
        });

        // cursor right

        this.cursors.right.on('up', () => {
            this.counter = 0;
        });

        this.cursors.right.on('down', () => {
            this.moveRight();
            this.counter = DAS_DELAY;
        });

        this.initDown();
    }

    update(delta) {
        if (this.downIsActive) {
            this.softDrop = this.cursors.down.isDown;
        }

        this.counter -= delta;
        if (this.counter < 0) this.counter = 0;

        if (this.counter == 0) {
            if (this.cursors.right.isDown) {
                this.moveRight();
            } else if (this.cursors.left.isDown) {
                this.moveLeft();
            }
            this.counter += AUTOREPEAT_INTERVAL;
        }

    } // End update()

    moveLeft() {

        this.piece.clear();
        this.piece.x--;
        if (this.piece.checkCollision()) {
            this.piece.x++;
        } else {
            this.scene.snd_move.play();
        }
        this.piece.print();
        this.table.update();
    }

    moveRight() {

        this.piece.clear();
        this.piece.x++;
        if (this.piece.checkCollision()) {
            this.piece.x--;
        } else {
            this.scene.snd_move.play();
        }
        this.piece.print();
        this.table.update();
    }

    spin(isClockwise) {
        let spin1 = isClockwise ? this.piece.spinRight.bind(this.piece) : this.piece.spinLeft.bind(this.piece);
        let spin2 = isClockwise ? this.piece.spinLeft.bind(this.piece) : this.piece.spinRight.bind(this.piece);
        this.piece.clear();
        spin1();
        let collision = this.piece.checkCollision();
        if (collision) {
            spin2();
        }
        this.scene.snd_spin.play();
        this.piece.print();
        this.table.update();
    }

    initDown() {
        this.softDrop = false;
        this.downIsActive = false;
        setTimeout(() => {
            this.downIsActive = true;
        },
            DAS_DELAY);
    }
}