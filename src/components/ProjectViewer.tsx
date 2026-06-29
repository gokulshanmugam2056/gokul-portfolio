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
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">

      {/* Close Button */}
      <button
        onClick={onClose}
        title="Close"
        className="
          fixed
          top-3
          right-3
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

      {/* Image Area */}
      <div
        className="
          absolute
          inset-x-0
          top-2
          bottom-16
          flex
          items-center
          justify-center
          px-2
        "
      >
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`Project ${imgIndex + 1}`}
            draggable={false}
            className="
              max-w-full
              max-h-full
              object-contain
              select-none
            "
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
            bottom-2
            left-1/2
            -translate-x-1/2
            z-[10000]
            flex
            items-center
            gap-4
            bg-black/60
            backdrop-blur-md
            rounded-full
            px-4
            py-2
          "
        >
          {/* Previous */}
          <button
            onClick={prevImage}
            disabled={imgIndex === 0}
            className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              bg-white/15
              hover:bg-white/30
              border
              border-white/20
              text-white
              transition
              disabled:opacity-30
            "
          >
            <ChevronLeft size={18} />
          </button>

          {/* Counter */}
          <span className="text-white text-sm font-medium w-14 text-center">
            {imgIndex + 1} / {images.length}
          </span>

          {/* Next */}
          <button
            onClick={nextImage}
            disabled={imgIndex === images.length - 1}
            className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              bg-white/15
              hover:bg-white/30
              border
              border-white/20
              text-white
              transition
              disabled:opacity-30
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

    </div>
  );
};

export default ProjectViewer;