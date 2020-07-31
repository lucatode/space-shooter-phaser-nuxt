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
  }


}

export default LevelOne;
