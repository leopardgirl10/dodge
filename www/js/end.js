// State: DogeDodge.End

'use strict';

DogeDodge.End = function () {};

DogeDodge.End.prototype = {

  create: function () {
  },

  start: function () {
    this.game.state.start('start');
  }

};

