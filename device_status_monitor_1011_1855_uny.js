// 代码生成时间: 2025-10-11 18:55:26
(function($) {
    'use strict';

    // Constants for endpoint URLs
    const API_ENDPOINT = '/api/device-status';

    /**
     * Fetches the device status from the server and updates the UI.
     */
    function fetchDeviceStatus() {
        $.ajax({
            url: API_ENDPOINT,
            method: 'GET',
            success: function(data) {
                updateUI(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                handleFetchError(jqXHR, textStatus, errorThrown);
            }
        });
    }

    /**
     * Updates the UI with the latest device status.
     *
     * @param {Object} deviceStatus - The device status object.
     */
    function updateUI(deviceStatus) {
        const statusElement = $('#device-status');
        statusElement.text(deviceStatus.status); // Example: 'Online' or 'Offline'
    }

    /**
     * Handles errors that occur during the fetch operation.
     *
     * @param {Object} jqXHR - The jQuery XMLHttpRequest object.
     * @param {String} textStatus - The text status of the error.
     * @param {String} errorThrown - The thrown error message.
     */
    function handleFetchError(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching device status:', textStatus, errorThrown);
        alert('Failed to fetch device status. Please try again later.');
    }

    /**
     * Initializes the device status monitor.
     */
    function init() {
        // Fetch device status immediately on page load
        fetchDeviceStatus();

        // Optionally, set up interval to periodically check the device status
        // For example, every 5 seconds
        setInterval(fetchDeviceStatus, 5000);
    }

    // Expose the init function to be callable from outside this module
    window.deviceStatusMonitor = {
        init: init
    };

    // Automatically initialize the monitor when the document is ready
    $(document).ready(init);
}(window.jQuery));