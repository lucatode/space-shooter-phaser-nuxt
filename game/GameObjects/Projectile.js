class Projectile extends Phaser.GameObjects.Sprite{
  constructor(scene) {
    var x = scene.ship.x;
    var y = scene.ship.y - 16;

    super(scene, x, y, "beam");

    // 3.2 add to scene
    scene.add.existing(this);

    // 3.3
    this.play("beam_anim");
    scene.physics.world.enableBody(this);
    this.body.velocity.y = - 250;


    // 4.2 add the beam to the projectiles group
    scene.projectiles.add(this);

  }


  update(){

    // 3.4 Frustum culling
    if(this.y < 32 ){
      this.destroy();
    }
  }
}

export default Projectile;
