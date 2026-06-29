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
        className="
          fixed
          top-5
          right-5
          z-[10000]
          bg-red-600
          hover:bg-red-700
          text-white
          rounded-full
          p-2
          shadow-xl
          transition
        "
      >
        <X size={18} />
      </button>

      {/* Image */}
      <div className="w-full h-full flex items-center justify-center px-4 pt-4 pb-24">
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`Project ${imgIndex + 1}`}
            className="
              w-full
              h-full
              max-w-[98vw]
              max-h-[90vh]
              object-contain
              select-none
            "
            draggable={false}
          />
        ) : (
          <div className="text-white text-xl">
            No Images Available
          </div>
        )}
      </div>


      {/* Bottom Navigation */}
      {images.length > 1 && (
        <div
          className="
            fixed
            bottom-4
            left-1/2
            -translate-x-1/2
            z-[10000]
            flex
            items-center
            gap-5
            bg-black/45
            backdrop-blur-md
            px-5
            py-2
            rounded-full
          "
        >

          {/* Previous */}
          <button
            onClick={prevImage}
            disabled={imgIndex === 0}
            className="
              bg-white/20
              hover:bg-white/40
              border
              border-white/30
              text-white
              rounded-full
              p-2
              transition
              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <ChevronLeft size={20} />
          </button>

          {/* Counter */}
          <span className="text-white text-sm font-medium min-w-[55px] text-center">
            {imgIndex + 1} / {images.length}
          </span>

          {/* Next */}
          <button
            onClick={nextImage}
            disabled={imgIndex === images.length - 1}
            className="
              bg-white/20
              hover:bg-white/40
              border
              border-white/30
              text-white
              rounded-full
              p-2
              transition
              disabled:opacity-30
              disabled:cursor-not-allowed
            "
          >
            <ChevronRight size={20} />
          </button>

        </div>
      )}

    </div>
  );
};

export default ProjectViewer;