_   = require('underscore')

module.exports = function($) {
    title = null;

    title = $("title").text() || null

    return title
}