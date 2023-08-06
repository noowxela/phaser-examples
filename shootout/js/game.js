var Shootout = {
  //  Our game modes
  INTRO: 0,
  PACING: 1,
  SHOOTING: 2,
  OUTCOME: 3
};
Shootout.Boot = function(game) {};
Shootout.Boot.prototype = {
  preload: function() {
    //  We need this because the assets are on Amazon S3
    //  Remove the next 2 lines if running locally
    this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue006/';
    this.load.crossOrigin = 'anonymous';
    this.load.image('logo', 'assets/photonstorm.png');
    this.load.image('preload', 'assets/preload.png');
  },
  create: function() {
    this.input.maxPointers = 1;
    this.state.start('Preloader');
  }
};
Shootout.Preloader = function(game) {
  this.logo = null;
  this.preloadBar = null;
  this.ready = false;
};
Shootout.Preloader.prototype = {
  init: function() {
    this.add.sprite(265, 400, 'logo');
  },
  preload: function() {
    this.preloadBar = this.add.sprite(120, 260, 'preload');
    this.load.setPreloadSprite(this.preloadBar);
    //  We need this because the assets are on Amazon S3
    //  Remove the next 2 lines if running locally
    // this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue006/';
    // this.load.crossOrigin = 'anonymous';
    this.load.image('standoff', 'assets/standoff.png');
    this.load.image('win', 'assets/win.png');
    this.load.image('lose', 'assets/lose.png');
    this.load.image('draw', 'assets/draw.png');
    this.load.bitmapFont('font', 'assets/font.png', 'assets/font.xml');
    this.load.audio('casing', 'assets/casing.mp3');
    this.load.audio('fire', 'assets/fire.mp3');
    this.load.audio('reload', 'assets/reload.mp3');
    this.load.audio('splat', 'assets/splat.mp3');
    this.load.audio('walk', 'assets/walk.mp3');
    //  Note: Graphics are Copyright 2015 Photon Storm Ltd.
  },
  create: function() {},
  update: function() {
    //  Make sure all our mp3s have decoded before starting the game
    if (!this.ready) {
      if (this.cache.isSoundDecoded('casing') &&
        this.cache.isSoundDecoded('fire') &&
        this.cache.isSoundDecoded('reload') &&
        this.cache.isSoundDecoded('splat') &&
        this.cache.isSoundDecoded('walk')) {
        this.ready = true;
        this.state.start('Game');
      }
    }
  }
};
Shootout.Game = function(game) {
  this.cowboy = null;
  this.draw = null;
  this.cowboyTimer = null;
  this.cowboyDead = false;
  this.paceTimer = null;
  this.paceText = null;
  this.pace = 1;
  this.shotAt = 0;
  this.mode = Shootout.INTRO;
  //  You have between 100ms and 500ms to shoot first
  this.reactionTimeMin = 100;
  this.reactionTimeMax = 500;
};
Shootout.Game.prototype = {
  create: function() {
    this.cowboy = this.add.sprite(0, 0, 'standoff');
    this.draw = this.add.sprite(434, 395, 'draw');
    this.draw.visible = false;
    this.helpText = this.add.bitmapText(630, 404, 'font', "After 10 paces\nclick to shoot.\nBut only when he says Draw", 16);
    this.helpText.align = 'right';
    this.mode = Shootout.INTRO;
    this.input.onDown.add(this.onDown, this);
  },
  onDown: function(pointer) {
    //  It's possible they click to shoot the moment
    //  after they were killed, so we don't advance
    if (this.time.time - this.shotAt < 250) {
      return;
    }
    switch (this.mode) {
      case Shootout.INTRO:
        this.start();
        break;
      case Shootout.PACING:
        this.cheat();
        break;
      case Shootout.SHOOTING:
        this.shoot();
        break;
      case Shootout.OUTCOME:
        this.restart();
        break;
    }
  },
  start: function() {
    this.mode = Shootout.PACING;
    this.helpText.visible = false;
    this.paceText = this.add.bitmapText(480, 390, 'font', '1', 64);
    //  10 paces timer, then shoot
    this.paceTimer = this.time.create(false);
    this.paceTimer.repeat(500, 10, this.stepAway, this);
    this.paceTimer.start();
    this.sound.play('walk');
  },
  restart: function() {
    this.mode = Shootout.INTRO;
    this.cowboy.loadTexture('standoff');
    this.cowboyTimer = null;
    this.cowboyDead = false;
    this.paceTimer = null;
    this.paceText = null;
    this.pace = 1;
    this.shotAt = 0;
    this.helpText.text = "After 10 paces\nclick to shoot.\nBut only when he says Draw";
    this.sound.play('reload');
  },
  stepAway: function() {
    this.pace++;
    if (this.pace > 10) {
      this.paceText.visible = false;
      //  Pick a random time to display DRAW after
      var delay = this.rnd.between(500, 3000);
      this.time.events.add(delay, this.startDraw, this);
    } else {
      this.paceText.text = this.pace;
    }
  },
  startDraw: function() {
    this.mode = Shootout.SHOOTING;
    this.draw.visible = true;
    var reactionTime = this.rnd.between(this.reactionTimeMin, this.reactionTimeMax);
    this.cowboyTimer = this.time.create(false);
    this.cowboyTimer.add(reactionTime, this.heShoots, this);
    this.cowboyTimer.start();
  },
  heShoots: function() {
    if (!this.cowboyDead) {
      this.sound.play('fire');
      this.youLose();
    }
  },
  cheat: function() {
    //  Cowardly win
    this.youWin(true);
  },
  shoot: function() {
    if (this.cowboyTimer.running) {
      this.youWin(false);
    }
  },
  playSplat: function() {
    this.sound.play('splat');
  },
  youWin: function(cowardly) {
    this.mode = Shootout.OUTCOME;
    this.draw.visible = false;
    this.paceText.visible = false;
    this.sound.play('fire');
    this.sound.play('casing');
    this.time.events.add(500, this.playSplat, this);
    if (cowardly) {
      this.helpText.text = "You shoot first.\nYou killed him!\nBut what a cowardly victory.";
    } else {
      //  How much time did the cowboy have left?
      if (this.cowboyTimer.duration < 100) {
        this.helpText.text = "He draws ...\nBut you shoot first (just!)\nYou killed him!";
      } else {
        this.helpText.text = "He draws ...\nBut you shoot first.\nYou killed him!";
      }
    }
    this.helpText.visible = true;
    this.cowboy.loadTexture('win');
    this.paceTimer.stop();
    this.shotAt = this.time.time;
    if (this.cowboyTimer) {
      this.cowboyTimer.stop();
    }
  },
  youLose: function() {
    this.mode = Shootout.OUTCOME;
    this.draw.visible = false;
    this.sound.play('casing');
    this.time.events.add(500, this.playSplat, this);
    this.helpText.text = "He draws ...\nand shoots.\nYou are dead!";
    this.helpText.visible = true;
    this.cowboy.loadTexture('lose');
    this.shotAt = this.time.time;
    this.cowboyTimer.stop();
  },
  preRender: function() {
    if (this.helpText) {
      this.helpText.pivot.x = this.helpText.textWidth;
    }
  }
};
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  start();
} else {
  document.addEventListener('DOMContentLoaded', start, false);
}

function start() {
  document.removeEventListener('DOMContentLoaded', start, false);
  var game = new Phaser.Game(640, 480, Phaser.AUTO, 'game');
  game.state.add('Boot', Shootout.Boot);
  game.state.add('Preloader', Shootout.Preloader);
  game.state.add('Game', Shootout.Game);
  game.state.start('Boot');
}