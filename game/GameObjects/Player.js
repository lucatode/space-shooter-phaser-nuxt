import {gameConfig} from "../game-config";
import Projectile from "./Projectile";

class Player extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y) {

    super(scene, x, y, "player");

    scene.add.existing(this);

    this.play("player_anim");
    scene.physics.world.enableBody(this);

  }


  update(context, config, createProjectile){
    if(context.cursorKeys.left.isDown){
      context.player.body.velocity.x = (-config.playerSpeed)
    }else if(context.cursorKeys.right.isDown){
      context.player.body.velocity.x =(config.playerSpeed)
    }else{
      context.player.body.velocity.x =(0)
    }

    if(context.cursorKeys.up.isDown){
      context.player.body.velocity.y =(-config.playerSpeed)
    }else if(context.cursorKeys.down.isDown){
      context.player.body.velocity.y =(config.playerSpeed)
    }else{
      context.player.body.velocity.y =(0)
    }

    if(Phaser.Input.Keyboard.JustDown(context.spacebar)){
      createProjectile(context.player.body.x, context.player.body.y)
    }

  }


}

export default Player;
