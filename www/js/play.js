// State: DogeDodge.Play

'use strict';

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    this.background = null;
  },

  create: function () {
    this.background = this.add.tileSprite(0,0,320,568,"background");
    console.log('um made it');
    //this.background.autoScroll(0,50);
    //
    //this.background.scale.set(1);
  },

  update: function () {
  },

  end: function () {
  }

};

