// 代码生成时间: 2025-08-14 01:24:24
(function($) {

    // Define a function to escape HTML entities
    function escapeHTML(text) {
        if (typeof text !== 'string') {
            throw new Error('Input must be a string.');
        }
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    }

    // Expose the function to the jQuery object for easy use
    $.escapeHTML = escapeHTML;

    // Example usage:
    // $('#content').text($.escapeHTML(userInput));

}(jQuery));

/*
 * Note: This is a simple example of XSS protection and should not be
 * relied upon for comprehensive security. For a production environment,
 * consider using more robust solutions such as CSP (Content Security Policy),
 * input validation libraries, and regular security audits.
 */