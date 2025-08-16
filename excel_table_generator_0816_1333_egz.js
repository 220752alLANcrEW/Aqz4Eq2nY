// 代码生成时间: 2025-08-16 13:33:34
 * Features:
 * - Generates a table with specified number of rows and columns
 * - Allows adding, removing rows and columns
 * - Provides error handling for invalid inputs
 *
 */

$(document).ready(function() {

  // Define the initial table structure
  const TABLE_OPTIONS = {
    rows: 5,
    columns: 3
  };

  // Function to generate an Excel-like table
  function generateTable(rows, columns) {
    let table = $('<table>');
    for (let i = 0; i < rows; i++) {
      let row = $('<tr>');
      for (let j = 0; j < columns; j++) {
        let cell = $('<td>').text('Cell ' + (i + 1) + ',' + (j + 1));
        row.append(cell);
      }
      table.append(row);
    }
    return table;
  }

  // Function to add a new row to the table
  function addRow(table) {
    let newRow = $('<tr>');
    for (let i = 0; i < table.find('tr:first').find('td').length; i++) {
      newRow.append($('<td>').text('New Cell ' + (i + 1)));
    }
    table.append(newRow);
  }

  // Function to remove a row from the table
  function removeRow(table) {
    if (table.find('tr').length > 1) {
      table.find('tr:last').remove();
    } else {
      console.error('Error: Cannot remove the last row from the table.');
    }
  }

  // Function to add a new column to the table
  function addColumn(table) {
    table.find('tr').each(function() {
      $(this).append($('<td>').text('New Column'));
    });
  }

  // Function to remove a column from the table
  function removeColumn(table) {
    if (table.find('tr:first').find('td').length > 1) {
      table.find('tr').each(function() {
        $(this).find('td:last').remove();
      });
    } else {
      console.error('Error: Cannot remove the last column from the table.');
    }
  }

  // Initialize the table on document ready
  let table = generateTable(TABLE_OPTIONS.rows, TABLE_OPTIONS.columns);
  $('#table-container').append(table);

  // Event listeners for adding and removing rows and columns
  $('#add-row').on('click', function() {
    addRow(table);
  });

  $('#remove-row').on('click', function() {
    removeRow(table);
  });

  $('#add-column').on('click', function() {
    addColumn(table);
  });

  $('#remove-column').on('click', function() {
    removeColumn(table);
  });

});