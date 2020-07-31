import GameScene from "./GameScene";
import Enemy from "../GameObjects/Enemy";
import {gameConfig} from "../game-config";

class LevelOne extends GameScene {

  constructor() {
    super({key: 'LevelOne', active: true});
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();
    this.physics.add.overlap(this.projectiles, this.enemies, (projectile, enemy) => {
      projectile.destroy();
      enemy.destroy();
      this.enemyExplosion(enemy);
      this.projectileExplosion(projectile);
    }, null, this);

    this.physics.add.overlap(this.player, this.enemies, this.killPlayer, null, this);

  }

  update(time, delta) {
    super.update(time, delta);
    this.spawnEnemies()
    this.enemies.getChildren().forEach(enemy => enemy.update())
  }

  spawnEnemies() {
    if(this.enemies.getLength() == 0){
      let enemy = new Enemy(this);
      enemy.setRandomPosition(0, 0, gameConfig.width, 0);
      this.enemies.add(enemy);
    }
  }

  killPlayer(player, enemy){
    this.kill(player);
    enemy.destroy();
    this.enemyExplosion(enemy);
  }


  enemyExplosion(enemy) {
    var explosion = this.add.sprite(enemy.x, enemy.y, "enemy_explosion");
    explosion.setScale(2)
    explosion.play('anim_enemy_explode')
    this.time.addEvent({
      delay: 200,
      callback: () => {
        explosion.destroy();

      }
    })
  }

  projectileExplosion(projectile){
    var explosion = this.add.sprite(projectile.x, projectile.y, "projectile_explosion");
    explosion.setScale(2)
    explosion.play('anim_projectile_explode')
    this.time.addEvent({
      delay: 200,
      callback: () => {
        explosion.destroy();

      }
    })
  }
}

export default LevelOne;
