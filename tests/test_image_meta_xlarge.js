"use strict";

var assert  = require('assert')
var img = require('../lib/plugins/image_meta_xlarge')
var cheerio = require('cheerio');


describe('xlarge_tag', function() {

    it('When xlarge meta tag does not exist then returns empty array', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal(null, image);
        done()
    })

    it('When xlarge tag exists then returns', function(done){
        var html = '<html><head><meta name="xlarge" content="https://www.google.com/images/srpr/logo4w.png" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var image = img($)
        assert.equal("https://www.google.com/images/srpr/logo4w.png", image);
        done()
    })
});
