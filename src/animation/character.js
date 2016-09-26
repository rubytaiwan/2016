/**
 * Character
 */

import {BLEND_MODES, Container, Sprite} from 'pixi.js'
import Resource from './resources'
import zOrder from 'json!./zorder.json'

export default class Character {
    constructor(stage) {
        this.character = new Container
        this.character.pivot.set(692, 0)
        this.character.x = 692

        this.hairFront = new Container
        this.gem = new Container

        this.hairFrontA = new Sprite(Resource.texture('character-hair-front-a'))
        this.hairFrontB = new Sprite(Resource.texture('character-hair-front-b'))
        this.hairBack = new Sprite(Resource.texture('character-hair-back'))
        this.body = new Sprite(Resource.texture('character-body'))
        this.gemBody = new Sprite(Resource.texture('gem'))
        this.gemGlowing = new Sprite(Resource.texture('gem-glowing'))

        this.hairFront.zOrder = zOrder['character-hair-front']
        this.hairBack.zOrder = zOrder['character-hair-back']
        this.body.zOrder = zOrder['character-body']
        this.gem.zOrder = zOrder['gem']
        this.gemBody.zOrder = zOrder['gem']
        this.gemGlowing.zOrder = zOrder['gem-glowing']

        this.gem.pivot.set(570, 0)
        this.gem.x = 570

        this.gemGlowing.blendMode = BLEND_MODES.LUMINOSITY

        this.hairFront.addChild(this.hairFrontB)
        this.hairFront.addChild(this.hairFrontA)

        this.character.addChild(this.hairBack)
        this.character.addChild(this.body)
        this.character.addChild(this.hairFront)
        this.character.addChild(this.gem)

        this.gem.addChild(this.gemBody)
        this.gem.addChild(this.gemGlowing)

        stage.addChild(this.character)
    }

    update(currentTime, delta) {
        this.animateHair(currentTime)
        this.animateCharacter(currentTime)
        this.animateGem(currentTime)
    }

    animateGem(currentTime) {
        this.gem.y = Math.sin(currentTime / 1500) * 15 + 10
        this.gem.skew.set(
            0,
            Math.cos(currentTime / 500) * 0.05
        )

        this.gemGlowing.alpha = (Math.cos(currentTime / 1000) + 1) / 2
    }

    animateCharacter(currentTime) {
        this.character.y = Math.cos(currentTime / 750) * 5 + 10
        this.character.skew.set(
            0,
            Math.sin(currentTime / 500) * 0.015
        )
    }

    animateHair(currentTime) {
        let skewX = Math.sin(currentTime / 1000 * 2) * 0.005
        let skewY = Math.cos(currentTime / 500) * 0.001 + 0.002
        // this.hairFront.skew.set(skewX, skewY)
        this.hairBack.skew.set(skewX * 2, skewY * 2)

        this.hairFrontA.skew.set(skewX / 2, skewY / 2)
    }
}
