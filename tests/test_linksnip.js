"use strict";

var assert = require("assert")
var linksnip = require('../lib/linksnip')
var request = require('request')
var fs = require('fs')



describe('linksnip', function(){
    this.timeout(1000000)

    it('Google.com test', function(done){
        linksnip("http://google.com", function(results){
            assert.equal(results.url, "https://www.google.com/")
            assert.equal(results.title, "Google")
            assert.equal(results.description, "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.")
            assert.equal(results.images.length, 1)
            assert.equal(results.images[0].height, 128)
            assert.equal(results.images[0].width, 128)
            assert.equal(results.images[0].format, 'PNG')
            assert.equal(results.images[0].url, 'https://www.google.com/images/google_favicon_128.png')
            done()
        })
    })

    it('facebook.com test', function(done){
        linksnip("http://facebook.com", function(results){
            assert.equal(results.url, "https://www.facebook.com/")
            assert.equal(results.title, "Welcome to Facebook - Log In, Sign Up or Learn More")
            assert.equal(results.description, "Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.")
            assert.equal(results.images.length, 1)
            assert.equal(results.images[0].height, 325)
            assert.equal(results.images[0].width, 325)
            assert.equal(results.images[0].format, 'PNG')
            assert.equal(results.images[0].url, 'https://www.facebook.com/images/fb_icon_325x325.png')
            done()
        })
    })

    it('huffingtonpost.com article test', function(done){
        linksnip("http://www.huffingtonpost.com/jared-bernstein/bailing-out-detroit_b_3670435.html?utm_hp_ref=business", function(results){
            assert.equal(results.url, "http://www.huffingtonpost.com/jared-bernstein/bailing-out-detroit_b_3670435.html?utm_hp_ref=business")
            assert.equal(results.title, "Bailing Out Detroit?")
            assert.equal(results.description, "I didn&#39;t hear Treasury Secretary Jack Lew on TV yesterday, but I read this morning that he was asked &quot;how come the Obama administration bailed out the banks but isn&#39;t talking about doing so for Detroit?&quot;")
            assert.equal(results.images.length, 1)
            assert.equal(results.images[0].height, 200)
            assert.equal(results.images[0].width, 200)
            assert.equal(results.images[0].format, 'JPEG')
            assert.equal(results.images[0].url, 'http://s.huffpost.com/images/icons/huffpostbigicon.jpg')
            done()
        })
    })

    it('venmo.com test', function(done){
        linksnip("http://venmo.com/micahlmartin", function(results){
            assert.equal(results.url, "https://venmo.com/micahlmartin")
            assert.equal(results.title, "Micah Martin")
            assert.equal(results.description, "Venmoing since Aug 2012.")
            assert.equal(results.images.length, 2)
            assert.equal(results.images[0].height, 100)
            assert.equal(results.images[0].width, 100)
            assert.equal(results.images[0].format, 'PNG')
            assert.equal(results.images[0].url, 'https://venmopics.appspot.com/u/v2/n/ff75af31-8912-4ded-a647-7c5190a3f1e1')
            assert.equal(results.images[1].height, 100)
            assert.equal(results.images[1].width, 100)
            assert.equal(results.images[1].format, 'GIF')
            assert.equal(results.images[1].url, 'https://s3.amazonaws.com/venmo/venmo100x100.jpg')
            done()
        })
    })

    it('NYTimes.com test', function(done){
        linksnip("http://www.nytimes.com/2011/07/19/science/19google.html", function(results){
            assert.equal(results.url, "http://www.nytimes.com/2011/07/19/science/19google.html?_r=0")
            assert.equal(results.title, "American Girls Sweep Google’s First Science Fair")
            assert.equal(results.description, "A 17-year-old from Fort Worth won the $50,000 grand prize at Google’s science fair last week.")
            assert.equal(results.images.length, 1)
            assert.equal(results.images[0].height, 370)
            assert.equal(results.images[0].width, 600)
            assert.equal(results.images[0].format, 'JPEG')
            assert.equal(results.images[0].url, 'http://www.nytimes.com/images/2011/07/19/science/19goog/19goog-articleLarge.jpg')
            done()
        })
    })
})
