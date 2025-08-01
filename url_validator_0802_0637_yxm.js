// 代码生成时间: 2025-08-02 06:37:23
$(document).ready(function() {
    // Function to validate URL
    function validateURL(url) {
        // Regular expression for URL validation
        const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
        return urlPattern.test(url);
    }

    // Event listener for form submission
    $('#urlForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        const urlInput = $('#urlInput').val(); // Get the URL from the input field

        if (validateURL(urlInput)) {
            // If URL is valid, show a success message
            $('#result').text('The URL is valid!').css('color', 'green');
        } else {
            // If URL is invalid, show an error message
            $('#result').text('Invalid URL. Please enter a valid URL.').css('color', 'red');
        }
    });
});