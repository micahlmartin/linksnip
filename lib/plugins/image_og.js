_   = require('underscore')


module.exports = function($) {
    images = [];

    image_tags = _.filter($("head").find('meta'), function(tag) {
        return tag.attribs.property == "og:image"
    });

    if(image_tags.length > 0) {
        _(image_tags).each(function(image) {
            images.push(image.attribs.content)
        })
    }

    return _(images).uniq()
}