// 代码生成时间: 2025-08-21 02:19:58
 * It includes error handling, documentation, and follows best practices for maintainability and scalability.
 */

(function($, window, document) {

    /**
     * Sorts an array of numbers using the Bubble Sort algorithm.
     *
     * @param {Array} arr - The array of numbers to be sorted.
     * @returns {Array} - The sorted array.
     */
    function bubbleSort(arr) {
        // Error handling: Ensure the input is an array and contains only numbers.
        if (!Array.isArray(arr) || !arr.every(num => typeof num === 'number')) {
            throw new Error('Input must be an array of numbers.');
        }

        let len = arr.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements if they are in the wrong order.
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    /**
     * Attaches a button click event to sort an array displayed on the page.
     *
     * @param {Object} $ - The jQuery object.
     */
    function attachSortButtonEvent($) {
        // Error handling: Ensure jQuery is available.
        if (typeof $ !== 'function') {
            throw new Error('jQuery is not available.');
        }

        $('#sortButton').on('click', function() {
            try {
                // Get the array of numbers from the page.
                let arr = $('#inputArray').val().split(',').map(Number);
                // Sort the array.
                let sortedArray = bubbleSort(arr);
                // Display the sorted array on the page.
                $('#outputArray').text(sortedArray.join(', '));
            } catch (error) {
                // Handle any errors that occur during sorting and display the error message.
                $('#outputArray').text(error.message);
            }
        });
    }

    // Attach the sort button event when the DOM is ready.
    $(document).ready(function() {
        attachSortButtonEvent($);
    });

})(jQuery, window, document);