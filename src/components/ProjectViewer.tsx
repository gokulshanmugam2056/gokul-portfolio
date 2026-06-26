import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Props {
  title: string;
  images: string[];
  onClose: () => void;
}

const ProjectViewer = ({
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
    <div className="fixed inset-0 z-[100] bg-black">

      {/* Close Button */}
      <button
        onClick={onClose}
        title="Close"
        className="fixed top-6 right-6 z-[200] bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition"
      >
        <X size={20} />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          disabled={imgIndex === 0}
          className="fixed left-8 top-1/2 -translate-y-1/2 z-[200] bg-black/70 hover:bg-black text-white p-3 rounded-full disabled:opacity-30 transition"
        >
          <ChevronLeft size={34} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          disabled={imgIndex === images.length - 1}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-[200] bg-black/70 hover:bg-black text-white p-3 rounded-full disabled:opacity-30 transition"
        >
          <ChevronRight size={34} />
        </button>
      )}

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center px-24 py-16">
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt=""
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        ) : (
          <div className="text-white text-xl">
            No Images Available
          </div>
        )}
      </div>

      {/* Counter */}
      {images.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white text-sm">
          {imgIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;