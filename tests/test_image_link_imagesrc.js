"use strict";

var assert  = require('assert')
var img = require('../lib/plugins/image_link_imagesrc')
var cheerio = require('cheerio');


describe('image_link_imagesrc', function() {

    it('When link rel="image_src" does not exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal(null, image);
        done()
    })

    it('When link rel="image_src"  tag exists then returns', function(done){
        var html = '<html><head><link rel="image_src" href="https://www.google.com/images/srpr/logo4w.png" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal("https://www.google.com/images/srpr/logo4w.png", image);
        done()
    })
});
