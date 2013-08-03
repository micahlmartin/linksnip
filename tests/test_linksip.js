var assert = require("assert")
var linksnip = require('../')

describe('linksnip', function(){
    this.timeout(1000000)
    // it('Google.com test', function(done){
    //     results = linksnip("http://www.google.com", function(results) {
    //         assert.equal(results.url, "http://www.google.com/");
    //         assert.equal(results.title, "Google");
    //         assert.equal(results.description, "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.")
    //         assert.equal(results.images.length, 2)
    //         assert.equal(results.images[0].url, 'http://www.google.com/images/google_favicon_128.png');
    //         assert.equal(results.images[0].height, 128);
    //         assert.equal(results.images[0].width, 128);
    //         assert.equal(results.images[1].url, 'http://www.google.com/images/srpr/logo4w.png');
    //         assert.equal(results.images[1].height, 190);
    //         assert.equal(results.images[1].width, 550);
    //         done();
    //     });
    // })

    // it('facebook.com test', function(done){
    //     results = linksnip("http://facebook.com", function(results) {
    //         // console.log(results)
    //         assert.equal(results.url, "https://www.facebook.com/");
    //         assert.equal(results.title, "Welcome to Facebook - Log In, Sign Up or Learn More");
    //         assert.equal(results.description, "Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.")
    //         assert.equal(results.images.length, 2)
    //         assert.equal(results.images[0].url, 'https://www.facebook.com/images/fb_icon_325x325.png');
    //         assert.equal(results.images[0].height, 325);
    //         assert.equal(results.images[0].width, 325);
    //         done();
    //     });
    // })

    it('huffingtonpost.com article test', function(done){
        results = linksnip("http://www.huffingtonpost.com/jared-bernstein/bailing-out-detroit_b_3670435.html?utm_hp_ref=business", function(results) {
            console.log(results)
            assert.equal(results.url, "http://www.huffingtonpost.com/jared-bernstein/bailing-out-detroit_b_3670435.html?utm_hp_ref=business");
            assert.equal(results.title, "Bailing Out Detroit?");
            // assert.equal(results.description, "Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.")
            // assert.equal(results.images.length, 1)
            // assert.equal(results.images[0], 'https://www.facebook.com/images/fb_icon_325x325.png');
            done();
        });
    })

    // it('msnbc article test', function(done){
    //     results = linksnip("http://www.nbcnews.com/technology/space-all-small-cheap-satellites-may-one-day-do-your-6C10488674", function(results) {
    //         assert.equal(results.url, "http://www.nbcnews.com/technology/space-all-small-cheap-satellites-may-one-day-do-your-6C10488674");
    //         assert.equal(results.title, "Space for all: Small, cheap satellites may one day do your bidding - NBC News.com");
    //         // assert.equal(results.description, "Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.")
    //         // assert.equal(results.images.length, 1)
    //         // assert.equal(results.images[0], 'https://www.facebook.com/images/fb_icon_325x325.png');
    //         done();
    //     });
    // })
})
