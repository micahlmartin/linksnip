cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager');
async   = require('async');

(function() {

    function LinkSnip(url, callback) {
        this.url = url
        this.callback = callback
        this.$ = null
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
            './plugins/image_link_imagesrc'
        ]
        this.imageFinderFallback = './plugins/image_body'

        if(typeof callback === 'function') {
            this.fetch(callback);
        }
    }

    function findTitle() {
        for(i in this.titleFinders) {
            finder = require(this.titleFinders[i])
            var title = finder(this.$);
            if(title !== null && title.length > 0) {
                return title
            }
        }
    }

    function findDescription() {
        for(i in this.descriptionFinders) {
            finder = require(this.descriptionFinders[i])
            var description = finder(this.$);
            if(description !== null && description.length > 0) {
                return description
            }
        }
    }

    function findImages() {
        var images = []
        for(i in this.imageFinders) {
            finder = require(this.imageFinders[i])
            image = finder(that.$)
        }
        images = _(this.imageFinders).map(function(image_finder){
            finder = require(image_finder)
            return finder(that.$)
        })
        images = _(images).filter(function(image){
            return image !== null
        })

        if(images.length == 0) {
            images = require(that.imageFinderFallback)(that.$)
        }

        return images
    }

    LinkSnip.prototype.fetch = function(callback) {
        that = this;
        console.log("Fetching website")
        request(this.url, function(err, response, body){
            console.log("Got website")
            that.url = response.request.href
            that.$ = cheerio.load(body)
            title = findTitle.apply(that)
            description = findDescription.apply(that)
            that.fetchImages(findImages.apply(that), function(images){
                callback({
                    title: title,
                    description: description,
                    images: images
                })
            })
        })
    }

    LinkSnip.prototype.fetchImages = function(images, callback) {
        that = this;
        console.log("Fetching images")
        calls = _(images).map(function(image){
            return function(done) {
                new imager(that.url, image, function(image_info) {
                    done(image_info)
                })
            }
        })
        async.parallel(calls, function(results){
            console.log("Image results")
            that.results = results
            callback(results)
        })
    }

    module.exports = LinkSnip

})()
