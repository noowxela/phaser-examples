'use strict';

/**
* Plugin to make screen shake FX (makes number of short camera movements).
*
*/
Phaser.Plugin.ScreenShake = function(game, parent){
  Phaser.Plugin.call(this, game, parent);

  //settings by default
  this._settings = {
    shakesCount: 0,
    shakeX: true,
    shakeY: true,
    sensCoef: 0.5
  };
  this.game.camera.bounds = null;

  /**
  * screen shake FX.
  */
  this._moveCamera = function(){
    if(this._settings.shakesCount > 0){
      var sens = this._settings.shakesCount * this._settings.sensCoef;

      if(this._settings.shakesCount % 2){
        this.game.camera.x += this._settings.shakeX ? sens : 0;
        this.game.camera.y += this._settings.shakeY ? sens : 0;
      }
      else{
        this.game.camera.x -= this._settings.shakeX ? sens : 0;
        this.game.camera.y -= this._settings.shakeY ? sens : 0;
      }

      this._settings.shakesCount--;

      if(this._settings.shakesCount === 0){
        this.game.camera.setPosition(0, 0);
      }
    }
  };
};

Phaser.Plugin.ScreenShake.prototype = Object.create(Phaser.Plugin.prototype);
Phaser.Plugin.ScreenShake.prototype.constructor = Phaser.Plugin.ScreenShake;


/**
* Change default settings object values with passed object value.
*
* @method Phaser.Plugin.ScreenShake#setup
* @param {object} [obj] - Passed object to merge
*/
Phaser.Plugin.ScreenShake.prototype.setup = function(obj){
  this._settings = Phaser.Utils.extend(false, this._settings, obj);
};


/**
* Pass value of count shakes.
*
* @method Phaser.Plugin.ScreenShake#shake
* @param {number} [count] - Value of count shakes
*/
Phaser.Plugin.ScreenShake.prototype.shake = function(count){
  this._settings.shakesCount = count;
};

Phaser.Plugin.ScreenShake.prototype.update = function(){
  this._moveCamera();
};
