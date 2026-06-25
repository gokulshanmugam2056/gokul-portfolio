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

  return (
    <div className="fixed inset-0 bg-black flex flex-col p-4">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white text-xl font-bold">
          {title}
        </h1>

        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          ✕ Close
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center relative">

        {images.length > 1 && (
          <button
            onClick={() => setImgIndex((p) => p - 1)}
            disabled={imgIndex === 0}
            className="absolute left-5 text-white text-6xl"
          >
            ‹
          </button>
        )}

        <img
          src={images[imgIndex]}
          alt=""
          className="max-w-full max-h-full object-contain"
        />

        {images.length > 1 && (
          <button
            onClick={() => setImgIndex((p) => p + 1)}
            disabled={imgIndex === images.length - 1}
            className="absolute right-5 text-white text-6xl"
          >
            ›
          </button>
        )}

      </div>
    </div>
  );
};

export default ProjectViewer;