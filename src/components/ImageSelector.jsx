// It should receive selectedImage, selectPreviousImage,
// selectNextImage, and totalImages as props
const ImageSelector = ({
  selectedImage,
  selectPreviousImage,
  selectNextImage,
  totalImages,
}) => (
  <div className="image-selector">
    <div className="selected-image-number">
      {/* Create a span element for the current image number */}
      {/* Give it the class "current" */}
      {/* Display the selectedImage + 1 */}
      {/* If there is no selectedImage, display 0 */}
      {/* ... */}
      {/* Create a span element for the total number of images */}
      {/* Give it the class "total" */}
      {/* Display the totalImages */}
      {/* ... */}
    </div>
    <div className="arrows">
      {/* Create a button element for the left arrow */}
      {/* Give it the classes "arrow" and "left-arrow" */}
      {/* Call the selectPreviousImage function on click */}
      {/* Display the text "←" */}
      {/* ... */}
      {/* Create a button element for the right arrow */}
      {/* Give it the classes "arrow" and "right-arrow" */}
      {/* Call the selectNextImage function on click */}
      {/* Display the text "→" */}
      {/* ... */}
    </div>
  </div>
);

export default ImageSelector;
