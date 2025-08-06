// 代码生成时间: 2025-08-06 19:41:50
$(document).ready(function() {

    // Function to parse log files
    function parseLogFile(logContent) {
        // Define regular expressions for different types of log entries
        const errorRegex = /ERROR: (.*)/;
        const infoRegex = /INFO: (.*)/;
        const warningRegex = /WARNING: (.*)/;

        // Split the log content into lines
        const lines = logContent.split('
');

        // Initialize an object to hold the parsed log data
        const parsedData = {
            errors: [],
            infos: [],
            warnings: []
        };

        // Iterate over each line in the log content
        lines.forEach(function(line) {
            // Check for error logs
            const errorMatch = line.match(errorRegex);
            if (errorMatch) {
                parsedData.errors.push(errorMatch[1]);
            }

            // Check for info logs
            const infoMatch = line.match(infoRegex);
            if (infoMatch) {
                parsedData.infos.push(infoMatch[1]);
            }

            // Check for warning logs
            const warningMatch = line.match(warningRegex);
            if (warningMatch) {
                parsedData.warnings.push(warningMatch[1]);
            }
        });

        // Return the parsed data
        return parsedData;
    }

    // Function to display parsed log data
    function displayParsedData(parsedData) {
        // Display errors
        $('#errors').empty();
        if (parsedData.errors.length > 0) {
            parsedData.errors.forEach(function(error) {
                $('#errors').append($('<p>').text('Error: ' + error));
            });
        } else {
            $('#errors').append($('<p>').text('No errors found.'));
        }

        // Display infos
        $('#infos').empty();
        if (parsedData.infos.length > 0) {
            parsedData.infos.forEach(function(info) {
                $('#infos').append($('<p>').text('Info: ' + info));
            });
        } else {
            $('#infos').append($('<p>').text('No info found.'));
        }

        // Display warnings
        $('#warnings').empty();
        if (parsedData.warnings.length > 0) {
            parsedData.warnings.forEach(function(warning) {
                $('#warnings').append($('<p>').text('Warning: ' + warning));
            });
        } else {
            $('#warnings').append($('<p>').text('No warnings found.'));
        }
    }

    // Event listener for file input change
    $('#logFileInput').on('change', function(event) {
        try {
            // Get the file from the input
            const file = event.target.files[0];
            if (!file) {
                throw new Error('No file selected.');
            }

            // Create a reader to read the file contents
            const reader = new FileReader();

            // Define a callback function to handle the file contents
            reader.onload = function(e) {
                try {
                    // Parse the log file content
                    const logContent = e.target.result;
                    const parsedData = parseLogFile(logContent);

                    // Display the parsed data
                    displayParsedData(parsedData);
                } catch (error) {
                    console.error('Error parsing log file:', error);
                }
            };

            // Read the file contents as text
            reader.readAsText(file);
        } catch (error) {
            console.error('Error reading log file:', error);
        }
    });

});