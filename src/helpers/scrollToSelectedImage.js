const scrollToSelectedImage = (selectedImage) => {
  const newSelectedImage = document.querySelector(`.image[id="${selectedImage}"]`);

  if (newSelectedImage?.parentElement) {
    const targetPosition = (newSelectedImage.clientWidth + 16) * selectedImage;
    const container = newSelectedImage.parentElement;
    const startPosition = container.scrollLeft;
    const distance = targetPosition - startPosition;
    const duration = 300;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const easeInOutCubic = (progress) =>
        progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      container.scrollLeft = startPosition + distance * easeInOutCubic(progress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }
};

export default scrollToSelectedImage;