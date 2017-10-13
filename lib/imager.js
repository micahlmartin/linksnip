"use strict";

var Uri             = require('jsuri');
var crypto          = require('crypto');
var path            = require('path');
var http            = require('http')
var https           = require('https')
var fs              = require('fs');
var im              = require('imagemagick');
var sys             = require('sys');
var child_process   = require('child_process');
var http            = require('http-get')


var __root_dir = process.cwd();
var __images_dir = path.join(__root_dir, 'images');

(function() {

    var exec = child_process.exec;
    exec("rm -rf " + __images_dir + "; mkdir " + __images_dir, function (error, stdout, stderr) {
        sys.puts(stdout)
    });

    function fetch(document_url, image_url, callback) {
        image_uri = getImageUri(document_url, image_url)
        download(image_uri.toString(), function(filename) {
            getInfo(filename, function(info) {
                info.url = image_uri.toString()
                info.filename = filename
                callback(info)
            })
        })
    }

    function getImageUri(document_url, image_url) {
        uri = new Uri(image_url);
        if(uri.protocol() == "") {
            parentUri = new Uri(document_url)
            if(image_url.substring(0,1) == "/") {
                uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + image_url)
            } else {
                uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + parentUri.uriParts.directory + image_url)
            }
        }
        return uri;
    }

    function download(image_url, callback) {
        filename = getFileName(image_url)

        http.get(image_url, filename, function (error, result) {
            if (error) {
                console.error(error);
            }
            callback(filename)
        });
    }

    function getFileName(image_url) {
        var shasum = crypto.createHash('sha1');
        shasum.update(image_url)
        return path.join(__images_dir, shasum.digest('hex'));
    }

    function getInfo(filename, callback) {
        im.identify(filename, function(err, result){
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



    module.exports = fetch

})()



