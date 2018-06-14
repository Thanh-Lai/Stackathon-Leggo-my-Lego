import { Sprite } from 'phaser'

export default class Paddle extends Sprite {
  constructor (game, x, y) {
    super(game, x, y, 'paddle')

    this.game.physics.arcade.enableBody(this)
    this.anchor.setTo(0.5, 0.5)
    this.body.immovable = true
  }

  update () {
  }
}
