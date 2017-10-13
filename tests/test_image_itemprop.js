"use strict";

var assert  = require('assert')
var img = require('../lib/plugins/image_itemprop')
var cheerio = require('cheerio');


describe('image_itemprop', function() {

    it('When meta itemprop image tag does not exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal(null, image);
        done()
    })

    it('When meta itemprop image tag exists then returns', function(done){
        var html = '<html><head><meta itemprop="image" content="https://www.google.com/images/srpr/logo4w.png" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal("https://www.google.com/images/srpr/logo4w.png", image);
        done()
    })
});
