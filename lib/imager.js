var fs              = require('fs');
var crypto          = require('crypto')
var http            = require('http')
var https           = require('https')
var Uri             = require('jsUri')
var im              = require('imagemagick')
var path            = require('path');
var sys             = require('sys');
var child_process   = require('child_process');
var _               = require('underscore')


__root_dir = process.cwd()
__images_dir = path.join(__root_dir, 'images')

// Erase existing downloaded images if there are any
var exec = child_process.exec;
exec("rm -rf " + __images_dir + "; mkdir " + __images_dir, function (error, stdout, stderr) {
    sys.puts(stdout)
});

var getFilename = function(uri) {
    var shasum = crypto.createHash('sha1');
    shasum.update(uri)
    return path.join(__images_dir, shasum.digest('hex'));
}

var download = function(image_url, filename, callback) {

    uri = new Uri(image_url);
    protocol = uri.protocol() == 'https' ? https : http;

    protocol.get(image_url, function(res){
        var imagedata = ''
        res.setEncoding('binary')

        res.on('data', function(chunk){
            imagedata += chunk
        })

        res.on('end', function(){
            fs.writeFile(filename, imagedata, 'binary', function(err){
                if (err) throw err
                callback()
            })
        })

    })
};

var getInfo = function(image_url, filename, callback) {
    im.identify(filename, function(err, result){
      callback({
        url: image_url,
        filename: filename,
        height: result.height,
        width: result.width,
        format: result.format
      });
    })
}

var fetchImageInfo = function(image_url, callback) {

    var filename = getFilename(image_url);
    download(image_url, filename, function() {
        getInfo(image_url, filename, function(info){
            callback(null, info)
        })
    });

}

var isValidSize = function(imageInfo) {
    return imageInfo.height >= 50 && imageInfo.width >= 50
}

module.exports = function(images, callback) {
    images = Array.isArray(images) ? images : new Array(images)
    async.map(images, fetchImageInfo, function(err, results) {
        filteredResults = _.filter(results, isValidSize)
        console.log(filteredResults)
        callback(filteredResults)
    })
}
