var C = {
  "game": {
    "width": 320,
    "height": 568
  },
  "bg": {
    "width": 320,
    "height": 568,
    "xspeed": 0,
    "yspeed": 700,
    "file": "assets/background.png"
  },
  "p": {
    "file": "assets/player.png",
    "width": 46,
    "height": 64,
    "frames": 2
  }
}

//---------------------------------------------------------

class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}

class LoadState {
  preload() {
    console.log("Loading...");
    this.load.image("bg",C.bg.file)
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.frames)
  }
  create() {
    console.log("Loaded");
    this.state.start("Play")
  }
}

class PlayState {
  create() {
    console.log("Entered Play State");
    this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.bg.autoScroll(C.bg.xspeed,C.bg.yspeed);
  }
}

//---------------------------------------------------------

function restart() {
  game.state.start("Boot");
}

var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");


