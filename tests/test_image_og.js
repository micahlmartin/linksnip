"use strict";

var assert  = require('assert')
var img = require('../lib/plugins/image_og')
var cheerio = require('cheerio');


describe('img', function() {

    it('When og:image tag does not exist then returns empty array', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal(0, image.length);
        done()
    })

    it('When og:image tag exists then returns', function(done){
        var html = '<html><head><meta property="og:image" content="https://www.google.com/images/srpr/logo4w.png" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal(1, image.length);
        assert.equal("https://www.google.com/images/srpr/logo4w.png", image[0]);
        done()
    })
});
