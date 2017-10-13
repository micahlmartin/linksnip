"use strict";

var assert  = require('assert')
var ogDescription = require('../lib/plugins/ogDescription')
var cheerio = require('cheerio');


describe('ogDescription', function() {

    it('When og:description tag does not exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var description = ogDescription($)
        assert.equal(null, description);
        done()
    })

    it('When og:description tag exists then returns', function(done){
        var html = '<html><head><meta property="og:description" content="this is my description" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var description = ogDescription($)
        assert.equal("this is my description", description);
        done()
    })
});
