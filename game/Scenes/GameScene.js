import {gameConfig} from "../game-config";
import Projectile from "../GameObjects/Projectile";
import Player from "../GameObjects/Player";
import SpaceBackgroundGameScene from "./SpaceBackgroundGameScene";

class GameScene extends SpaceBackgroundGameScene{

  constructor ()
  {
    super({ key: 'GameScene', active: true });
  }

  preload(){
    super.preload();
    this.load.spritesheet('player', 'player.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('beam', 'beam.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('enemy', 'ship.png', {frameWidth:16, frameHeight:16})

  }

  create(){
    super.create();
    this.createPlayer(this);
    this.anims.create({
      key: "beam_anim",
      frames: this.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });

    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.projectiles = this.add.group();
    this.enemies = this.add.group();
  }

  update(time, delta) {
    super.update(time, delta);
    this.player.update(this, gameConfig, (x,y) => { new Projectile(this, x,y)});
    this.projectiles.getChildren().forEach(projectile => projectile.update())
  }

  createPlayer(context){
    this.anims.create({
      key: "player_anim",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
    context.player = new Player(context, gameConfig.width / 2 - 8, gameConfig.height - 64)
  }

  kill(player, context){
    console.log('dead')
    player.setActive(false).setVisible(false)
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        console.log('respawn')
        player.setActive(true).setVisible(true)
        player.x = gameConfig.width / 2 - 8;
        player.y = gameConfig.height - 64

      }
    })
  }

  subtractLives(){console.log('-1 life')}

}

export default GameScene;
