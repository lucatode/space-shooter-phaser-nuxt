import {gameConfig} from "../game-config";
import Projectile from "../GameObjects/Projectile";

class GameScene extends Phaser.Scene {

  constructor ()
  {
    super({ key: 'GameScene', active: true });


  }

  preload(){
    this.load.image('sky', 'sky.jpg')
    this.load.spritesheet('ship', 'ship.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('beam', 'beam.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('enemy', 'player.png', {frameWidth:16, frameHeight:16})

  }

  create(){
    this.physics.world.setBoundsCollision();
    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });


    this.background = this.add.tileSprite(0, 0,gameConfig.width, gameConfig.height, 'sky');
    this.background.setOrigin(0,0);

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.createShip(this);

    this.projectiles = this.add.group();
    this.enemies = this.add.group();
  }

  update(time, delta) {
    super.update(time, delta);
    this.background.tilePositionY -= 0.5

    this.movePlayerManager(this, gameConfig)

    this.projectiles.getChildren().forEach(projectile => projectile.update())
  }

  createShip(context) {
    this.anims.create({
      key: "ship_anim",
      frames: this.anims.generateFrameNumbers("ship"),
      frameRate: 20,
      repeat: -1
    });
    context.ship = context.physics.add.sprite(gameConfig.width / 2 - 8, gameConfig.height - 64, 'ship');
    context.ship.setCollideWorldBounds(true);
    context.ship.setScale(3);
    context.ship.play('ship_anim');
    // context.ship.setInteractive();
  }

  resetPlayerPosition(player){
    player.x = gameConfig.width / 2 - 8;
    player.y = gameConfig.height - 64
  }

  subtractLives(){console.log('-1 life')}

  movePlayerManager(context, config){
    if(this.cursorKeys.left.isDown){
      this.ship.setVelocityX(-config.playerSpeed)
    }else if(this.cursorKeys.right.isDown){
      this.ship.setVelocityX(config.playerSpeed)
    }else{
      this.ship.setVelocityX(0)
    }

    if(this.cursorKeys.up.isDown){
      this.ship.setVelocityY(-config.playerSpeed)
    }else if(this.cursorKeys.down.isDown){
      this.ship.setVelocityY(config.playerSpeed)
    }else{
      this.ship.setVelocityY(0)
    }

    if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
      console.log('Fire!')
      var beam = new Projectile(this)
    }
  }

}

export default GameScene;
