import Phaser from 'phaser'

import { gameConfig } from '~/game/game-config';
import { parseColor } from '~/game/parse-color'
import GameScene from "./Scenes/GameScene";
import LevelOne from "./Scenes/LevelOne";

export const createGame = (parent, store) => {

  const scene = [LevelOne]

  return new Phaser.Game({
    ...gameConfig,
    parent,
    scene,
    type: Phaser.AUTO,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
  })
}
