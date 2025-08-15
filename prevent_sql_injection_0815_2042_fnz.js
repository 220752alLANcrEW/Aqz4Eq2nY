// 代码生成时间: 2025-08-15 20:42:56
// Function to escape user input to prevent SQL injection
function escapeInput(input) {
    // Use a regular expression to replace special characters with their escaped versions
    return input.replace(/'/g, "''").replace(/\