import {gameConfig} from "../game-config";

class SpaceBackgroundGameScene extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'SpaceBackgroundGameScene', active: true });
  }


  preload() {
    this.load.image('sky', 'TransparentGrid.png')
    this.load.image('skylineII', 'SynthwaveSkylineTransparent_II.png')
  }

  create() {
    this.physics.world.setBoundsCollision();
    this.background = this.add.tileSprite(0, 0,gameConfig.width, gameConfig.height, 'sky');
    this.skyline = this.add.image(768/2, 140, 'skylineII');
    this.background.setOrigin(0,0);
    var shape = this.make.graphics({x:0,y:0});
    shape.fillRect(0, 0, 768, 200);
    var mask = shape.createGeometryMask();
    mask.setInvertAlpha();
    this.background.setMask(mask);
    this.scrollPosition = this.background.tilePositionY;
  }

  update(time, delta) {
    let number = 20;
    if(this.background.tilePositionY - this.scrollPosition  === number){
      this.background.tilePositionY -= number
    }else{
      this.background.tilePositionY += 1
    }
  }

}

export default SpaceBackgroundGameScene;
