var assert  = require('assert')
var img = require('../lib/plugins/image_og')
var cheerio = require('cheerio');


describe('img', function() {

    it('When og:image tag does not exist then returns null', function(done){
        html = "<html><head></head><body></body></html>"
        $ = cheerio.load(html)
        img($, function(img) {
            assert.equal(null, img);
        })

        done()
    })

    it('When og:image tag exists then returns', function(done){
        html = '<html><head><meta property="og:image" content="https://www.google.com/images/srpr/logo4w.png" /></head><body></body></html>'
        $ = cheerio.load(html)
        img($, function(img) {
            assert.equal("https://www.google.com/images/srpr/logo4w.png", img);
        })

        done()
    })
});