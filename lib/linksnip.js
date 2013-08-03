cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager');
async   = require('async');

(function() {

    function LinkSnip(url, callback) {
        this.url = url
        this.callback = callback
        this.titleFinders = [
            './plugins/ogTitle',
            './plugins/titleTag'
        ]
        this.descriptionFinders = [
            './plugins/ogDescription',
            './plugins/metaDescription'
        ]
        this.imageFinders = [
            './plugins/image_og',
            './plugins/image_itemprop',
            './plugins/link_image_src'
        ]
        this.imageFinderFallback = './plugins/image_body'

        if(typeof callback === 'function') {
            this.fetch(callback);
        }
    }

    function findTitle() {
        title = _(this.titleFinders).each(function(finder){
            result = finder()
        })
    }

    LinkSnip.prototype.fetch = function(callback) {
        that = this;
        request(this.url, function(err, request, body){
            that.$ = cheerio.load(body)
            title = that.findTitle
            callback(that.$)
        })
    }

    module.exports = LinkSnip
})()