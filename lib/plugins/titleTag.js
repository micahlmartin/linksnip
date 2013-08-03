_   = require('underscore')

module.exports = function($, callback) {
    title = null;

    title = $("title").text() || null

    callback(title)
}