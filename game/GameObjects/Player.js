import {gameConfig} from "../game-config";

class Player extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y) {

    super(scene, x, y, "player");

    scene.add.existing(this);

    this.play("player_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = 250;

    scene.enemies.add(this);

  }


  update(){
    if(this.y > gameConfig.height ){
      this.destroy();
    }
  }
}

export default Player;
