import { useState, useRef, useEffect } from "react";
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

  // Mobile swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Swipe hint animation
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [animateHint, setAnimateHint] = useState(false);

  useEffect(() => {
    // Desktop doesn't need swipe hint
    if (window.innerWidth >= 768) return;

    const start = setTimeout(() => {
      setAnimateHint(true);
    }, 500);

    const stop = setTimeout(() => {
      setAnimateHint(false);
      setShowSwipeHint(false);
    }, 2600);

    return () => {
      clearTimeout(start);
      clearTimeout(stop);
    };
  }, []);

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

  const handleTouchStart = (
    e: React.TouchEvent<HTMLImageElement>
  ) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLImageElement>
  ) => {
    touchEndX.current = e.changedTouches[0].clientX;

    const distance =
      touchStartX.current - touchEndX.current;

    // Swipe Left -> Next
    if (distance > 50) {
      nextImage();
    }

    // Swipe Right -> Previous
    if (distance < -50) {
      prevImage();
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
          top-2
          right-4
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

      {/* ================= Desktop View ================= */}
      <div
        className="
          hidden
          md:flex
          absolute
          inset-0
          items-center
          justify-center
          px-3
          pt-12
          pb-12
        "
      >
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`Project ${imgIndex + 1}`}
            draggable={false}
            className="
              max-w-[97vw]
              max-h-[90vh]
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

      {/* Desktop Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            disabled={imgIndex === 0}
            className="
              hidden md:flex
              fixed
              left-6
              top-1/2
              -translate-y-1/2
              z-[10000]
              w-10
              h-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/10
              hover:bg-white/20
              text-white
              transition
              disabled:opacity-30
            "
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextImage}
            disabled={imgIndex === images.length - 1}
            className="
              hidden md:flex
              fixed
              right-6
              top-1/2
              -translate-y-1/2
              z-[10000]
              w-10
              h-10
              items-center
              justify-center
              rounded-full
              border
              border-white/40
              bg-white/10
              hover:bg-white/20
              text-white
              transition
              disabled:opacity-30
            "
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="
              hidden
              md:block
              fixed
              bottom-3
              left-1/2
              -translate-x-1/2
              text-white
              text-sm
              font-medium
            "
          >
            {imgIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* ================= Mobile View ================= */}
      <div
        className="
          md:hidden
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          px-3
          pt-12
          pb-8
        "
      >
        {images.length > 0 ? (
          <img
            src={images[imgIndex]}
            alt={`Project ${imgIndex + 1}`}
            draggable={false}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className={`
              max-w-[97vw]
              max-h-[78vh]
              object-contain
              select-none
              transition-transform
              duration-700
              ${animateHint ? "animate-swipeHint" : ""}
            `}
          />
        ) : (
          <div className="text-white text-xl">
            No Images Available
          </div>
        )}

        {images.length > 1 && (
          <>
            <div className="mt-4 text-white text-sm font-medium">
              {imgIndex + 1} / {images.length}
            </div>

            
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectViewer;