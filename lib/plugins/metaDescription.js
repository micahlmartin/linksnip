_   = require('underscore')


module.exports = function($) {
    description = null;

    description_tag = $('head').find('meta[name=description]')

    if(description_tag.length > 0) {
        description = description_tag[0].attribs.content
    }

    return description
}