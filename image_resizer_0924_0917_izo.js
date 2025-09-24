// 代码生成时间: 2025-09-24 09:17:53
 * @returns {void}
 */
function resizeImages(images, newWidth, newHeight) {
  // Loop through each image element
  $(images).each(function(index, image) {
    // Check if the image is valid
    if (!image) {
      console.error('Invalid image at index:', index);
      return;
    }

    // Resize the image
    $(image).width(newWidth);
    $(image).height(newHeight);
  });
}

/**
 * Handles the event when the resize button is clicked
 * @param {Event} event - The event object for the click event
 * @returns {void}
 */
function handleResizeClick(event) {
  event.preventDefault(); // Prevent default form submit behavior

  // Get the new width and height from the input fields
  var newWidth = parseInt($('input[name="newWidth"]').val(), 10);
  var newHeight = parseInt($('input[name="newHeight"]').val(), 10);

  // Validate new width and height
  if (isNaN(newWidth) || isNaN(newHeight) || newWidth <= 0 || newHeight <= 0) {
    alert('Please enter valid width and height values.');
    return;
  }
# 添加错误处理

  // Get all image elements on the page
  var imagesToResize = $('img');

  // Call the resize function
  resizeImages(imagesToResize, newWidth, newHeight);
}

$(document).ready(function() {
  // Attach a click event listener to the resize button
# TODO: 优化性能
  $('button#resizeButton').click(handleResizeClick);
});