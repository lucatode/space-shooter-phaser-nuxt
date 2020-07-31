import {gameConfig} from "../game-config";

class Enemy extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y) {

    super(scene, x, y, "enemy");

    scene.add.existing(this);

    this.play("enemy_anim");
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

export default Enemy;
