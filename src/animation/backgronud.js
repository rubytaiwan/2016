/**
 * Background
 */

import {Sprite} from 'pixi.js'
import Resource from './resources'
import zOrder from 'json!./zorder.json'

export default class Background {
    constructor(stage, name) {
        this.sprite = new Sprite(
            Resource.texture(name)
        )

        this.sprite.zOrder = zOrder[name] || 0

        stage.addChild(this.sprite)
    }
}
