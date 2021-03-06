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
    this.load.image("bg","assets/background.png")
  }
  create() {
    console.log("Loaded");
    this.state.start("Play")
  }
}

class PlayState {
  create() {
    console.log("Entered Play State");
    this.background = this.add.tileSprite(0,0,320,568,"bg");
    this.background.autoScroll(0,700);
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");


