import {gameConfig} from "../game-config";

class SpaceBackgroundGameScene extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'SpaceBackgroundGameScene', active: true });
  }


  preload() {
    this.load.spritesheet('sky', 'BackgroundSprite_blue_II.png', {frameWidth:768, frameHeight:800})
  }

  create() {
    this.physics.world.setBoundsCollision();
    this.background = this.add.sprite(0, 0,gameConfig.width, gameConfig.height, 'sky');
    this.background.setOrigin(0,0);

    this.anims.create({
      key: "sky_anim",
      frames: this.anims.generateFrameNumbers("sky"),
      frameRate: 3,
      repeat: -1
    });

    this.background.play('sky_anim')
  }

  update(time, delta) {
    // this.background.tilePositionY -= 0.5
  }

}

export default SpaceBackgroundGameScene;
