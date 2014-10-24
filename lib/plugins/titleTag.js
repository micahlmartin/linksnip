"use strict";

var _   = require('underscore')

module.exports = function($) {
    var title = null;

    title = $("title").text() || null

    return title
}
