var assert  = require('assert')
var ogDescription = require('../lib/plugins/ogDescription')
var cheerio = require('cheerio');


describe('ogDescription', function() {

    it('When og:description tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"
        $ = cheerio.load(html)
        ogDescription($, function(description) {
            assert.equal(null, description);
        })

        done()
    })

    it('When og:description tag exists then returns', function(done){
        html = '<html><head><meta property="og:description" content="this is my description" /></head><body></body></html>'
        $ = cheerio.load(html)
        ogDescription($, function(description) {
            assert.equal("this is my description", description);
        })

        done()
    })
});