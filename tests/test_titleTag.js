var assert  = require('assert')
var titleTag = require('../lib/plugins/titleTag')
var cheerio = require('cheerio');


describe('titleTag', function() {

    it('When title tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"

        $ = cheerio.load(html)
        title = titleTag($)
        assert.equal(null, title);
        done()
    })

    it('When title tag exists then returns', function(done){
        html = '<html><head><title>this is my title</title></head><body></body></html>'

        $ = cheerio.load(html)
        title = titleTag($)
        assert.equal("this is my title", title);
        done()
    })
});