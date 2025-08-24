// 代码生成时间: 2025-08-25 04:00:31
    $(document).ready(function() {
        // Function to validate URL
        function validateURL(url) {
            // Regular expression to match URL pattern
            const pattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\w\.-]*)[^\s]*$/;
            return pattern.test(url);
        }

        // Function to handle URL validation
        function handleURLValidation() {
            // Get the URL from the input field
            const urlInput = $('#urlInput').val();

            try {
                // Check if the URL is valid
                if (validateURL(urlInput)) {
                    // Show a success message
                    $('#result').text('The URL is valid.').css('color', 'green');
                } else {
                    // Show an error message
                    $('#result').text('The URL is invalid.').css('color', 'red');
                }
            } catch (error) {
                // Handle any errors that occur during validation
                console.error('Error validating URL:', error);
                $('#result').text('An error occurred. Please try again.').css('color', 'red');
            }
        }

        // Attach the validation function to the submit button
        $('#validateButton').click(function(event) {
            event.preventDefault(); // Prevent form submission
            handleURLValidation(); // Call the validation function
        });
    });