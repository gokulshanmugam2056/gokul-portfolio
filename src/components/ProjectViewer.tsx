import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Props {
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
      setImgIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (imgIndex > 0) {
      setImgIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black">

      {/* Close Button */}
      <button
        onClick={onClose}
        title="Close"
        className="fixed top-5 right-5 z-[10000] bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-xl transition"
      >
        <X size={18} />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={prevImage}
          disabled={imgIndex === 0}
          className="
            fixed
            left-6
            top-1/2
            -translate-y-1/2
            z-[10000]
            bg-white/20
            hover:bg-white/40
            backdrop-blur-sm
            border
            border-white/30
            text-white
            rounded-full
            p-3
            transition
            disabled:opacity-25
            disabled:cursor-not-allowed
          "
        >
          <ChevronLeft size={38} strokeWidth={2.5} />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={nextImage}
          disabled={imgIndex === images.length - 1}
          className="
            fixed
            right-6
            top-1/2
            -translate-y-1/2
            z-[10000]
            bg-white/20
            hover:bg-white/40
            backdrop-blur-sm
            border
            border-white/30
            text-white
            rounded-full
            p-3
            transition
            disabled:opacity-25
            disabled:cursor-not-allowed
          "
        >
          <ChevronRight size={38} strokeWidth={2.5} />
        </button>
      )}

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center px-24 py-16">
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`Project ${imgIndex + 1}`}
            className="
              max-w-full
              max-h-full
              object-contain
              rounded-lg
              shadow-2xl
              select-none
            "
          />
        ) : (
          <div className="text-white text-xl">
            No Images Available
          </div>
        )}
      </div>

      {/* Counter */}
      {images.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] bg-black/60 px-5 py-2 rounded-full text-white text-sm backdrop-blur">
          {imgIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;