import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

interface Props {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
  onImageChange?: (index: number) => void;
}

const ProjectViewer = ({
  images,
  initialIndex = 0,
  onClose,
  onImageChange,
}: Props) => {
  const [imgIndex, setImgIndex] = useState(initialIndex);
  useEffect(() => {
  setImgIndex(initialIndex);
}, [initialIndex]);

  // Swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Animation
  const [slideClass, setSlideClass] = useState("");
  const [hintAnimation, setHintAnimation] = useState("");

  // First time mobile hint animation
    useEffect(() => {
    if (window.innerWidth >= 768) return;

    const start = setTimeout(() => {
      // move image slightly left
      setHintAnimation("-translate-x-10");
    }, 700);

    const back = setTimeout(() => {
      // return image to center
      setHintAnimation("translate-x-0");
    }, 1700);

    const end = setTimeout(() => {
      setHintAnimation("");
    }, 2500);

    return () => {
      clearTimeout(start);
      clearTimeout(back);
      clearTimeout(end);
    };
  }, []);
  const nextImage = () => {
    if (imgIndex >= images.length - 1) return;

    setSlideClass("translate-x-10 opacity-0");

    setTimeout(() => {
      const newIndex = imgIndex + 1;

      setImgIndex(newIndex);
      onImageChange?.(newIndex);

      setSlideClass("-translate-x-10 opacity-0");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideClass("");
        });
      });
    }, 140);
  };

  const prevImage = () => {
    if (imgIndex <= 0) return;

    setSlideClass("-translate-x-10 opacity-0");

    setTimeout(() => {
      const newIndex = imgIndex - 1;

      setImgIndex(newIndex);
      onImageChange?.(newIndex);

      setSlideClass("translate-x-10 opacity-0");

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
    touchStartX.current =
      e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLImageElement>
  ) => {
    touchEndX.current =
      e.changedTouches[0].clientX;

    const distance =
      touchStartX.current -
      touchEndX.current;

    if (distance > 50) {
      nextImage();
    }

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

      {/* Desktop View */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center px-4 py-6">

        <button
          onClick={prevImage}
          disabled={imgIndex === 0}
          className="
            absolute
            left-6
            w-10
            h-10
            flex
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

        <img
          src={images[imgIndex]}
          alt={`Project ${imgIndex + 1}`}
          draggable={false}
          className="
            max-w-[90vw]
            max-h-[88vh]
            object-contain
            select-none
          "
        />

        <button
          onClick={nextImage}
          disabled={imgIndex === images.length - 1}
          className="
            absolute
            right-6
            w-10
            h-10
            flex
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
            absolute
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
      </div>

      {/* Mobile View */}
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
          pt-14
          pb-5
        "
      >

        <div className="relative flex justify-center items-center">

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
              transition-all
              duration-[1200ms]
              ease-in-out
              ${slideClass}
              ${hintAnimation}
            `}
          />

          {images.length > 1 && (
            <div
            className="
              absolute
              bottom-5
              left-1/2
              -translate-x-1/2
              pointer-events-none
            "
          ></div>
          )}
        </div>

        {images.length > 1 && (
          <div className="mt-4 text-white text-sm font-medium">
            {imgIndex + 1} / {images.length}
          </div>
        )}
      </div>

    </div>
      );
};

export default ProjectViewer;