var Uri             = require('jsUri');
var crypto          = require('crypto');
var path            = require('path');
var http            = require('http')
var https           = require('https')
var fs              = require('fs');
var im              = require('imagemagick');
var sys             = require('sys');
var child_process   = require('child_process');
var http            = require('http-get')


__root_dir = process.cwd();
__images_dir = path.join(__root_dir, 'images');

(function() {

    // var exec = child_process.exec;
    // exec("rm -rf " + __images_dir + "; mkdir " + __images_dir, function (error, stdout, stderr) {
    //     sys.puts(stdout)
    // });


    function Imager(document_url, image_url, callback) {
        this.document_url = document_url
        this.image_url = image_url

        if(typeof callback === 'function') {
            this.fetch(callback)
        }
    }

    function getImageUri() {
        uri = new Uri(this.image_url);
        if(uri.protocol() == "") {
            parentUri = new Uri(this.document_url)
            if(this.image_url.substring(0,1) == "/") {
                uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + this.image_url)
            } else {
                uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + parentUri.uriParts.directory + this.image_url)
            }
        }
        return uri;
    }

    function download(callback) {
        that = this
        this.filename = getFileName.apply(that)
        protocol = this.image_uri.protocol() == 'https' ? https : http;

        http.get(this.image_uri.toString(), this.filename, function (error, result) {
            if (error) {
                console.error(error);
            }
            callback()
        });
    }

    function getFileName() {
        var shasum = crypto.createHash('sha1');
        shasum.update(this.image_url)
        return path.join(__images_dir, shasum.digest('hex'));
    }

    function getInfo(callback) {
        im.identify(this.filename, function(err, result){
            if(!err) {
                callback({
                    height: result.height,
                    width: result.width,
                    format: result.format
                })
            } else {
                console.error(err)
                callback({})
            }
        })
    }

    Imager.prototype.fetch = function(callback) {
        that = this
        this.image_uri = getImageUri.apply(this)
        console.log("fetching image")
        download.apply(this, [function() {
            console.log("Downloaded")
            getInfo.apply(that, [function(info) {
                console.log("Got info")
                info.url = that.image_uri.toString()
                info.filename = that.filename
                console.log(info)
                callback(info)
            }])
        }])
    }

    module.exports = Imager

})()



