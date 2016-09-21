/**
 * Landing Animation
 */

import * as PIXI from 'pixi.js'

import Resource from './animation/resources'
import Background from './animation/backgronud'
import Character from './animation/character'

const STAGE_WIDTH = 1280
const STAGE_HEIGHT = 720

export default class LandingAnimation {

    constructor(selector) {
        this.$container = document.querySelector(selector)

        this.renderer = new PIXI.autoDetectRenderer(STAGE_WIDTH, STAGE_HEIGHT)
        this.stage = new PIXI.Container

        this.$container.appendChild(this.renderer.view)

        this._objects = []

        this._lastFrameTime = (new Date()).getTime()
        this._currentFrameTime = (new Date()).getTime()
        this._delta = 0

        Resource.load()
        Resource.onComplete = this.prepareStage.bind(this)
        Resource.onProgress = this.updateLoadingState.bind(this)
    }

    animate() {
        this._lastFrameTime = this._currentFrameTime
        this._currentFrameTime = (new Date()).getTime()
        this._delta = this._currentFrameTime - this._lastFrameTime

        this.renderer.render(this.stage);

        this._objects.forEach(
            (object) => {
                if(object.update) {
                    object.update(this._currentFrameTime, this._delta)
                }
            }
        )

        requestAnimationFrame( () => { this.animate() } )
    }

    prepareStage(loader, resources) {
        this.add(new Background(this.stage, 'background'))
        this.add(new Character(this.stage))
        this.add(new Background(this.stage, 'frontground'))

        this.animate()
    }

    updateLoadingState(loader, resources) {

    }

    add(object) {
        this._objects.push(object)
    }

}
