"use strict";

var _   = require('underscore')


module.exports = function($) {

    var images = []

    _($("img")).each(function(img){
        images.push(img.attribs.src)
    })

    return images
}
