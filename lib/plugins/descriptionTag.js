_   = require('underscore')

module.exports = function($) {
    description = null;

    descriptionTag = _($("p")).find(function(tag){
        return tag.children.length == 1 && tag.children[0].type == 'text'
    })

    if(descriptionTag) {
        description = descriptionTag.children[0].data
    }

    return description
}