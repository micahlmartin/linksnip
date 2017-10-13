"use strict";

var _   = require('underscore')
var S   = require('string')

module.exports = function($) {
    var title = null;

    var title_tag = _.find($("head").find('meta'), function(tag) {
        return $(tag).attr('property') == "og:title"
    });

    if(title_tag) {
        title = S(title_tag.attribs.content).trim().s
    }

    return title
}
