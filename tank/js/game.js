var IS_MOBILE = (window.innerWidth < 640) ? true : false;

var game = new Phaser.Game(
  640,
  480,
  Phaser.CANVAS,
  'game'
);

var PhaserGame = function(game) {
  // game prop
  this.tank = null;
  this.turret = null;
  this.flame = null;
  this.bullet = null;

  this.background = null;
  this.targets = null;
  this.land = null;
  this.emitter = null;

  this.power = 300;
  this.powerText = null;

  this.cursors = null;
  this.fireButton = null;
};

PhaserGame.prototype = {
  init: function() {
    // add plugin
    if (!IS_MOBILE) this.add.plugin(Phaser.Plugin.Debug);

    // set roundPixels
    this.game.renderer.renderSession.roundPixels = true;

    // set game world
    this.game.world.setBounds(0, 0, 992, 480);

    // set physics
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 200;
  },
  preload: function() {
    // load all images
    this.load.image('tank', 'assets/tank.png');
    this.load.image('turret', 'assets/turret.png');
    this.load.image('bullet', 'assets/bullet.png');
    this.load.image('background', 'assets/background.png');
    this.load.image('flame', 'assets/flame.png');
    this.load.image('target', 'assets/target.png');
    this.load.image('land', 'assets/land.png');
  },
  render: function() {
    this.game.debug.spriteInfo(this.bullet, 320, 32);
    this.game.debug.bodyInfo(this.bullet, 32, 360);
    this.game.debug.body(this.bullet);
  },
  create: function () {
    // set bg
    this.background = this.add.sprite(0, 0, 'background');

    // set target group
    // The targets to hit (hidden behind the land slightly)
    this.targets = this.add.group(this.game.world, 'targets', false, true, Phaser.Physics.ARCADE);
    this.targets.create(284, 378, 'target');
    this.targets.create(456, 153, 'target');
    this.targets.create(545, 305, 'target');
    this.targets.create(726, 391, 'target');
    this.targets.create(972, 74, 'target');

    // set target gravity
    // Stop gravity from pulling them away
    this.targets.setAll('body.allowGravity', false);

    // set land
    // The land is a BitmapData the size of the game world
    // We draw the 'lang.png' to it then add it to the world
    this.land = this.add.bitmapData(992, 480);
    this.land.draw('land');
    this.land.update();
    this.land.addToWorld();

    // effect when hit
    // A small burst of particles when a target is hit
    this.emitter = this.add.emitter(0, 0, 30);
    this.emitter.makeParticles('flame');
    this.emitter.setXSpeed(-120, 120);
    this.emitter.setYSpeed(-100, -200);
    this.emitter.setRotation();

    // A single bullet that the tank will fire
    this.bullet = this.add.sprite(0, 0, 'bullet');
    this.bullet.exists = false;
    this.physics.arcade.enable(this.bullet);

    // The body of the tank
    this.tank = this.add.sprite(24, 383, 'tank');

    // tank turret
    // The turret which we rotate (offset 30x14 from the tank)
    this.turret = this.add.sprite(this.tank.x + 30, this.tank.y + 14, 'turret');

    // fire when fire
    // When we shoot this little flame sprite will appear briefly at the end of the turret
    this.flame = this.add.sprite(0, 0, 'flame');
    this.flame.anchor.set(0.5);
    this.flame.visible = false;

    // "Power" text
    // Used to display the power of the shot
    this.power = 300;
    this.powerText = this.add.text(8, 8, 'Power: 300', { font: "18px Arial", fill: "#ffffff" });
    this.powerText.setShadow(1, 1, 'rgba(0, 0, 0, 0.8)', 1);
    this.powerText.fixedToCamera = true;

    // Some basic controls
    this.cursors = this.input.keyboard.createCursorKeys();

    // receive 'spacebar' input
    this.fireButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    this.fireButton.onDown.add(this.fire, this);
  },
  /**
   * Called by update if the bullet is in flight.
   * 
   * @method bulletVsLand
   */
  bulletVsLand: function () {
    // Simple bounds check
    if (this.bullet.x < 0 ||
      this.bullet.x > this.game.world.width ||
      this.bullet.y > this.game.height) {
      this.removeBullet();
      return;
    }

    var x = Math.floor(this.bullet.x);
    var y = Math.floor(this.bullet.y);
    var rgba = this.land.getPixel(x, y);

    if (rgba.a > 0) {
      this.land.blendDestinationOut();
      this.land.circle(x, y, 16, 'rgba(0, 0, 0, 255');
      this.land.blendReset();
      this.land.update();

      // If you like you could combine the above 4 lines:
      // this.land.blendDestinationOut().circle(x, y, 16, 'rgba(0, 0, 0, 255').blendReset().update();

      this.removeBullet();
    }
  },
  /**
   * Called by fireButton.onDown
   *
   * @method fire
   */
  fire: function() {
    if (this.bullet.exists) { return; }

    // Re-position the bullet where the turret is
    this.bullet.reset(this.turret.x, this.turret.y);

    // Now work out where the END of the turret is
    var p = new Phaser.Point(this.turret.x, this.turret.y);
    p.rotate(p.x, p.y, this.turret.rotation, false, 34);

    // And position the flame sprite there
    this.flame.x = p.x;
    this.flame.y = p.y;
    this.flame.alpha = 1;
    this.flame.visible = true;

    // Boom
    this.add.tween(this.flame).to( { alpha: 0 }, 100, "Linear", true);

    // So we can see what's going on when the bullet leaves the screen
    this.camera.follow(this.bullet);

    // Our launch trajectory is based on the angle of the turret and the power
    this.physics.arcade.velocityFromRotation(this.turret.rotation, this.power, this.bullet.body.velocity);
  },
  /**
   * Called by physics.arcade.overlap if the bullet and a target overlap
   *
   * @method hitTarget
   * @param {Phaser.Sprite} bullet - A reference to the bullet (same as this.bullet)
   * @param {Phaser.Sprite} target - The target the bullet hit
   */
  hitTarget: function(bullet, target) {
    this.emitter.at(target);
    this.emitter.explode(2000, 10);

    target.kill();

    this.removeBullet(true);
  },
  /**
   * Removes the bullet, stops the camera following and tweens the camera back to the tank.
   * Have put this into its own method as it's called from several places.
   *
   * @method removeBullet
   */
  removeBullet: function(hasExploded) {
    if (typeof hasExploded === 'undefined') { hasExploded = false; }

    this.bullet.kill();
    this.camera.follow();

    var delay = 1000;
    if (hasExploded) { delay = 2000; }

    this.add.tween(this.camera).to( { x: 0 }, 1000, "Quint", true, delay);
  },
  /**
   * Core update loop. Handles collision checks and player input.
   *
   * @method update
   */
  update: function() {
    // If the bullet is in flight we don't let them control anything
    if (this.bullet.exists) {
      // Bullet vs. the Targets
      this.physics.arcade.overlap(this.bullet, this.targets, this.hitTarget, null, this);

      // Bullet vs. the land
      this.bulletVsLand();

    } else {
      // Allow them to set the power between 100 and 600
      if (this.cursors.left.isDown && this.power > 100) {
        this.power -= 2;

      } else if (this.cursors.right.isDown && this.power < 600) {
        this.power += 2;
      }

      // Allow them to set the angle, between -90 (straight up) and 0 (facing to the right)
      if (this.cursors.up.isDown && this.turret.angle > -90) {
        this.turret.angle--;

      } else if (this.cursors.down.isDown && this.turret.angle < 0) {
        this.turret.angle++;
      }

      // Update the text
      this.powerText.text = 'Power: ' + this.power;
    }
  }
};

game.state.add('Game', PhaserGame, true);
