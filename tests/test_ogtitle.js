"use strict";

var assert  = require('assert')
var ogTitle = require('../lib/plugins/ogTitle')
var cheerio = require('cheerio');


describe('ogTitle', function() {

    it('When og:title tag does not exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var title = ogTitle($)
        assert.equal(null, title);
        done()
    })

    it('When og:title tag exists then returns', function(done){
        var html = '<html><head><meta property="og:title" content="this is my title" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var title = ogTitle($)
        assert.equal("this is my title", title);
        done()
    })
});
