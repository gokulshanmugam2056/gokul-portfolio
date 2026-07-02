import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const [slideClass, setSlideClass] = useState("");
  const [hintAnimation, setHintAnimation] = useState("");
  const isChanging = useRef(false);

  useEffect(() => {
    setImgIndex(initialIndex);
  }, [initialIndex]);

  // Lock background Projects page scroll while ProjectViewer is open
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  // First-time mobile swipe hint: move only the image slightly
  useEffect(() => {
    if (window.innerWidth >= 768 || images.length <= 1) return;

    const start = window.setTimeout(() => {
      setHintAnimation("-translate-x-10");
    }, 700);

    const back = window.setTimeout(() => {
      setHintAnimation("translate-x-0");
    }, 1700);

    const end = window.setTimeout(() => {
      setHintAnimation("");
    }, 2500);

    return () => {
      window.clearTimeout(start);
      window.clearTimeout(back);
      window.clearTimeout(end);
    };
  }, [images.length]);

  const changeImage = (newIndex: number, direction: "next" | "prev") => {
    if (
    newIndex < 0 ||
    newIndex >= images.length ||
    isChanging.current
    ) {
    return;
    }

    isChanging.current = true;

    // Desktop: simple black fade while changing image
    if (window.innerWidth >= 768) {
    setSlideClass("opacity-0");


    window.setTimeout(() => {
      setImgIndex(newIndex);
      onImageChange?.(newIndex);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setSlideClass("opacity-100");
          isChanging.current = false;
        });
      });
    }, 180);

    return;


    }

    // Mobile: smooth swipe slide effect
    setSlideClass(
    direction === "next"
    ? "translate-x-10 opacity-0"
    : "-translate-x-10 opacity-0"
    );

    window.setTimeout(() => {
    setImgIndex(newIndex);
    onImageChange?.(newIndex);


    setSlideClass(
      direction === "next"
        ? "-translate-x-10 opacity-0"
        : "translate-x-10 opacity-0"
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSlideClass("");
        isChanging.current = false;
      });
    });


    }, 140);
  };


  const nextImage = () => {
    changeImage(imgIndex + 1, "next");
  };

  const prevImage = () => {
    changeImage(imgIndex - 1, "prev");
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

    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      nextImage();
    }

    if (distance < -50) {
      prevImage();
    }
  };

  if (images.length === 0) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
        <button
          onClick={onClose}
          title="Close"
          className="fixed top-2 right-4 z-[10000] rounded-full bg-red-600 p-2 text-white shadow-xl transition hover:bg-red-700"
        >
          <X size={18} />
        </button>

        <p className="text-xl text-white">No Images Available</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden overscroll-none bg-black">
      {/* Close Button */}
      <button
        onClick={onClose}
        title="Close"
        className="fixed top-2 right-4 z-[10000] rounded-full bg-red-600 p-2 text-white shadow-xl transition hover:bg-red-700"
      >
        <X size={18} />
      </button>

      {/* Desktop View */}
      <div className="absolute inset-0 hidden items-center justify-center px-4 py-6 md:flex">
        {images.length > 1 && (
          <button
            onClick={prevImage}
            disabled={imgIndex === 0}
            className="absolute left-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        {/* Desktop image: no animation */}
        <img
        src={images[imgIndex]}
        alt={`Project ${imgIndex + 1}`}
        draggable={false}
        className={`     max-h-[90vh]
            max-w-[88vw]
            select-none
            object-contain
            transition-opacity
            duration-200
            ease-in-out
            ${slideClass}
          `}
        />


        {images.length > 1 && (
          <button
            onClick={nextImage}
            disabled={imgIndex === images.length - 1}
            className="absolute right-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={24} />
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm font-medium text-white">
            {imgIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Mobile View */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-3 pt-14 pb-5 md:hidden">
        <div className="flex items-center justify-center overflow-hidden">
          <img
src={images[imgIndex]}
alt={`Project ${imgIndex + 1}`}
draggable={false}
onTouchStart={handleTouchStart}
onTouchEnd={handleTouchEnd}
className={`     max-h-[78vh]
    max-w-[97vw]
    select-none
    object-contain
    transition-transform
    duration-[1200ms]
    ease-in-out
    ${hintAnimation}
  `}
/>

        </div>

        {images.length > 1 && (
          <div className="mt-4 text-sm font-medium text-white">
            {imgIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectViewer;