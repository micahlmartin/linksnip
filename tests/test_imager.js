// assert = require('assert')
// imager = require('../lib/imager')


// describe('imager', function(){

//     this.timeout(10000);

//     it('Test full url', function(done){
//         results = imager('https://www.google.com/images/srpr/logo4w.png', 'https://www.google.com', function(results) {
//             assert.equal(1, results.length)
//             assert.equal(results[0].url, 'https://www.google.com/images/srpr/logo4w.png')
//             assert.equal(results[0].height, 190)
//             assert.equal(results[0].width, 550)
//             assert.equal(results[0].format, 'PNG')
//             done();
//         });
//     })

//     it('Test relative url', function(done){
//         results = imager('/images/srpr/logo4w.png', 'https://www.google.com', function(results) {
//             assert.equal(1, results.length)
//             assert.equal(results[0].url, 'https://www.google.com/images/srpr/logo4w.png')
//             assert.equal(results[0].height, 190)
//             assert.equal(results[0].width, 550)
//             assert.equal(results[0].format, 'PNG')
//             done();
//         });
//     })

//     it('Test relative url of current directory', function(done){
//         results = imager('logo4w.png', 'https://www.google.com/images/srpr/whatever.html', function(results) {
//             assert.equal(1, results.length)
//             assert.equal(results[0].url, 'https://www.google.com/images/srpr/logo4w.png')
//             assert.equal(results[0].height, 190)
//             assert.equal(results[0].width, 550)
//             assert.equal(results[0].format, 'PNG')
//             done();
//         });
//     })

//     // it('Test relative url of current directory', function(done){
//     //     results = imager('logo4w.png', 'https://www.google.com/images/srpr/whatever.html', function(results) {
//     //         assert.equal(1, results.length)
//     //         assert.equal(results[0].url, 'https://www.google.com/images/srpr/logo4w.png')
//     //         assert.equal(results[0].height, 190)
//     //         assert.equal(results[0].width, 550)
//     //         assert.equal(results[0].format, 'PNG')
//     //         done();
//     //     });
//     // })


// })
