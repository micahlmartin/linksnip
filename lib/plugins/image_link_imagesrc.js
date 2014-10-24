"use strict";

var _   = require('underscore')


module.exports = function($) {
    var img = null;

    var img_tag = $('head').find('link[rel=image_src]')

    if(img_tag.length > 0) {
        img = img_tag[0].attribs.href
    }

    return img
}
