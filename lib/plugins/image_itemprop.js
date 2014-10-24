"use strict";

var _   = require('underscore')


module.exports = function($) {
    var image = null;

    var image_tag = $('head').find('meta[itemprop=image]')

    if(image_tag.length > 0) {
        image = image_tag[0].attribs.content
    }

    return image
}
