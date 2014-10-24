"use strict";

var assert  = require('assert')
var descriptionTag = require('../lib/plugins/descriptionTag')
var cheerio = require('cheerio');


describe('descriptionTag', function() {

    it('When no matching paragraph tags exist then returns null', function(done){
        var html = "<html><head></head><body></body></html>"

        var $ = cheerio.load(html)
        var description = descriptionTag($)
        assert.equal(null, description);
        done()
    })

    it('When title tag exists then returns', function(done){
        var html = '<html><head><title></title></head><body><p class="test"><span></span></p><p>this is my description</p><p>another tag</p></body></html>'

        var $ = cheerio.load(html)
        var description = descriptionTag($)
        assert.equal("this is my description", description);
        done()
    })
});
