cheerio = require('cheerio');
request = require('request');
_       = require('underscore');
imager  = require('./imager')
async   = require('async')

var parse_title = function($) {
    var title = null;
    head = $('head');

    ogTitleTag = _.find(head.find('meta'), function(tag) { return $(tag).attr('property') == "og:title" });
    if(ogTitleTag) {
        title = ogTitleTag.attribs.content
    } else {
        title = $('title').text().split('|')[0].trim();
    }

    return title;
};

var parse_description = function($) {
    var description = null;
    description = $('head').find('meta[name=description]').attr('content')
    return description;
};

var parse_images = function($, document_url, callback) {
    var images = [];

    head = $('head');

    // var tags = head.find('meta[itemprop=image]')
    // if(tags.length > 0) {
    //     _(tags).each(function(tag) {
    //         images.push($(tag).attr('content'))
    //     })
    // }

    //doesn't like meta[property=og:image]
    $tag = _.find(head.find('meta'), function(tag) { return $(tag).attr('property') == "og:image" });
    if($tag) {
        images.push($tag.attr('content'));
    }

    // tags = head.find("link[rel=image_src]")
    // if(tags.length > 0) {
    //     _(tags).each(function(tag) {
    //         images.push($(tag).attr('href'))
    //     })
    // }

    // if(images.length == 0) {
    //     $('body').find('img').each(function(i, img){
    //         images.push(img.attribs.src);
    //     });
    // }

    imager(images, document_url, function(results) {
        callback(results);
    });

};

var parse_content = function($, document_url, callback) {
    parse_images($, document_url, function(images) {
        callback({
            "title": parse_title($),
            "description": parse_description($),
            "images": images
        })
    })
};

var snipper = function(url, callback) {

    request(url, {
        "headers": { "User-Agent": "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.71 Safari/537.36" }
        },
        function (error, response, body) {
            content = parse_content(cheerio.load(body), url, function(results){
            results.url = response.request.href
            callback(results);
        });
    })
}

module.exports = function(url, callback) {
    return snipper(url, callback)
}