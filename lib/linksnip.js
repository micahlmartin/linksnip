cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager')



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

    var parse_images = function($) {
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
            if(img.attribs.height >= 50 && img.attribs.width >= 50) {
                images.push(img.attribs.src);
            }
        });

        return images;
    };

    var parse_content = function($) {
        return {
            "title": parse_title($),
            "description": parse_description($),
            "images": parse_images($)
        }
    };

    request({
        "url": url,
        "headers": {
            "User-Agent": "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36"
        }
        }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log(response)
            content = parse_content(cheerio.load(body));
            callback({
                "url": response.request.uri.href,
                "title": content.title,
                "description": content.description,
                "images": content.images
            });
        } else {
            console.log(error)
            console.log(response)
            console.log(body)
            callback()
        }
    })
}