// // var fs              = require('fs');
// // var crypto          = require('crypto')
// // var http            = require('http')
// // var https           = require('https')
// // var Uri             = require('jsUri')
// // var im              = require('imagemagick')
// // var path            = require('path');
// // var sys             = require('sys');
// // var child_process   = require('child_process');
// // var _               = require('underscore')
// // var async           = require('async')

// // __root_dir = process.cwd()
// // __images_dir = path.join(__root_dir, 'images')

// // // Erase existing downloaded images if there are any
// // var exec = child_process.exec;
// // exec("rm -rf " + __images_dir + "; mkdir " + __images_dir, function (error, stdout, stderr) {
// //     sys.puts(stdout)
// // });

// // var getFilename = function(uri) {
// //         var shasum = crypto.createHash('sha1');
// //         shasum.update(uri)
// //         return path.join(__images_dir, shasum.digest('hex'));
// //     }

// // var download = function(image_uri, filename, callback) {

// //     protocol = image_uri.protocol() == 'https' ? https : http;

// //     protocol.get(image_uri.toString(), function(res){
// //         var imagedata = ''
// //         res.setEncoding('binary')

// //         res.on('data', function(chunk){
// //             imagedata += chunk
// //         })

// //         res.on('end', function(){
// //             fs.writeFile(filename, imagedata, 'binary', function(err){
// //                 if (err) throw err
// //                 callback()
// //             })
// //         })

// //     })
// // };

// // var getInfo = function(filename, callback) {
// //     im.identify(filename, function(err, result){
// //         if(!err) {
// //             callback({
// //                 height: result.height,
// //                 width: result.width,
// //                 format: result.format
// //             })
// //         } else {
// //             callback({})
// //         }
// //     })
// // }

// // var fetchImageInfo = function(image_uri, callback) {
// //     var filename = getFilename(image_uri.toString());
// //     download(image_uri, filename, function() {
// //         getInfo(filename, function(info){
// //             info.url = image_uri.toString()
// //             info.filename = filename
// //             callback(null, info)
// //         })
// //     });
// // }

// // var isValidSize = function(imageInfo) {
// //     return imageInfo.height >= 50 && imageInfo.width >= 50
// // }

// // var getImageUrl = function(document_uri, image_uri) {
// //     uri = new Uri(image_uri);
// //     if(uri.protocol() == "") {
// //         parentUri = new Uri(document_uri)
// //         if(image_uri.substring(0,1) == "/") {
// //             uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + image_uri)
// //         } else {
// //             uri = new Uri(parentUri.protocol() + "://" + parentUri.host() + parentUri.uriParts.directory + image_uri)
// //         }
// //     }
// //     return uri;
// // }

// // module.exports = function(images, document_uri, callback) {
// //     images = Array.isArray(images) ? images : new Array(images)
// //     imageUris = _(images).map(function(image) {
// //         return getImageUrl(document_uri, image);
// //     })
// //     async.map(imageUris, fetchImageInfo, function(err, results) {
// //         filteredResults = _.filter(results, isValidSize)
// //         callback(filteredResults)
// //     })
// // }

// module.exports = function() {

//     titleFinders = [
//         './plugins/ogTitle',
//         './plugins/titleTag',
//     ]

//     descriptionFinders = [
//         './plugins/ogDescription',
//         './plugins/metaDescription',
//     ]

//     imageFinders = [
//         './plugins/image_og'
//         './plugins/image_itemprop',
//         './plugins/link_image_src',
//     ]

//     imageFinderFallback = './plugins/image_body'


// }()



