_   = require('underscore')


module.exports = function($, callback) {

    images = []

    _(image_tags = $("img")).each(function(img){
        images.push(img.attribs.src)
    })

    callback(images)
}