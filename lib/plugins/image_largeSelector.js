module.exports = function(images) {
    return _(images).filter(function(image){
        return image.height >= 200 && image.width >= 200;
    })
}