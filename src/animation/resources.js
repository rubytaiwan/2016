/**
 * Landing Animation Resource Loader
 */

import { loader } from 'pixi.js'
import * as assets from 'json!./assets.json'

let _onComplete = null
let _onProgress = null

export default class Resource {

    static set onComplete(cb) {
        _onComplete = cb
    }

    static set onProgress(cb) {
        _onProgress = cb
    }

    static load() {
        for(let assetID in assets.default) {
            loader.add(assetID, assets[assetID])
        }

        loader.load()

        loader.once('complete', Resource._onComplete )
        loader.once('progress', Resource._onProgress )
    }


    static texture(name) {
        return loader.resources[name].texture
    }

    static _onComplete(loader, resources) {
        if(_onComplete) {
            _onComplete(loader, resources)
        }
    }

    static _onProgress(loader, resources) {
        if(_onProgress) {
            _onProgress(loader, resources)
        }
    }
}
