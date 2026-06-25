import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ProjectViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, images } = location.state || {
    title: "Project",
    images: [],
  };

  const [imgIndex, setImgIndex] = useState(0);

  const nextImg = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const prevImg = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col p-4">

      {/* Header */}
      <div className="flex justify-between items-center mb-4">

        <h1 className="text-white text-xl md:text-2xl font-bold">
          {title}
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="
            bg-red-500
            hover:bg-red-600
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          ✕ Close
        </button>

      </div>

      {/* Image Viewer */}
      <div className="flex-1 relative flex items-center justify-center">

        {images.length > 1 && (
          <button
            onClick={prevImg}
            disabled={imgIndex === 0}
            className="
              absolute
              left-5
              text-white
              text-6xl
              z-50
              disabled:opacity-20
            "
          >
            ‹
          </button>
        )}

        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt=""
            className="
              max-w-full
              max-h-full
              object-contain
            "
          />
        ) : (
          <div className="text-white">
            No Images Available
          </div>
        )}

        {images.length > 1 && (
          <button
            onClick={nextImg}
            disabled={imgIndex === images.length - 1}
            className="
              absolute
              right-5
              text-white
              text-6xl
              z-50
              disabled:opacity-20
            "
          >
            ›
          </button>
        )}

      </div>

      {/* Counter */}
      <div className="text-center text-white mt-4">
        {images.length > 0
          ? `${imgIndex + 1} / ${images.length}`
          : "0 / 0"}
      </div>

    </div>
  );
};

export default ProjectViewer;