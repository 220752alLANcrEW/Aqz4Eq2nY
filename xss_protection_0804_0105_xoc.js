// 代码生成时间: 2025-08-04 01:05:32
(function($) {

    "use strict";

    // A regex pattern to match potentially dangerous characters and tags.
    // This pattern is a starting point and should be expanded to cover more cases as needed.
    var dangerousPattern = /<[^>]*>|[^a-zA-Z0-9 ]/ig;

    // A function to sanitize input by escaping special characters and tags.
    function sanitizeInput(input) {
        if (typeof input !== 'string') {
            throw new Error('Input must be a string.');
        }

        // Replace the dangerous characters and tags with their HTML entities.
        return input.replace(dangerousPattern, function(match) {
            // Escape HTML entities
            return match.replace(/&/g, '&amp;')
                       .replace(/</g, '&lt;')
                       .replace(/>/g, '&gt;')
                       .replace(/\/g, '&#92;')
                       .replace(/