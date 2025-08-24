import React, { useState, useEffect } from "react";

// Dynamically import all images in assets/images and sort by filename
const imageModules = import.meta.glob("../assets/images/img{1,2,3,4,5}.jpg", { eager: true, import: 'default' });
const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod);

export default function HomeSlideshow() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    if (length === 0) return;
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  if (length === 0) {
    return <div className="w-full h-[680px] flex items-center justify-center bg-gray-200">No images found.</div>;
  }

  return (
      <div className="relative w-full aspect-[16/9] overflow-hidden flex items-center justify-center" style={{ background: '#f8f6f2' }}>
        {/* Images are always 16:9 aspect ratio, centered, and fill container */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
              style={{ background: '#f8f6f2', paddingLeft: '0.4%', paddingRight: '0.4%' }}
            />
          </div>
        ))}
      {/* Slider indicators */}
      {length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {Array.from({ length: Math.min(length, 5) }, (_, i) => {
            // Calculate which indicators to show
            let idx = i;
            if (length > 5) {
              if (current < 2) {
                idx = i;
              } else if (current > length - 3) {
                idx = length - 5 + i;
              } else {
                idx = current - 2 + i;
              }
            }
            if (idx < 0 || idx >= length) return null;
            return (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span
                  className={`block h-2 w-12 rounded bg-white transition-opacity duration-200 ${idx === current ? "opacity-100" : "opacity-40"}`}
                ></span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
