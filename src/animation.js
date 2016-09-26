/**
 * Landing Animation
 */

import {autoDetectRenderer, Container, BLEND_MODES} from 'pixi.js'

import Resource from './animation/resources'
import Background from './animation/backgronud'
import Character from './animation/character'

const STAGE_WIDTH = 1280;
const STAGE_HEIGHT = 720;

export default class LandingAnimation {

    constructor(selector) {
        let initWidth = document.body.getBoundingClientRect().width
        let initHeight = Math.ceil(initWidth * 9 / 16)

        this.$container = document.querySelector(selector)

        this.renderer = new autoDetectRenderer(initWidth, initHeight, { transparent:  true , antialias: true, autoResize: true })
        this.stage = new Container

        this.stage.scale.x = initWidth / STAGE_WIDTH
        this.stage.scale.y = initHeight / STAGE_HEIGHT

        this.$container.appendChild(this.renderer.view)

        this._objects = []

        this._lastFrameTime = (new Date()).getTime()
        this._currentFrameTime = (new Date()).getTime()
        this._delta = 0

        Resource.load()
        Resource.onComplete = this.prepareStage.bind(this)
        Resource.onProgress = this.updateLoadingState.bind(this)

        window.addEventListener('resize', this.onResize.bind(this))
    }

    onResize() {
        let newWidth = document.body.getBoundingClientRect().width
        let newHeight = Math.ceil(newWidth * 9 / 16)

        this.renderer.resize(newWidth, newHeight)

        this.stage.scale.x = newWidth / STAGE_WIDTH
        this.stage.scale.y = newHeight / STAGE_HEIGHT
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
        // this.add(new Background(this.stage, 'background'))
        this.add(new Character(this.stage))
        this.add(new Background(this.stage, 'frontground'))
        this.add(new Background(this.stage, 'glowing', BLEND_MODES.LUMINOSITY))

        this.animate()
    }

    updateLoadingState(loader, resources) {

    }

    add(object) {
        this._objects.push(object)
    }

}
