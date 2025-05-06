import LoadingIndicator from "./LoadingIndicator";

// Should receive imagesForCategory and selectedImage as props
const ImagesList = ({ imagesForCategory, selectedImage }) => (
  <div className="images-list">
    {/* If there are no images for the category display a loading indicator */}
    {/* Use the LoadingIndicator component */}
    {/* Place it inside a div with the class "loading-container" */}
    {/* Otherwise, map over the imagesForCategory array */}
    {/* Create a div element for each image */}
    {/* Use the index as the key */}
    {/* Use the index as the id */}
    {/* Give the div the class "image" */}
    {/* If the index is equal to the selectedImage, add the class "selected" */}
    {/* Set the backgroundImage style property to the image's src */}
    {imagesForCategory.length === 0 ? (
      <div className="loading-container">
        <LoadingIndicator />
      </div>
    ) : (
      // eslint-disable-next-line no-unused-vars
      imagesForCategory.map((src, [index,_]) => (
        <div
          key={index}
          id={index}
          className={`image ${index === selectedImage ? "selected" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))
    )}
  </div>
);

export default ImagesList;
