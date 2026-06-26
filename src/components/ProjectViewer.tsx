import { useState } from "react";

interface Props {
  title: string;
  images: string[];
  onClose: () => void;
}

const ProjectViewer = ({
  title,
  images,
  onClose,
}: Props) => {
  const [imgIndex, setImgIndex] = useState(0);

  const nextImage = () => {
    if (imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
    }
  };

  const prevImage = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black flex flex-col p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-white text-2xl font-bold">
          {title}
        </h1>

        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          ✕ Close
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center relative">
        {images.length > 1 && (
          <button
            onClick={prevImage}
            disabled={imgIndex === 0}
            className="absolute left-5 text-white text-6xl disabled:opacity-30"
          >
            ‹
          </button>
        )}

        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`${title} ${imgIndex + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <p className="text-white text-xl">No Images Available</p>
        )}

        {images.length > 1 && (
          <button
            onClick={nextImage}
            disabled={imgIndex === images.length - 1}
            className="absolute right-5 text-white text-6xl disabled:opacity-30"
          >
            ›
          </button>
        )}
      </div>

      {/* Counter */}
      {images.length > 0 && (
        <div className="text-center text-white mt-4">
          {imgIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;