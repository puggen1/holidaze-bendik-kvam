/**
 *
 * @param {Array} images all the images
 * @param {Number} current the current image targeted
 * @param {Function} navigate the function to navigate to the image
 * @param {Number} size the size of the screen
 * @returns the images to be displayed
 */
const carouselLogic = (images, current, navigate, size) => {
  return images.map((image, index) => {
    let returnImg;
    if (size > 850) {
      if (current >= 3) {
        returnImg =
          (index >= current - 3 && index <= current + 3) ||
          current === index ||
          (current === images.length - 1 && index >= current - 4) ? (
            <img
              key={index}
              id={index}
              onClick={navigate}
              className={index === current ? "active show" : "show"}
              src={image}
              alt="test"
            />
          ) : null;
      } else {
        returnImg = (
          <img
            key={index}
            id={index}
            onClick={navigate}
            className={index === current ? "active show" : "show"}
            src={image}
            alt="test"
          />
        );
      }
    } else if (size <= 850 && size >= 450) {
      if (current >= 2) {
        returnImg =
          (index >= current - 1 && index <= current + 1) ||
          current === index ||
          (current === images.length - 1 && index >= current - 2) ? (
            <img
              key={index}
              id={index}
              onClick={navigate}
              className={index === current ? "active show" : "show"}
              src={image}
              alt="test"
            />
          ) : null;
      } else {
        returnImg = (
          <img
            key={index}
            id={index}
            onClick={navigate}
            className={index === current ? "active show" : "show"}
            src={image}
            alt="test"
          />
        );
      }
    } else if (size < 450) {
      if (current >= 3) {
        returnImg =
          (index >= current - 2 && index <= current + 2) ||
          current === index ||
          (current === images.length - 1 && index >= current - 3) ? (
            <img
              key={index}
              id={index}
              onClick={navigate}
              className={index === current ? "active show" : "show"}
              src={image}
              alt="test"
            />
          ) : null;
      } else {
        returnImg = (
          <img
            key={index}
            id={index}
            onClick={navigate}
            className={index === current ? "active show" : "show"}
            src={image}
            alt="test"
          />
        );
      }
    }
    return returnImg;
  });
};

export default carouselLogic;
