"use strict";

var _   = require('underscore')
var S   = require('string')

module.exports = function($) {
    var description = null;

    var description_tag = $('head').find('meta[name=description]')

    if(description_tag.length > 0) {
        description = S(description_tag[0].attribs.content).trim().s
    }

    return description
}
