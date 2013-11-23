cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager');
async   = require('async');

(function() {

    function LinkSnip(url, callback) {

        options = {
            url: url,
            titleFinders: [
                './plugins/ogTitle',
                './plugins/titleTag'
            ],
            descriptionFinders: [
                './plugins/ogDescription',
                './plugins/metaDescription',
                './plugins/descriptionTag'
            ],
            imageFinders: [
                './plugins/image_meta_xlarge',
                './plugins/image_og',
                './plugins/image_itemprop',
                './plugins/image_link_imagesrc',
            ],
            imageFinderFallback: './plugins/image_body',
            imageFilters: [
                './plugins/image_sizeFilter'
            ],
            imageSelectors: [
                './plugins/image_largeSelector'
            ]
        }

        fetch(options, callback);
    }

    function fetch(options, callback) {
        console.log(options.url)
        jar = request.jar();
        request({
            url: options.url,
            headers: {
                "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36"
            },
            jar: jar
        }, function(err, response, body){
            console.log(body)
            if(err) {
                console.error(err);
                callback(err);
                return;
            }
            options.url = response.request.href
            options.$ = cheerio.load(body)
            title = findTitle(options)
            description = findDescription(options)
            fetchImages(options, findImages(options), function(images){

                images = filterImages(options, images)

                callback({
                    url: response.request.href,
                    title: title,
                    description: description,
                    images: images
                })
            })
        })
    }

    function findTitle(options) {
        for(i in options.titleFinders) {
            finder = require(options.titleFinders[i])
            var title = finder(options.$);
            if(title !== null && title.length > 0) {
                return title
            }
        }
    }

    function findDescription(options) {
        for(i in options.descriptionFinders) {
            finder = require(options.descriptionFinders[i])
            var description = finder(options.$);
            if(description !== null && description.length > 0) {
                return description
            }
        }
    }

    function findImages(options) {
        var images = []

        images = _(options.imageFinders).map(function(image_finder){
            finder = require(image_finder)
            return finder(options.$)
        })

        images = _(images).filter(function(image){
            return image !== null
        })

        if(images.length == 0) {
            images = require(options.imageFinderFallback)(options.$)
        }
        return _(images).flatten()
    }

    function filterImages(options, images) {
        filtered_images = []
        _(images).each(function(image) {
            for(i in options.imageFilters) {
                filter = require(options.imageFilters[i])
                if(filter(image)) {
                    filtered_images.push(image)
                    break;
                }
            }
        })

        selected_images = filtered_images
        _(options.imageSelectors).each(function(selector_path){
            selector = require(selector_path)
            results = selector(selected_images)
            if(results.length > 0) {
                selected_images = results
            }
        })

        return selected_images.length > 0 ? selected_images : filtered_images
    }



    function fetchImages(options, images, callback) {
        calls = _(images).map(function(image){
            return function(done) {
                imager(options.url, image, function(image_info) {
                    done(null, image_info)
                })
            }
        })

        //async.parallel has a bug where it sends the same callback
        //multiple times. Do not use
        async.series(calls, function(err, results, third){
            callback(results)
        })
    }

    module.exports = LinkSnip

})()
