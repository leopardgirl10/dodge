// State: DogeDodge.Play
'use strict'

var DogeDodge = {};

DogeDodge.Play = function () {};

DogeDodge.Play.prototype = {

  init: function () {
    console.log("%c~~~ Booting DogeDodge ~~~\n Compliments of SkilStak",
                "color:#fdf6e3; background:#073642");
  },

  preload: function () {
    this.load.image('background','assets/background.png');
    this.load.spritesheet('dodger','assets/dodger.png',46,64,2);
    
  },

  create: function () {

    // background
    this.background = this.add.tileSprite(0,0,320,568,'background');
    this.background.autoScroll(0,50);
    this.background.scale.set(1);

    // dodger
    this.dodger = this.add.sprite(160,510,'dodger');
    // this.dodger.smoothed = false;
    // this.background.scale.set(1);
    this.dodger.anchor.set(0.5,0.5);
    this.dodger.animations.add('blink');
    this.dodger.animations.play('blink',2,true); // (name,fps,loop)
  }

};

