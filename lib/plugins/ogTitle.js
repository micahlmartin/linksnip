_   = require('underscore')


module.exports = function($) {
    title = null;

    title_tag = _.find($("head").find('meta'), function(tag) {
        return $(tag).attr('property') == "og:title"
    });

    if(title_tag) {
        title = title_tag.attribs.content
    }

    return title
}