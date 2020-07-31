import Projectile from "../GameObjects/Projectile";

class BootScene extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'BootScene', active: true });
  }

  preload(){
    // this.load.image('sky', 'sky.jpg')
    // this.load.spritesheet('ship', 'ship.png', {frameWidth:16, frameHeight:16})
    // this.load.spritesheet('beam', 'beam.png', {frameWidth:16, frameHeight:16})
    // this.load.spritesheet('enemy', 'player.png', {frameWidth:16, frameHeight:16})


  }

  create(){
    // this.anims.create({
    //   key: "beam_anim",
    //   frames: this.anims.generateFrameNumbers("beam"),
    //   frameRate: 20,
    //   repeat: -1
    // });
    //
    // this.anims.create({
    //   key: "ship_anim",
    //   frames: this.anims.generateFrameNumbers("ship"),
    //   frameRate: 20,
    //   repeat: -1
    // });

    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update(){
    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      this.scene.start('LevelOne');
    }
  }

}
