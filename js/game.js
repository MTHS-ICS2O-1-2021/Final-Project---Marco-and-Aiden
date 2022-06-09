/* global Phaser */

// Created by: marco cuconato
// Created on: April 2022
// This is the Phaser3 game configuration file

import SplashScene from './splashScene.js'

// Our game scenes
const splashScene = new SplashScene()

/** Game scene.*/
const config = {
 type: Phaser.AUTO,
 width: 1920,
 height: 1080,
 physics: {
   default: 'arcade',
   arcade: {
     debug: false
   },
 },
 // set background color
 backgroundColor: 0xffffff,
 scale: {
   mode: Phaser.Scale.FIT,
   // we place it in the middle of the page.
   autoCenter: Phaser.Scale.CENTER_BOTH,
 },
}

const game = new Phaser.Game(config)
// console.log(game)

// load scenes
// Note: remember any 'key' is global and CAN NOT be reused!
game.scene.add('splashScene', splashScene)

// the start scene
game.scene.start('splashScene')
