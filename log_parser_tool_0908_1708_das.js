// 代码生成时间: 2025-09-08 17:08:38
$(document).ready(function() {
  
  // Function to load and parse log file
  function parseLogFile(filePath) {
    try {
      // Read the log file content
      $.ajax({
        url: filePath,
        type: 'GET',
        dataType: 'text',
        success: function(data) {
          // Process the log data
          processLogData(data);
        },
        error: function(error) {
          // Handle any errors during file loading
          console.error('Error loading log file:', error);
        }
      });
    } catch (e) {
      console.error('Error parsing log file:', e);
    }
  }

  // Function to process log data
  function processLogData(logData) {
    try {
      // Split the log data into lines
      const lines = logData.split('
');

      // Create a result object to store parsed data
      const logResults = {};

      // Iterate through each line and parse it
      lines.forEach(function(line) {
        // Check if line is not empty
        if (line.trim() !== '') {
          // Assuming log format: [time] [level] message
          const parts = line.split(' ');

          // Extract time, level, and message from the line
          const time = parts[0];
          const level = parts[1];
          const message = parts.slice(2).join(' ');

          // Add to result object
          if (!logResults[time]) {
            logResults[time] = [];
          }
          logResults[time].push({ level: level, message: message });
        }
      });

      // Display the parsed log data
      displayParsedLog(logResults);
    } catch (e) {
      console.error('Error processing log data:', e);
    }
  }

  // Function to display parsed log data
  function displayParsedLog(logResults) {
    try {
      // Create an HTML table to display the log data
      const table = $('<table></table>');
      const thead = $('<thead></thead>');
      const tbody = $('<tbody></tbody>');

      // Add table headers
      thead.append($('<tr></tr>').append($('<th>Time</th>')).append($('<th>Level</th>')).append($('<th>Message</th>')));
      table.append(thead);

      // Add table body with log data
      Object.keys(logResults).forEach(function(time) {
        logResults[time].forEach(function(logEntry) {
          tbody.append($('<tr></tr>')
            .append($('<td></td>').text(time))
            .append($('<td></td>').text(logEntry.level))
            .append($('<td></td>').text(logEntry.message)));
        });
      });
      table.append(tbody);

      // Append the table to the DOM
      $('#logContainer').append(table);
    } catch (e) {
      console.error('Error displaying parsed log:', e);
    }
  }

  // Example usage
  parseLogFile('path/to/your/logfile.log');

});