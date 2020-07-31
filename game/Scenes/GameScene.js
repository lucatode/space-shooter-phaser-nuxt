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
    this.load.spritesheet('enemy', 'ship.png', {frameWidth:48, frameHeight:48})
    this.load.spritesheet('player_explosion', 'player_explosion.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('enemy_explosion', 'enemy_explosion.png', {frameWidth:16, frameHeight:16})
    this.load.spritesheet('projectile_explosion', 'projectile_explosion.png', {frameWidth:16, frameHeight:16})

  }

  create(){
    super.create();
    this.createPlayer(this);
    this.createAnimations(this);

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

    context.player = new Player(context, gameConfig.width / 2 - 8, gameConfig.height - 64)
  }

  createAnimations(context){
    context.anims.create({
      key: "player_anim",
      frames: context.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });

    context.anims.create({
      key: "beam_anim",
      frames: context.anims.generateFrameNumbers("beam"),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: "anim_player_explode",
      frames: this.anims.generateFrameNumbers("player_explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "anim_enemy_explode",
      frames: this.anims.generateFrameNumbers("enemy_explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: "anim_projectile_explode",
      frames: this.anims.generateFrameNumbers("projectile_explosion"),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });
  }

  kill(player){
    var explosion = this.add.sprite(player.x, player.y, "player_explosion");
    explosion.setScale(2)
    explosion.play('anim_player_explode');

    player.setActive(false).setVisible(false)
    player.canShoot = false;
    this.time.addEvent({
      delay: 500,
      callback: ()=>{
        player.canShoot = true;
        player.setActive(true).setVisible(true)
        player.x = gameConfig.width / 2 - 8;
        player.y = gameConfig.height - 64
        explosion.destroy();

      }
    })
  }

  subtractLives(){console.log('-1 life')}

}

export default GameScene;
