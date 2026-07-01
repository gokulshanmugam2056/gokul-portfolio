import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Props {
  images: string[];
  initialIndex?: number; // Opens the same image clicked in project card
  onClose: () => void;
}

const ProjectViewer = ({
  images,
  initialIndex = 0,
  onClose,
}: Props) => {
  const [imgIndex, setImgIndex] = useState(initialIndex);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [slideClass, setSlideClass] = useState("");
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [animateHint, setAnimateHint] = useState(false);

  useEffect(() => {
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
    if (imgIndex >= images.length - 1) return;

    setSlideClass("translate-x-8 opacity-0");

    setTimeout(() => {
      setImgIndex((prev) => prev + 1);

      setSlideClass("-translate-x-8 opacity-0");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideClass("");
        });
      });
    }, 140);
  };

  const prevImage = () => {
    if (imgIndex <= 0) return;

    setSlideClass("-translate-x-8 opacity-0");

    setTimeout(() => {
      setImgIndex((prev) => prev - 1);

      setSlideClass("translate-x-8 opacity-0");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideClass("");
        });
      });
    }, 140);
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

    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
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
          right-6
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

      {/* Image Area (Single Image for Desktop & Mobile) */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          px-3
          pt-14
          pb-10
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
              max-h-[82vh]
              md:max-h-[88vh]
              object-contain
              select-none
              transition-all
              duration-300
              ease-out
              ${slideClass}
            `}
          />
        ) : (
          <div className="text-white text-xl">
            No Images Available
          </div>
        )}

        {/* Mobile Page Counter */}
        {images.length > 1 && (
          <div className="md:hidden mt-4">
            <span className="text-white text-sm font-medium">
              {imgIndex + 1} / {images.length}
            </span>
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
              disabled:cursor-not-allowed
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
              disabled:cursor-not-allowed
            "
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="
              hidden md:block
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
            {/* Swipe Hint (Mobile Only) */}
      {showSwipeHint && images.length > 1 && (
        <div
          className={`
            md:hidden
            fixed
            bottom-12
            left-1/2
            -translate-x-1/2
            z-[10001]
            flex
            items-center
            gap-2
            text-white/80
            text-sm
            pointer-events-none
            transition-all
            duration-700
            ${
              animateHint
                ? "translate-x-6 opacity-100"
                : "translate-x-0 opacity-70"
            }
          `}
        >
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;