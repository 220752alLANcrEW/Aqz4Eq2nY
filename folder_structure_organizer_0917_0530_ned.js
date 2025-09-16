// 代码生成时间: 2025-09-17 05:30:18
(function($){

  /**
   * Organizes the files in a directory.
   *
   * @param {string} dirPath - The path to the directory to organize.
   * @param {Object} structure - An object representing the folder structure.
   * @param {Function} callback - A function to call after organizing is complete.
   */
  function organizeDirectory(dirPath, structure, callback) {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        if (callback) callback(err);
        return;
      }

      // Create directories based on the structure
      for (let dir in structure) {
        if (!fs.existsSync(path.join(dirPath, dir))) {
          fs.mkdirSync(path.join(dirPath, dir), { recursive: true });
        }
      }

      // Move files into the new directories
      files.forEach(file => {
        let fileExtension = path.extname(file).substring(1).toLowerCase();
        let targetDir = structure[fileExtension] || 'others';
        fs.renameSync(
          path.join(dirPath, file),
          path.join(dirPath, targetDir, file)
        );
      });

      if (callback) callback(null, 'Directory organized successfully.');
    });
  }

  /**
   * Expose the function to be used in the global scope.
   */
  $.organizeDirectory = organizeDirectory;

})(jQuery);

// Example usage:
// $.organizeDirectory('/path/to/directory', {
//   'js': 'JavaScript Files',
//   'css': 'CSS Files',
//   'html': 'HTML Files',
//   'txt': 'Text Files',
//   'default': 'Others'
// }, function(err, message) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(message);
//   }
// });