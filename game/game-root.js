import Phaser from 'phaser'

import { gameConfig } from '~/game/game-config';

import LevelOne from "./Scenes/LevelOne";
import BootScene from "./Scenes/BootScene";
import GameScene from "./Scenes/GameScene";

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
