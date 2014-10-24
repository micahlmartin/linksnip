"use strict";

var assert  = require('assert')
var metaDescription = require('../lib/plugins/metaDescription')
var cheerio = require('cheerio');


describe('metaDescription', function() {

    it('When meta description tag does not exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"
        var $ = cheerio.load(html)
        var description = metaDescription($)
        assert.equal(null, description);
        done()
    })

    it('When meta description tag exists then returns', function(done){
        var html = '<html><head><meta name="description" content="this is my description" /></head><body></body></html>'
        var $ = cheerio.load(html)
        var description = metaDescription($)
        assert.equal("this is my description", description);
        done()
    })
});
