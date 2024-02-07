import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";
import PropTypes from "prop-types";

export const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextBtn = () => {
    setImageIndex((index) => {
      if (index == imageUrls.length - 1) return (index = 0);
      return index + 1;
    });
  };

  const prevBtn = () => {
    setImageIndex((index) => {
      if (index == 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const handleClick = (index) => {
    setImageIndex(index);
  }

  return (
    <div className="mx-auto max-h-screen overflow-hidden relative">
      <div className="flex w-full h-full">
        {imageUrls.map((img) => (
          <img
            key={img}
            src={img}
            style={{ translate: `${-100 * imageIndex}%` }}
            className={`w-full h-full flex-shrink-0 flex-grow-0 object-cover trans`}
          />
        ))}
      </div>
      <img
        src={imageUrls[imageIndex]}
        alt={imageUrls[imageIndex]}
        className="w-full h-full flex-shrink-0 flex-grow-0 object-cover block transition-all"
      />
      <button
        className="absolute top-0 bottom-0 left-0 cursor-pointer p-2 transition-all hover:bg-black hover:opacity-70"
        onClick={prevBtn}
      >
        <ArrowBigLeft size={60} color="white" />
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 cursor-pointer p-2 transition-all hover:bg-black hover:opacity-70"
        onClick={nextBtn}
      >
        <ArrowBigRight size={60} color="white" />
      </button>
      <div className="absolute mx-[50%] flex gap-2 bottom-2">
        {imageUrls.map((_, index) => (
          <p key={index} onClick={() => {handleClick(index)}}>
            {index === imageIndex ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-white cursor-pointer"
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-6 h-6 fill-white cursor-pointer"
              >
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
              </svg>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  imageUrls: PropTypes.array.isRequired,
};
