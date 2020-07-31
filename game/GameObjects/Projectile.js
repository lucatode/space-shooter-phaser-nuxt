class Projectile extends Phaser.GameObjects.Sprite{
  constructor(scene,x,y) {
    super(scene, x+8, y-16, "beam");

    scene.add.existing(this);

    this.play("beam_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = - 250;

    scene.projectiles.add(this);

  }


  update(){
    if(this.y < 32 ){
      this.destroy();
    }
  }
}

export default Projectile;
