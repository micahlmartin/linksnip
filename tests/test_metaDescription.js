var assert  = require('assert')
var metaDescription = require('../lib/plugins/metaDescription')
var cheerio = require('cheerio');


describe('ogTitle', function() {

    it('When meta description tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"
        $ = cheerio.load(html)
        metaDescription($, function(title) {
            assert.equal(null, title);
        })

        done()
    })

    it('When meta description tag exists then returns', function(done){
        html = '<html><head><meta name="description" content="this is my description" /></head><body></body></html>'
        $ = cheerio.load(html)
        metaDescription($, function(title) {
            assert.equal("this is my description", title);
        })

        done()
    })
});