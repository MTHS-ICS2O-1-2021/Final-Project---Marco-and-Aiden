/* global Phaser */

// Created By: marco cuconato
// Created on: April 2022
// This is the Title Scene

class MenuScene extends Phaser.Scene {
 constructor() {
   super({ key: 'menuScene' })

   this.menuSceneBackgroundImage = null
   this.startButton = null
 }

 init(data) {
   this.cameras.main.setBackgroundColor('#ffffff')
 }

 preload() {
   console.log('Menu Scene')
   this.load.image('menuSceneBackground', 'assets/thegreatpepe.jpen')
   this.load.image('startButton', 'assets/Start-Button.png')
 }

 create(data) {
   this.menuSceneBackgroundImage = this.add.sprite(0, 0, 'menuSceneBackground')
   this.menuSceneBackgroundImage.x = 1920 / 2
   this.menuSceneBackgroundImage.y = 1080 / 2

   this.startButton = this.add.sprite(1920 / 2, (1080 / 2) + 100, 'startButton')
   this.startButton.setInteractive({ useHandCursor: true })
   this.startButton.on('pointerdown', () => this.clickButton())
 }

 update(time, delta) {
 }

export default MenuScene