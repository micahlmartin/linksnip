var fs      = require('fs');
var crypto  = require('crypto')
var http    = require('http')
var https   = require('https')
var Uri     = require('jsUri')
var im      = require('imagemagick')

module.exports = function(image_url, callback) {

    uri = new Uri(image_url);
    protocol = uri.protocol() == 'https' ? https : http;

    // #1 - Download image
    // #2 - Save it to disk based on the sha1 hash of the url (for uniqueness)
    // #3 - Get the size info

    // shasum.update("foo");
    // console.log(shasum.digest('hex'));
    var getFilename = function(uri) {
        var shasum = crypto.createHash('sha1');
        shasum.update(uri)
        return shasum.digest('hex') + ".png";
    }

    protocol.get(image_url, function(res){
        var imagedata = ''
        res.setEncoding('binary')

        res.on('data', function(chunk){
            imagedata += chunk
        })

        res.on('end', function(){
            fs.writeFile(getFilename(image_url), imagedata, 'binary', function(err){
                if (err) throw err
                callback(getFilename(image_url))
            })
        })

    })
}