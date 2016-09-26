/**
 * RubyConf Taiwan 2016
 */

import '../index.html.slim'

import './resources'
import '../sass/app.scss';

import initMap from './map.js'
import Animation from './animation.js'

(function() {
    let setup = function() {
        console.log("Welcome to RubyConf 2016")

        let landing = new Animation("#landing")
        let map = initMap("#map")
    }

    document.addEventListener('DOMContentLoaded', setup)
}())
