/**
 * RubyConf Taiwan 2016
 */

import '../index.html.slim'

import './resources'
import '../sass/app.scss';

import initMap from './map.js'
import smoothScroll from './scroll.js'
import Animation from './animation.js'

(function() {
    let setup = function() {
        console.log("Welcome to RubyConf 2016")

        let landing = new Animation("#landing")
        let map = initMap("#map")

        // Schedule Tabs
        $( ".schedule" ).tabs()

        // Smooth Scroll ( true => Auto add "is-active" when scroll )
        smoothScroll('.nav a', true)

        $( "#coc-content" ).click(function() {
					var btn = $(this);

					$( ".coc-content.is-more" ).slideToggle( "slow", function() {
							if ($(this).is(':visible')) {
									btn.text('Less');                
							} else {
									btn.text('More');                
							}
					});
        })

        $( ".super__title" ).delay(1000).animate({
            opacity: 1,
        }, 1000, "easeInOutCubic");
        $( ".super__sub" ).delay(2000).animate({
            opacity: 0.8,
        }, 1000, "easeInOutCubic");
        $( ".register-btn" ).delay(1800).animate({
            opacity: 0.95,
        }, 1000, "easeInQuart");
        $( ".register-btn__mobile" ).delay(2000).animate({
            opacity: 0.9,
        }, 1000, "easeInQuart");
    }

    document.addEventListener('DOMContentLoaded', setup)
}())
