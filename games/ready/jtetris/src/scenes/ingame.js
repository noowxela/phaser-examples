import Table from '../prefabs/table.js';
import Controls from '../prefabs/controls.js';
import Piece from '../prefabs/piece.js';
import * as h from '../prefabs/helpers.js';

import {
    GRAVITY_LEVELS,
    MILLISECONDS_PER_FRAME,
    SOFTDROP_DELAY,
    PIECE_TYPES,
    COOKIE_LAST,
    COOKIE_TOP
} from '../prefabs/constants.js';



export default class InGame extends Phaser.Scene {
    constructor() {
        super('inGame');
    }

    init() {
        this.pieceQueue = { current: 0, next: 0 };
        this.initPieceQueue();
        this.stepDelay = GRAVITY_LEVELS[0] * MILLISECONDS_PER_FRAME; // 48 frames per cell in level 0
        this.score = 0;
        this.isGameOver = false;
    }

    create() {

        // Emitter
        this.customEmitter = new Phaser.Events.EventEmitter();
        const customEmitter = this.customEmitter;

        // Background
        this.add.image(100, 20, 'atlas', 'background').setOrigin(0);

        // UI
        this.createUi();

        // Transparent layer for effects
        this.ui_mask = this.add.image(214, 12, 'atlas', 'white')
            .setOrigin(0)
            .setDisplaySize(220, 172)
            .setAlpha(0);

        // Board
        this.add.image(0, 0, 'atlas', 'table').setOrigin(0);

        this.table = new Table(this);

        // Piece (tetromino)
        this.piece = new Piece(this, this.pieceQueue.current, this.table.colorsArray);
        this.piece.print();
        this.table.update();

        this.controls = new Controls(this);

        //// Sounds
        this.snd_explosion = this.sound.add('explosion');
        this.snd_line = this.sound.add('line');
        this.snd_spin = this.sound.add('spin').setVolume(0.8);
        this.snd_down = this.sound.add('knock').setVolume(0.4);
        this.snd_levelup = this.sound.add('levelup');
        this.snd_score4 = this.sound.add('score4');
        this.snd_move = this.sound.add('move').setVolume(0.4);

        // Music
        this.music_gameover = this.sound.add('gameover');
        this.music_ingame = this.sound.add('ingame', { volume: 0.4, loop: true });
        this.music_ingame.play();

        // Tweens
        this.tween_ui = this.tweens.add({
            targets: this.ui_mask,
            alpha: 0.6,
            yoyo: true,
            duration: 600
        });

        //// Events
        const customEvents = {
            'PIECE_TOUCH_DOWN': 'pieceTouchDown',
            'GAME_OVER': 'gameover',
            'X4_LINES': 'x4Lines',
            'LEVEL_UP': 'levelup',
            'NEXT_PIECE': 'nextPiece',
            'EXPLODE_ALL': 'explodeall'
        }


        customEmitter.on(customEvents.PIECE_TOUCH_DOWN, this.onPieceDown, this);
        customEmitter.on(customEvents.LEVEL_UP, this.onLevelUp, this);
        customEmitter.on(customEvents.GAME_OVER, this.onGameOver, this);
        customEmitter.on(customEvents.EXPLODE_ALL, this.onExplodeAll, this);
        customEmitter.on(customEvents.X4_LINES, this.onX4Lines, this);

        this.timeCounter = 0;

    }



    createUi() {
        // UI SCORE
        this.add.text(324, 45, 'score', { fontSize: 24, align: 'center' }).setOrigin(0.5);
        this.ui_score = this.add.text(324, 70, '000000', { fontSize: 24, align: 'center' }).setOrigin(0.5);

        // UI NEXT
        this.add.text(370, 110, 'next', { fontSize: 24, align: 'center' }).setOrigin(0.5);
        this.ui_next = this.add.image(370, 148, 'atlas', PIECE_TYPES.get(this.pieceQueue.next)).setOrigin(0.5);

        // UI LEVEL
        this.add.text(276, 110, 'level', { fontSize: 24, align: 'center' }).setOrigin(0.5);
        this.ui_level = this.add.text(276, 135, '0', { fontSize: 24, align: 'center' }).setOrigin(0.5);

        // UI TOP SCORE
        let topScore = h.getCookie(COOKIE_TOP).padStart(6, '0');
        this.add.text(324, 1012, `TOP-${topScore}`, { fontSize: 24 }).setOrigin(0.5);

        // UI GAME OVER
        this.ui_gameover_1 = this.add.text(330, 446, 'GAME OVER', { fontSize: 52, align: 'center', fontStyle: 'bold' })
            .setOrigin(0.5)
            .setVisible(false);
        this.ui_gameover_2 = this.add.text(330, 510, '-SCORE-', { fontSize: 48, align: 'center' })
            .setOrigin(0.5)
            .setVisible(false);
        this.ui_gameover_score = this.add.text(330, 580, '', { fontSize: 48, align: 'center', fontStyle: 'bold' })
            .setOrigin(0.5)
            .setVisible(false);
        this.ui_gameover_click = this.add.text(330, 900, 'click to continue', { fontSize: 24, align: 'center' })
            .setOrigin(0.5)
            .setVisible(false);
        this.ui_higscore = this.add.image(330, 740, 'highscore')
            .setScale(0.9)
            .setAngle(-20)
            .setAlpha(0.5)
            .setVisible(false);
        this.gameOverMask = this.add.image(130, 194, 'mask')
            .setOrigin(0)
            .setAlpha(0)
            .setBlendMode(Phaser.BlendModes.MULTIPLY);
    }



    initPieceQueue() {
        this.pieceQueue.current = Phaser.Math.Between(1, 7);
        this.pieceQueue.next = Phaser.Math.Between(1, 7);
    }



    updatePieceQueue() {
        this.pieceQueue.current = this.pieceQueue.next;
        this.pieceQueue.next = Phaser.Math.Between(1, 7);
    }



    updateScore(score) {
        this.score += score;
        let str_score = this.score.toString().padStart(6, '0');
        this.ui_score.setText(str_score);
    }



    update(_time, dt) {
        if (this.isGameOver) {
            return;
        }
        let delay = this.controls.softDrop ? SOFTDROP_DELAY : this.stepDelay;
        this.timeCounter += dt;
        if (this.timeCounter > delay) {
            this.timeCounter = 0;
            this.onTableStep();
        }
        this.controls.update(dt);
    }



    //// Event handlers

    onGameOver() {
        this.isGameOver = true;

        this.input.keyboard.removeAllKeys();

        this.music_ingame.stop();

        this.music_gameover.play();
        this.music_gameover.on('complete', () => {
            this.table.explodeAll(); // emits event explodeall when finished
        });
    }



    onExplodeAll() {

        // Print game over
        this.ui_gameover_1.setVisible(true);
        this.ui_gameover_2.setVisible(true);
        this.ui_gameover_score.setText(this.ui_score.text);
        this.ui_gameover_score.setVisible(true);

        this.gameOverMask.setAlpha(0.6);

        this.snd_levelup.play();

        let t = this;
        this.tweens.add({
            targets: [t.ui_gameover_1, t.ui_gameover_2, t.ui_gameover_score],
            scale: 1.2,
            yoyo: true,
            duration: 100,
            delay: 0
        });

        // Check scores
        let topScore = h.getCookie(COOKIE_TOP);
        topScore = topScore ? parseInt(topScore) : 0;
        if (this.score > topScore) {
            h.setCookie(COOKIE_TOP, this.score, 365);
            setTimeout(() => {
                this.ui_higscore.setVisible(true);
                this.snd_line.play();
                this.cameras.main.shake(60, 0.03);
                setTimeout(() => {
                    this.snd_score4.play();
                    this.ui_gameover_click.setVisible(true);
                    this.input.on('pointerdown', () => {
                        this.scene.start('menu');
                    });
                }, 500);
            }, 1500);
            this.customEmitter.emit('newrecord', this.score);
        } else {
            this.ui_gameover_click.setVisible(true);
            this.input.on('pointerdown', () => {
                this.scene.start('menu');
            });
        }
        h.setCookie(COOKIE_LAST, this.score, 365);

    }



    onTableStep() {
        // Delete piece from table
        this.piece.clear();

        // Update piece position
        this.piece.y--;
        if (this.piece.checkCollision()) {
            this.piece.y++;
            this.customEmitter.emit('pieceTouchDown', this);
        }
        // Draw piece on table
        this.piece.print();
        // Score softDrop
        if (this.controls.softDrop) {
            this.score++;
        }

        this.table.update();
    }



    onLevelUp(level) {
        this.ui_level.setText(level);
        this.snd_levelup.play();
        this.tween_ui.play();
        let gravity = GRAVITY_LEVELS[this.table.level];
        this.stepDelay = gravity ? gravity * MILLISECONDS_PER_FRAME : 1;
    }



    onPieceDown() {
        this.controls.initDown();
        this.snd_down.play();
        // Draws the piece
        this.piece.print();
        // Score of softDrop
        this.updateScore(0);
        // Check complete lines
        let score = this.table.checkLines();
        if (score) {
            this.updateScore(score);
            this.table.deleteCompletes();
        }
        // Check game over
        if (this.piece.ySpawn == this.piece.y) {
            this.customEmitter.emit('gameover');
        }
        // Update pieceQueue
        this.updatePieceQueue();
        this.ui_next.setFrame(PIECE_TYPES.get(this.pieceQueue.next));
        // Inits the piece
        this.piece.init(this.pieceQueue.current);
    }



    onX4Lines() {
        this.cameras.main.shake(200, 0.02);
        this.snd_explosion.play();
        this.snd_score4.play();
    }

}