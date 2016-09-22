/**
 * RubyConf Taiwan 2016
 *
 * This file will tell webpack which files have to package.
 */

const IMAGES = [
    "landing/bg.jpg",
    "landing/char-body.png",
    "landing/char-hair.png",
    "background/cave_right.svg",
    "background/cave_left.svg",
    "background/cave_top.svg",
    "background/cave_bottom.svg",
    "nav_element.svg",
    "nav_element_hover.svg",
    "social/fb.png",
    "social/twitter.png",
    "social/email.png"
];

IMAGES.forEach((image) => { require(`images\/${image}`) })
