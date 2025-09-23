// 代码生成时间: 2025-09-23 16:42:37
(function($) {

    // Helper function to swap two elements in an array
    function swapElements(array, index1, index2) {
        if (index1 < 0 || index1 >= array.length || index2 < 0 || index2 >= array.length) {
            throw new Error('Index out of bounds for array swap.');
        }
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    // Bubble Sort algorithm implementation
    function bubbleSort(arr) {
        if (!Array.isArray(arr)) {
            throw new Error('Input must be an array.');
        }

        let swapped;
        do {
            swapped = false;
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    swapElements(arr, i - 1, i);
                    swapped = true;
                }
            }
        } while (swapped);

        return arr;
    }

    // Public API for sorting
    window.SortingAlgorithm = {
        bubbleSort: function(arr) {
            try {
                return bubbleSort(arr);
            } catch (error) {
                console.error('Sorting error:', error.message);
                return null;
            }
        }
    };

})(jQuery);

// Usage Example:
// const sortedArray = SortingAlgorithm.bubbleSort([5, 3, 2, 1, 4]);
// console.log(sortedArray);
