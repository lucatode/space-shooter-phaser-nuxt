import {gameConfig} from "../game-config";

class SpaceBackgroundGameScene extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'SpaceBackgroundGameScene', active: true });
  }


  preload() {
    this.load.image('sky', 'sky.jpg')
  }

  create() {
    this.physics.world.setBoundsCollision();
    this.background = this.add.tileSprite(0, 0,gameConfig.width, gameConfig.height, 'sky');
    this.background.setOrigin(0,0);
  }

  update(time, delta) {
    this.background.tilePositionY -= 0.5
  }

}

export default SpaceBackgroundGameScene;
