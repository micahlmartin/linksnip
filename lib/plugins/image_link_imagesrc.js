_   = require('underscore')


module.exports = function($) {
    img = null;

    img_tag = $('head').find('link[rel=image_src]')

    if(img_tag.length > 0) {
        img = img_tag[0].attribs.href
    }

    return img
}