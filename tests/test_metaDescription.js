var assert  = require('assert')
var metaDescription = require('../lib/plugins/metaDescription')
var cheerio = require('cheerio');


describe('metaDescription', function() {

    it('When meta description tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"
        $ = cheerio.load(html)
        description = metaDescription($)
        assert.equal(null, description);
        done()
    })

    it('When meta description tag exists then returns', function(done){
        html = '<html><head><meta name="description" content="this is my description" /></head><body></body></html>'
        $ = cheerio.load(html)
        description = metaDescription($)
        assert.equal("this is my description", description);
        done()
    })
});