"use strict";

var _   = require('underscore')

module.exports = function($) {
    var description = null;

    var descriptionTag = _($("p")).find(function(tag){
        return tag.children.length == 1 && tag.children[0].type == 'text'
    })

    if(descriptionTag) {
        description = descriptionTag.children[0].data
    }

    return description
}
