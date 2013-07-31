cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager')
async   = require('async')


module.exports = function(url, callback) {

    var parse_title = function($) {
        var title = null;
        title = $('head').find('title').text().split('|')[0].trim();
        return title;
    };

    var parse_description = function($) {
        var description = null;
        description = $('head').find('meta[name=description]').attr('content')
        return description;
    };

    var parse_images = function($, callback) {
        var images = [];

        head = $('head');

        var img = head.find('meta[itemprop=image]').attr('content');
        if(img) {
            images.push(img);
        } else {
            //doesn't like meta[property=og:image]
            og_image = _.find(head.find('meta'), function(tag) {
                return tag.attribs['property'] == "og:image"
            });

            if(og_image) {
              images.push(og_image.attribs.content);
            }
        }

        $('body').find('img').each(function(i, img){
            images.push(img.attribs.src);
        });

        imager(images, function(results) {
            callback(results);
        });

    };

    var parse_content = function($, callback) {
        parse_images($, function(images) {
            return {
                "title": parse_title($),
                "description": parse_description($),
                "images": images
            }
        })
    };

    request({
        "url": url,
        "headers": {
            "User-Agent": "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36"
        }
        }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            content = parse_content(cheerio.load(body), function(results){
                callback(results);
            });
        } else {
            console.log(error)
            console.log(response)
            console.log(body)
            callback()
        }
    })
}