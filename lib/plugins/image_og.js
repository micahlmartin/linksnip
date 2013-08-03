_   = require('underscore')


module.exports = function($) {
    image = null;

    image_tag = _.find($("head").find('meta'), function(tag) {
        return $(tag).attr('property') == "og:image"
    });

    if(image_tag) {
        image = image_tag.attribs.content
    }

    return image
}