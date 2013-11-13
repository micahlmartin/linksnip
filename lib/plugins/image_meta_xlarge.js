_   = require('underscore')


module.exports = function($) {
    image = null;

    image_tag = $('head').find('meta[name=xlarge]')

    if(image_tag.length > 0) {
        image = image_tag[0].attribs.content
    }

    // seems that most sites use a relative path but it
    // should be scoped to the root of the site
    if(image && image.length > 0 && !image.match(/^(http|https|\/)/))
        image = "/" + image

    return image
}