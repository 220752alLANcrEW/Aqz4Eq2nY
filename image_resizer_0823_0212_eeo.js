// 代码生成时间: 2025-08-23 02:12:11
(function($, window, document) {

    // The ImageResizer constructor
    function ImageResizer(options) {
        this.options = $.extend({}, $.fn.imageResizer.defaults, options);
        this.$images = $(this.options.selector);
        this.init();
    }

    // Default options for the ImageResizer
    $.fn.imageResizer = function(options) {
        return this.each(function() {
            new ImageResizer(options);
        });
    };

    // Set default options for the ImageResizer
    $.fn.imageResizer.defaults = {
        selector: '.resize', // The default CSS selector for images
        maxWidth: 800, // The maximum width for the images
        maxHeight: 600, // The maximum height for the images
        quality: 0.8, // The quality of the resized images
    };

    // Initialization method for the ImageResizer
    ImageResizer.prototype.init = function() {
        this.$images.each($.proxy(function(index, image) {
            var $image = $(image);
            this.resizeImage($image);
        }, this));
    };

    // Resize a single image
    ImageResizer.prototype.resizeImage = function($image) {
        try {
            var img = new Image();
            img.src = $image.attr('src');
            img.onload = $.proxy(function() {
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var ratio = Math.min(
                    this.options.maxWidth / img.width,
                    this.options.maxHeight / img.height
                );
                var width = img.width * ratio;
                var height = img.height * ratio;

                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                var resizedSrc = canvas.toDataURL('image/jpeg', this.options.quality);
                $image.attr('src', resizedSrc);
            }, this);
        } catch (e) {
            console.error('Error resizing image:', e);
        }
    };

}(window.jQuery, window, document));
