/**
 * RubyConf Taiwan 2016
 *
 * This file will tell webpack which files have to package.
 */

const IMAGES = [
    "landing/bg.jpg",
    "landing/char-body.png",
    "landing/char-hair.png",
    "nav_element.svg",
    "nav_element_hovre.svg"
];

IMAGES.forEach((image) => { require(`images\/${image}`) })
