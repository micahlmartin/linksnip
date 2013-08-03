var assert  = require('assert')
var ogTitle = require('../lib/plugins/ogTitle')
var cheerio = require('cheerio');


describe('ogTitle', function() {

    it('When og:title tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"
        $ = cheerio.load(html)
        title = ogTitle($)
        assert.equal(null, title);
        done()
    })

    it('When og:title tag exists then returns', function(done){
        html = '<html><head><meta property="og:title" content="this is my title" /></head><body></body></html>'
        $ = cheerio.load(html)
        title = ogTitle($)
        assert.equal("this is my title", title);
        done()
    })
});