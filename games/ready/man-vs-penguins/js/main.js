Game = {};
var w = 500;
var h = 340;

function rand(num) {
  return Math.floor(Math.random() * num)
};
Game.Boot = function(game) {};
Game.Boot.prototype = {
  preload: function() {
    game.load.image('loading', 'images/loading.png');
  },
  create: function() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.scale.minWidth = 600;
    this.game.stage.scale.minHeight = 420;
    this.game.scale.setScreenSize(true);

    this.game.state.start('Load');
  }
};
Game.Load = function(game) {};
Game.Load.prototype = {
  preload: function() {
    game.stage.backgroundColor = '#1bb7ff';
    label2 = game.add.text(Math.floor(w / 2) + 0.5, Math.floor(h / 2) - 15 + 0.5, 'loading...', {
      font: '30px Arial',
      fill: '#fff'
    });
    label2.anchor.setTo(0.5, 0.5);
    preloading = game.add.sprite(w / 2, h / 2 + 15, 'loading');
    preloading.x -= preloading.width / 2;
    game.load.setPreloadSprite(preloading);

    this.game.load.atlas('gameElements', 'images/game-spritesheet.png', 'images/game-sprites.json');
    
    this.game.load.image('tileset', 'images/tileset.png');
    this.game.load.tilemap('map', 'images/map.json', null, Phaser.Tilemap.TILED_JSON);

    game.load.image('brick', 'images/brick.png');
    game.load.image('brickset', 'images/brickset.png');
    game.load.image('bg', 'images/bg.png');
    game.load.spritesheet('player', 'images/player.png', 27, 33);
    game.load.spritesheet('enemy', 'images/enemy.png', 18, 27);
    // game.load.spritesheet('player', 'images/player.png', 27, 27);
    // game.load.spritesheet('enemy', 'images/enemy.png', 18, 18);
    game.load.image('coin', 'images/coin.png');
    game.load.audio('jump', 'sounds/jump.wav');
    game.load.audio('kill', 'sounds/kill.wav');
    game.load.audio('dead', 'sounds/dead.wav');
    game.load.audio('coin', 'sounds/coin.wav');
    game.load.audio('music', 'sounds/music.wav');
  },
  create: function() {
    game.state.start('Menu');
  }
};
Game.Menu = function(game) {};
Game.Menu.prototype = {
  create: function() {
    this.cursor = this.game.input.keyboard.createCursorKeys();
    game.add.sprite(0, 0, 'bg');
    label = game.add.text(w / 2, h - 50, 'press the UP arrow key to start', {
      font: '25px Arial',
      fill: '#fff'
    });
    label.anchor.setTo(0.5, 0.5);
    game.add.tween(label).to({
        angle: 1
      }, 1000, Phaser.Easing.Linear.None)
      .to({
        angle: -2
      }, 1000, Phaser.Easing.Linear.None).loop().start();
  },
  update: function() {
    if (this.cursor.up.isDown)
      game.state.start('Play');
  }
};
Game.Play = function(game) {};
Game.Play.prototype = {

  create: function() {
    game.world.setBounds(-50, -50, 800, 800);

    this.addGlobalVars(); //some global vars init
    this.initSounds();
    this.addControls(); //create move actions
    this.createWorld();
    this.createPlayer();
    this.createEnemies();
    this.createCoin();
    this.createExplosion();
    this.displayScore();
    this.displayLives();


    this.oneCoin = false;
    this.oneKill = false;
    this.finishTutorial = false;
    

    this.game.add.audio('music').play('', 0, 0.3, true);

    // TODO need to find out the half uses
    this.half = 1;
  },

  update: function() {

    this.game.physics.arcade.collide(this.player, this.platforms);
    this.game.physics.arcade.collide(this.enemies, this.platforms, this.enemyVsLayer, null, this);
    this.game.physics.arcade.collide(this.player, this.enemies, this.playerVsEnemy, null, this);
    this.game.physics.arcade.overlap(this.player, this.coin, this.takeCoin, null, this);

    this.movePlayer();
    this.enemyVsNothing();

    if(!this.player.inWorld){
      this.playerDie();
    }

    if(this.player.body.x < 1 || this.player.body.x > this.game.world.width - 20){
      this.playerDie();
    }

    if(this.nextEnemy < this.game.time.now){
      var start = 4000; //easiest dificulty (add enemies every 4 seconds)
      var end = 1000; //hardest dificulty (add enemies every 1 second)
      var score = 100; //hardest dificulty when the player has 100+ pts score
      var delay = Math.max(start - (start - end) * this.game.global.score / score, end); //formula for linear increas dificulty

      this.addEnemy();
      this.nextEnemy = this.game.time.now + delay;
    }
    if (this.oneCoin && this.oneKill && this.labelTutorial.visible && !this.finishTutorial) {
      game.add.tween(this.labelTutorial).to({ alpha: 0 }, 1000, Phaser.Easing.Linear.None).start();
      this.finishTutorial = true;
    }
  },
  
  createPlayer: function(){
    this.player = this.game.add.sprite(w / 2, h / 2, 'player');
    this.game.physics.arcade.enable(this.player);
    this.player.body.bounce.y = 0;
    this.player.body.gravity.y = 1500;
    this.player.anchor.setTo(0.5, 0.5);

    this.player.animations.add('walk', [1, 2], 6, true);
    // TODO need to find out the jumpCount uses
    this.playerJumpCount = 1;
  },
  
  movePlayer: function() {
    this.player.body.velocity.x = 0;
    
    if (this.cursor.left.isDown || this.altKeys.left.isDown || this.moveLeft) {
      if (this.player.body.touching.down)
        this.player.body.velocity.x = -400;
      else
        this.player.body.velocity.x = -300;
      this.player.animations.play('walk');
      this.player.scale.setTo(-1, 1);
    }
    else if (this.cursor.right.isDown || this.altKeys.right.isDown || this.moveRight) {
      if (this.player.body.touching.down)
        this.player.body.velocity.x = 400;
      else
        this.player.body.velocity.x = 300;
      this.player.animations.play('walk');
      this.player.scale.setTo(1, 1);
    }
    else {
      this.player.body.velocity.x = 0;
      this.player.animations.stop();
      this.player.frame = 0;
    }

    if (this.cursor.up.isDown || this.altKeys.up.isDown) {
      this.jumpPlayer();
    }

  },
  
  jumpPlayer: function(){
    if(this.player.body.onFloor()){
      this.player.body.velocity.y = -500;
      this.jump_s.play();
    }
    
    // if (this.cursor.up.isDown && this.player.body.touching.down) {
    //   console.log("this.cursor.up.isDown : ")
    //   this.jump_s.play('', 0, 0.08);
    //   this.playerJumpCount = 1;
    //   this.player.body.velocity.y = -200;
    // } else if (this.cursor.up.isDown && this.playerJumpCount < 20 && this.playerJumpCount != 0) {
    //   console.log("this.cursor.up.isDown : ")
    //   this.playerJumpCount += 1;
    //   this.player.body.velocity.y = -200;
    // } else
    //   this.playerJumpCount = 0;
  },
  
  playerVsEnemy: function(player, enemy) {
    if(player.body.touching.down && enemy.body.touching.up){
      // this.playerJumpCount = 5;
      this.enemyDie(enemy);
    } else
      this.playerDie(enemy);
  },

  respawnEnemy: function(enemy){
    enemy.kill();
    this.addEnemy();
  },

  enemyDie: function(enemy) {
    this.enemyStop(enemy);

    var tweenEnemy = this.game.add.tween(enemy);
    tweenEnemy.to({alpha: 0}, 400, Phaser.Easing.Linear.None, true);
    this.time.events.add(300, function(){
      tweenEnemy.stop();
      this.respawnEnemy(enemy);
    }, this);

    this.player.body.velocity.y = -250;
    this.kill_s.play();
    this.updateScore(2);
    this.game.plugins.screenShake.setup({
      shakeX: false,
      shakeY: true
    });
    this.game.plugins.screenShake.shake(5);


    this.oneKill = true;
  },

  playerDie: function(enemy) {
    if(!this.player.alive){
      return;
    }
    if(typeof enemy !== 'undefined'){
      this.enemyStop(enemy);
    }
    this.player.alive = false;
    this.game.global.playerLives -= 1;
    this.dead_s.play();
    this.jump_s.stop();
    this.shakeScreen(10, 100);


    game.add.tween(this.player).to({ y: h + 10 }, 500, Phaser.Easing.Linear.None).start()
    game.add.tween(this.player).to({ angle: 360 }, 500, Phaser.Easing.Linear.None).start();
    
    this.time.events.add(1000, function(){
      this.player.kill();
      if(this.game.global.playerLives < 1){

        this.updateLives();
        this.enemies.destroy(false);
        this.time.events.add(5000, function(){
          this.game.state.start('Menu');
        }, this);
      }
      else{
        this.player.reset(this.game.world.centerX, this.game.world.centerY);
        this.updateLives();

        this.enemies.destroy(false);
        this.createEnemies();
        this.respawnCoin();
      }
    }, this);
  },
  
  createWorld: function() {
    this.map = this.game.add.tilemap('map');
    this.map.addTilesetImage('brickset');
    this.game.plugins.levelsManager.init(this.map);
    this.platforms = this.game.plugins.levelsManager.createLevel(true);
  },

  createCoin: function(){
    var randomPos = this.getCoinRandomPosition();
    this.coin = this.game.add.sprite(randomPos.x, randomPos.y, 'coin');
    this.game.physics.arcade.enable(this.coin);
    this.coin.anchor.setTo(0.5, 0.5);
    this.coin.body.gravity.y = 10;
    this.coin.body.bounce.y = 0.3;
  },

  respawnCoin: function(){
    this.coin.kill();
    this.createCoin();
  },
  
  takeCoin: function() {
    this.updateScore(1);
    this.updateCoinPosition();
    this.coin_s.play('', 0, 0.15);

    /* Animations */
    //scale up/down the player when he got the coin
    this.game.add.tween(this.player.scale)
    .to({x:1.3, y:1.3}, 50)
    .to({x:1, y:1}, 150)
    .start();
    
    this.oneCoin = true;
  },
  
  getPossibleCoinCoordinates: function(){
    return {
      '1': [
        {x: 140, y: 70}, {x: 250, y: 30}, {x: 360, y: 70},
        {x: 60, y: 150}, {x: 250, y: 130}, {x: 440, y: 150},
        {x: 110, y: 230}, {x: 380, y: 230},
        {x: 90, y: 310}, {x: 250, y: 270}, {x: 350, y: 310},
      ],
      '2': [
        {x: 130, y: 50}, {x: 250, y: 70}, {x: 370, y: 50},
        {x: 30, y: 70}, {x: 190, y: 90}, {x: 310, y: 90}, {x: 470, y: 70},
        {x: 30, y: 130}, {x: 150, y: 150}, {x: 210, y: 170}, {x: 290, y: 170}, {x: 350, y: 150}, {x: 450, y: 130},
        {x: 30, y: 190}, {x: 70, y: 230}, {x: 110, y: 250}, {x: 190, y: 230}, {x: 310, y: 230}, {x: 430, y: 230}, {x: 470, y: 190},
        {x: 50, y: 310}, {x: 170, y: 310}, {x: 350, y: 310}, {x: 450, y: 310},
      ],
      '3': [
        {x: 50, y: 50}, {x: 110, y: 70}, {x: 250, y: 70}, {x: 390, y: 70}, {x: 450, y: 50},
        {x: 30, y: 150}, {x: 150, y: 150}, {x: 210, y: 110}, {x: 290, y: 110}, {x: 250, y: 150}, {x: 390, y: 150}, {x: 470, y: 150},
        {x: 50, y: 210}, {x: 90, y: 190}, {x: 190, y: 230}, {x: 310, y: 230}, {x: 430, y: 190}, {x: 450, y: 210},
        {x: 30, y: 270}, {x: 30, y: 310}, {x: 110, y: 310}, {x: 390, y: 310}, {x: 470, y: 270},
        ],
      '4': [
        {x: 70, y: 50}, {x: 170, y: 50}, {x: 370, y: 50}, {x: 430, y: 50},
        {x: 30, y: 110}, {x: 130, y: 130}, {x: 250, y: 90}, {x: 370, y: 130}, {x: 470, y: 110},
        {x: 30, y: 170}, {x: 210, y: 170}, {x: 390, y: 130}, {x: 470, y: 170},
        {x: 10, y: 250}, {x: 130, y: 230}, {x: 250, y: 270}, {x: 370, y: 230}, {x: 490, y: 250},
        {x: 30, y: 310}, {x: 130, y: 310}, {x: 370, y: 310}, {x: 470, y: 310},
      ],
      '5': [
        {x: 10, y: 130}, {x: 90, y: 70}, {x: 210, y: 70},
        {x: 310, y: 70}, {x: 430, y: 70}, {x: 490, y: 130},
        {x: 250, y: 130}, {x: 150, y: 130}, {x: 350, y: 130},
        {x: 90, y: 190}, {x: 310, y: 190}, {x: 430, y: 190},
        {x: 10, y: 250}, {x: 150, y: 250}, {x: 250, y: 250},
        {x: 350, y: 250}, {x: 490, y: 250}, {x: 10, y: 310},
        {x: 150, y: 310}, {x: 350, y: 310}, {x: 490, y: 310},
      ]
    };
  },

  
  getCoinRandomPosition: function(){
    this.coinPos = this.getPossibleCoinCoordinates()[this.game.global.currentLevel];
    return this.coinPos[this.game.rnd.integerInRange(0, this.coinPos.length - 1)];

  },

  updateCoinPosition: function(){
    if(!this.coinPos.length){
      this.coinPos = this.getPossibleCoinCoordinates()[this.game.global.currentLevel];
    }

    for (var i = 0; i < this.coinPos.length; i++){
      if(this.coinPos[i].x === this.coin.x){
        this.coinPos.splice(i, 1);
      }
    }

    var newPos = this.getCoinRandomPosition();
    this.coin.reset(newPos.x, newPos.y);
    /* Animations */
    //smoothly appears the coin on new pos
    this.coin.scale.setTo(0, 0);
    this.game.add.tween(this.coin.scale)
    .to({x: 1, y: 1}, 300).
    start();
    
    // var tab = this.coinPosition[i];
    // this.coin_s.play('', 0, 0.15);
    // var ra = rand(tab.length);
    // if (ra == this.coinX) ra = (ra + 1) % tab.length;
    // this.coinX = ra;
    // coin.reset(tab[ra][0], tab[ra][1]);
    // this.oneCoin = true;
  },
  
  createEnemies: function(){
    this.enemies = this.game.add.group();
    this.enemies.enableBody = true;
    this.enemies.createMultiple(10, 'enemy');
    // this.enemies.setAll('outOfBoundsKill', true);
    // this.enemyTime = 0;
  },
  
  addEnemy: function(){
    var enemy = this.enemies.getFirstDead();
    if(!enemy){
      return;
    }

    enemy.alpha = 1;
    enemy.anchor.setTo(0.5, 1);
    enemy.reset(this.game.world.centerX, 0);
    enemy.body.gravity.y = 500;
    enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
    enemy.body.bounce.x = 1;
    enemy.checkWorldBounds = true;
    enemy.outOfBoundsKill = true;

    enemy.animations.add('walk', [0, 1], 3, true);
    enemy.animations.play('walk');

    // enemy.animations.add('right', ['enemy-02', 'enemy-03'], 8, true);
    // enemy.animations.add('left', ['enemy-04', 'enemy-05'], 8, true);

    // if(enemy.body.velocity.x > 0){
    //   enemy.animations.play('left');
    // }
    // else if(enemy.body.velocity.x < 0){
    //   enemy.animations.play('right');
    // }
    // else{
    //   enemy.animations.stop();
    //   enemy.frameName = 'enemy-01';
    // }

    this.time.events.repeat(this.game.rnd.integerInRange(2000, 6000), 9999, function(){
      enemy.body.velocity.y = -300;
      if(enemy.body.y < 0){
        this.respawnEnemy(enemy);
      }
    }, this);
  },

  enemyVsLayer: function(enemy, wall) {
    if(enemy.body.velocity.x > 0){
      enemy.scale.setTo(-1, 1);
    } else {
      enemy.scale.setTo(1, 1);
    }
  },
  
  enemyVsNothing: function(){
    this.enemies.forEach(function(enemy){
      if(enemy.alive){
        if(enemy.body.x < 1 || enemy.body.x > this.game.world.width - 20){
          if(enemy.body.x < 1){
            enemy.body.x = 1;
          }
          else if(enemy.body.x > this.game.world.width - 20){
            enemy.body.x = this.game.world.width - 20;
          }

          enemy.body.velocity.x = - enemy.body.velocity.x;
        }

        if(!enemy.inWorld || enemy.body.y > this.game.world.height){
          enemy.kill();
        }
      }
    }.bind(this));
  },
  
  enemyStop: function(enemy){
    enemy.body.velocity.x = 0; //stop enemy
    enemy.body.velocity.y = 0; //stop enemy
    enemy.frame = 0;
  },
  
  createExplosion: function(){
    /* Explode the player when he hits the enemy */
    this.emitter = this.game.add.emitter(0, 0, 15);
    this.emitter.makeParticles('gameElements', 'pixel');
    this.emitter.setYSpeed(-150, 150);
    this.emitter.setXSpeed(-150, 150);
    this.emitter.gravity = 0;
  },

  startExplosion: function(object){
    this.emitter.x = object.x;
    this.emitter.y = object.y;
    this.emitter.start(true, 600, null, 15);
  },

  displayScore: function(){
    this.labelScore = this.game.add.text(30, 30, 'score: 0', {
      font: '16px Arial',
      fill: '#fff'
    });
    this.labelBestScore = this.game.add.text(30, 50, 'best: 0', {
      font: '16px Arial',
      fill: '#fff'
    });
    this.labelTutorial = this.game.add.text(w / 2 + 0.5, h / 2 - 20 + 0.5, '1- arrow keys to move\n2- take coins for score\n3- jump on penguins to kill', {
      font: '18px Arial',
      fill: '#fff'
    });
    this.labelTutorial.anchor.setTo(0.5, 0.5);
    this.score = 0;
    this.bestScore = 0;
  },

  updateScore: function(value) {
    this.score += value;
    this.labelScore.text = 'score: ' + this.score;
  },
  
  displayLives: function(){
    this.lives = this.game.add.group();
    for (var i = 0; i < this.maxPlayerLives; i++) {
      this.lives.create(420 + 17 * i, 30, 'gameElements', 'live');
    }
  },

  updateLives: function(){
    //remove lives
    this.startExplosion(this.lives.children[this.game.global.playerLives]);
    this.lives.remove(this.lives.children[this.game.global.playerLives]);
  },

  
  initSounds: function(){
    this.jump_s = this.game.add.audio('jump');
    this.coin_s = this.game.add.audio('coin');
    this.dead_s = this.game.add.audio('dead');
    this.kill_s = this.game.add.audio('kill');
  },

  addControls: function(){
    this.cursor = this.game.input.keyboard.createCursorKeys();

    //prevent to move the game frame by pushing control buttons
    this.game.input.keyboard.addKeyCapture([
      Phaser.Keyboard.UP,
      Phaser.Keyboard.DOWN,
      Phaser.Keyboard.LEFT,
      Phaser.Keyboard.RIGHT,
      Phaser.Keyboard.SPACEBAR,
    ]);
    
    this.altKeys = {
      up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
      left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
      right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)
    };
  },

  addGlobalVars: function(){
    this.game.plugins.screenShake = this.game.plugins.add(Phaser.Plugin.ScreenShake);
    this.game.plugins.levelsManager = this.game.plugins.add(Phaser.Plugin.levelsManager);
    this.game.plugins.levelsManager.setup({
      levels: 5,
      prefix: 'level_',
      collisionMap: {
        '1': [1,2,3],
        '2': [1,2,3],
        '3': [1,2,3],
        '4': [1,2,3],
        '5': [1,2,3]
      }
    });

    this.game.global.score = 0;
    this.game.global.playerLives = 3;
    this.game.global.currentLevel = 1;
    this.game.global.levelScore = 0;
    this.maxPlayerLives = 3;
    this.nextEnemy = 0;
    this.coinPos = [];
  },

  newEnemy: function() {
    var enemy = this.enemies.getFirstExists(false);
    if (enemy) {
      enemy.reset(w / 2, 0);
      enemy.scale.setTo(1, 1);
      enemy.anchor.setTo(0.5, 1);
      enemy.body.gravity.y = 5;
      enemy.body.velocity.x = 0;
      enemy.animations.add('walk', [0, 1], 3, true);
      if (this.half == 1) {
        enemy.scale.setTo(-1, 1);
        this.half = 0;
      } else
        this.half = 1;
    }
  },
  updateEnemy: function(enemy) {
    if (enemy.body.velocity.x == 0 && enemy.body.touching.down) {
      enemy.body.velocity.x = -70;
      enemy.animations.play('walk');
      if (enemy.scale.x == -1)
        enemy.body.velocity.x *= -1;
    }
    if (enemy.alive == true && enemy.y >= h + enemy.height / 2) {
      enemy.alive = false;
      this.newEnemy();
    }
  },

  playerInit: function() {
    this.player.x = w / 2;
    this.player.y = h / 2;
    this.player.alive = true;
  },
  shakeScreen: function(i, t) {
    this.game.add.tween(this.game.camera).to({
        y: i
      }, t, Phaser.Easing.Linear.None)
      .to({
        y: -i
      }, t, Phaser.Easing.Linear.None)
      .to({
        y: 0
      }, t, Phaser.Easing.Linear.None).start();
    this.game.add.tween(this.game.camera).to({
        x: i
      }, t, Phaser.Easing.Linear.None)
      .to({
        x: -i
      }, t, Phaser.Easing.Linear.None)
      .to({
        x: 0
      }, t, Phaser.Easing.Linear.None).start();
  },
  updateBestScore: function() {
    if (this.bestScore < this.score) {
      this.bestScore = this.score;
      this.labelBestScore.content = 'best: ' + this.bestScore;
      this.labelBestScore.scale.setTo(2, 2);
      this.game.add.tween(this.labelBestScore.scale).to({
        x: 1,
        y: 1
      }, 300, Phaser.Easing.Linear.None).start();
    }
    this.score = 0;
    this.labelScore.content = 'score: ' + this.score;
  },
};
var game = new Phaser.Game(w, h, Phaser.AUTO, 'gameContainer');

game.global = {
  score: 0,
  levelScore: 0,
  maxLevelScore: 50,
  playerLives: 3,
  currentLevel: 1
};

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
game.state.add('Menu', Game.Menu);
game.state.add('Play', Game.Play);

game.state.start('Boot');