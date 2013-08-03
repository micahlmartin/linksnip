_   = require('underscore')


module.exports = function($, callback) {
    description = null;

    description_tag = $('head').find('meta[name=description]')

    if(description_tag.length > 0) {
        description = description_tag[0].attribs.content
    }

    callback(description)
}