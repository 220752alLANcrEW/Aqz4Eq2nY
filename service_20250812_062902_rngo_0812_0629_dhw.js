// 代码生成时间: 2025-08-12 06:29:02
 * This program organizes a specified folder by sorting files into subfolders.
 * @version 1.0.0
 * @author Your Name
 */

(function($) {
    "use strict";

    // Configuration object for organizing folders
    const config = {
        sourceFolder: "./source",
        destinationFolder: "./destination",
        extensions: {
            'images': ['jpg', 'jpeg', 'png', 'gif'],
            'videos': ['mp4', 'avi', 'mov'],
            'documents': ['pdf', 'doc', 'docx', 'txt']
        }
    };

    function isFileExtensionSupported(fileExtension, extensions) {
        // Check if the file's extension is supported
        return extensions.some(ext => ext === fileExtension);
    }

    function createDestinationFolder(name) {
        // Create a destination folder if it doesn't exist
        if (!fs.existsSync(name)) {
            fs.mkdirSync(name, { recursive: true });
        }
    }

    function moveFile(file, destinationFolder) {
        try {
            // Move the file to the destination folder
            fs.renameSync(file, destinationFolder + '/' + path.basename(file));
            console.log(`Moved file ${file} to ${destinationFolder}`);
        } catch (error) {
            // Handle errors during file moving
            console.error(`Failed to move file ${file}: ${error}`);
        }
    }

    function organizeFiles() {
        try {
            const files = fs.readdirSync(config.sourceFolder);

            files.forEach(file => {
                const fileExtension = path.extname(file).slice(1).toLowerCase();

                // Check if the file extension is supported
                if (isFileExtensionSupported(fileExtension, Object.values(config.extensions).flat())) {
                    // Find the corresponding folder for the file extension
                    const folderName = Object.keys(config.extensions).find(key => config.extensions[key].includes(fileExtension));

                    // Create the destination folder if it doesn't exist
                    createDestinationFolder(path.join(config.destinationFolder, folderName));

                    // Move the file to the appropriate folder
                    moveFile(path.join(config.sourceFolder, file), path.join(config.destinationFolder, folderName));
                }
            });

            console.log('Files have been organized successfully.');
        } catch (error) {
            // Handle errors during file organization
            console.error(`An error occurred: ${error}`);
        }
    }

    // Expose organizeFiles function to jQuery for easy access
    $.organizeFiles = organizeFiles;

})(jQuery);

// Usage:
// $.organizeFiles();