/**
 * RubyConf Taiwan 2016
 */

import './resources'
import '../sass/app.scss';

import Animation from './animation.js'

(function() {
    let setup = function() {
        console.log("Welcome to RubyConf 2016")

        let landing = new Animation("#view")
    }

    document.addEventListener('DOMContentLoaded', setup)
}())
