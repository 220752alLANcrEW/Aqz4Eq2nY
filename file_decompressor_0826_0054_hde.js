// 代码生成时间: 2025-08-26 00:54:28
(function($, window, document) {

    // Function to handle file decompression
    function decompressFile(file, format) {
        // Check if the file type is supported
        if (!['zip', 'gzip'].includes(format.toLowerCase())) {
            throw new Error('Unsupported file format');
        }

        // Use the JSZip library to handle ZIP files
        if (format.toLowerCase() === 'zip') {
            JSZip.loadAsync(file)
                .then(function(zip) {
                    zip.forEach(function(relativePath, zipEntry) {
                        zipEntry.async('blob').then(function(content) {
                            // Save the file or handle it as needed
                            saveFile(content, zipEntry.name);
                        });
                    });
                }, function(e) {
                    console.error('Error loading ZIP file:', e);
                });
        }
        // Use the pako library to handle GZIP files
        else if (format.toLowerCase() === 'gzip') {
            const reader = new FileReader();
            reader.onload = function(event) {
                const content = pako.inflate(event.target.result, { to: 'string' });
                // Handle the decompressed content
                handleDecompressedContent(content);
            };
            reader.onerror = function(event) {
                console.error('Error reading GZIP file:', event.target.error);
            };
            reader.readAsArrayBuffer(file);
        }
    }

    // Function to save the file or handle it as needed
    function saveFile(blob, filename) {
        // Create a link to download the file
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        window.URL.revokeObjectURL(url);
    }

    // Function to handle the decompressed content
    function handleDecompressedContent(content) {
        // You can add additional logic to handle the content here
        console.log(content);
    }

    // Expose the decompressFile function to the global scope
    window.decompressFile = decompressFile;

    // Example usage:
    // decompressFile(fileInput.files[0], 'zip');

}(window.jQuery, window, document));