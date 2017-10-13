"use strict";

var _   = require('underscore')


module.exports = function($) {
    var description = null;

    var description_tag = _.find($("head").find('meta'), function(tag) {
        return $(tag).attr('property') == "og:description"
    });

    if(description_tag) {
        description = description_tag.attribs.content
    }

    return description
}
