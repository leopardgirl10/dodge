// State: DogeDodge.Start

'use strict';

DogeDodge.Start = function () {};

DogeDodge.Start.prototype = {

  init: function () {
    this.background = null;
  },

  start: function () {
    this.game.state.start('play');
  }

};

