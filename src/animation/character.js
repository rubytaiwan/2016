/**
 * Character
 */

import {Container, Sprite} from 'pixi.js'
import Resource from './resources'
import zOrder from 'json!./zorder.json'

export default class Character {
    constructor(stage) {
        this.character = new Container
        this.character.pivot.set(692, 0)
        this.character.x = 692

        this.hair = new Sprite(Resource.texture('character-hair'))
        this.body = new Sprite(Resource.texture('character-body'))

        this.hair.zOrder = zOrder['character-hair']
        this.body.zOrder = zOrder['character-body']

        this.character.addChild(this.body)
        this.character.addChild(this.hair)

        stage.addChild(this.character)
    }

    update(currentTime, delta) {
        this.animateHair(currentTime)
        this.animateCharacter(currentTime)
    }

    animateCharacter(currentTime) {
        this.character.y = Math.cos(currentTime / 1000) * 5 + 10
        this.character.skew.set(
            0,
            Math.sin(currentTime / 1000) * 0.02
        )
    }

    animateHair(currentTime) {
        this.hair.skew.set(
            Math.sin(currentTime / 1000 * 2) * 0.005,
            Math.cos(currentTime / 1000) * 0.001 + 0.002
        )
    }
}
