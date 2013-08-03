_   = require('underscore')


module.exports = function($) {

    images = []

    _($("img")).each(function(img){
        images.push(img.attribs.src)
    })

    return images
}