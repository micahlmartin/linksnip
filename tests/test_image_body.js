"use strict";

var assert  = require('assert')
var img = require('../lib/plugins/image_body')
var cheerio = require('cheerio');


describe('img', function() {

    it('When no image tags exist then returns empty array', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var images = img($);
        assert.equal(0, images.length);
        done()
    })

    it('When image tags exists then returns array of image urls', function(done){
        var html = '<html><head><body><img src="logo.png" /><img src="http://google.com/logo.png" /></body></html>'
        var $ = cheerio.load(html)
        var images  =img($)
        assert.equal(images.length, 2)
        assert.equal(images[0], "logo.png")
        assert.equal(images[1], "http://google.com/logo.png")

        done()
    })
});
