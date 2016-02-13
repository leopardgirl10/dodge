// State: DogeDodge.Preload

'use strict';

DogeDodge.Preload = function () {};

DogeDodge.Preload.prototype = {

  preload: function () {
    this.load.spritesheet('background','assets/background.png',320,568);
  },

  create: function () {
    this.game.state.start('start');
  }

};

