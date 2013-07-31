imager = require('../lib/imager')


describe('imager', function(){

    this.timeout(10000);

    it('png test', function(done){
        results = imager("https://www.google.com/images/srpr/logo4w.png", function(results) {
            // assert.equal(results.url, "http://www.google.com/");
            // assert.equal(results.title, "Google");
            // assert.equal(results.description, "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.")
            // assert.equal(results.images.length, 2)
            // assert.equal(results.images[0], '/images/google_favicon_128.png');
            // assert.equal(results.images[1], '/images/srpr/logo4w.png');
            console.log(results)
            done();
        });
    })
})
