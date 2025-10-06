// 代码生成时间: 2025-10-07 01:47:23
(function($) {

    // Define the namespace for the library
    var AnimationEffects = {

        // Apply a fade in animation to the given element
        fadeIn: function(element, duration, callback) {
            if (!element) {
                console.error('Element is undefined or not provided.');
                return;
            }

            $(element).fadeIn(duration, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },

        // Apply a fade out animation to the given element
        fadeOut: function(element, duration, callback) {
            if (!element) {
                console.error('Element is undefined or not provided.');
                return;
            }

            $(element).fadeOut(duration, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },

        // Apply a slide down animation to the given element
        slideDown: function(element, duration, callback) {
            if (!element) {
                console.error('Element is undefined or not provided.');
                return;
            }

            $(element).slideDown(duration, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },

        // Apply a slide up animation to the given element
        slideUp: function(element, duration, callback) {
            if (!element) {
                console.error('Element is undefined or not provided.');
                return;
            }

            $(element).slideUp(duration, function() {
                if (typeof callback === 'function') {
                    callback();
                }
            });
        },

        // Add more animation effects as needed

        // ...
    };

    // Expose the library to the global scope
    window.AnimationEffects = AnimationEffects;

})(jQuery);