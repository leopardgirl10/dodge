// State: DogeDodge.boot

'use strict';

var DogeDodge = {
};

DogeDodge.Boot = function () {};

DogeDodge.Boot.prototype = {

  init: function () {
    console.log("%c~~~ Booting the DogeDodge ~~~\n Compliments of SkilStak", "color:#fdf6e3; background:#073642");
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },

  preload: function () {
    this.game.load.spritesheet('skilstak','assets/skilstak.png', 46,64);
  },

  create: function () {
    this.game.stage.backgroundColor = "#073642";
    this.game.state.start('preload');
  }

};

