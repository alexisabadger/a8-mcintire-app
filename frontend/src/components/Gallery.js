import React, { useState } from 'react';

const Gallery = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
        <div className="navigation">
            <button onClick={prevImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
        </div>

        <figure class="image-container">
            <figcaption>{images[currentImage].caption}</figcaption>
            <img src={images[currentImage].url} alt={images[currentImage].alt} />
        </figure>

    </div>
  );
};

export default Gallery;
