import React from "react";

import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';
import HomeSlideshow from "../components/HomeSlideshow";

export default function Home() {
  return (
    <main className="bg-[#f8f6f2] min-h-screen">
  <div className="max-w-full mx-auto flex flex-col items-center justify-center">
        {/* Slideshow */}
        <div className="w-full">
          <HomeSlideshow />
        </div>
        {/* Text container below slideshow */}
        <div className="w-full flex flex-col items-center justify-center px-8 pt-12">
          <h2 className="text-[3rem] leading-none font-serif text-[#6e2c1c] font-normal mb-2 text-center">Designing</h2>
          <span className="text-2xl font-serif text-[#6e2c1c] text-center">&amp; delivering fully finished spaces that are both inspiring and
          distinctly yours.</span>
        </div>
  </div>

  {/* Our Work Section */}
  <section className="w-full max-w-6xl mx-auto mt-24 px-8">
        <h2 className="text-[2.5rem] font-serif text-[#6e2c1c] mb-8">Our Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 justify-between">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg group relative">
              <img
                src={img6}
                alt="abc"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-center bg-gradient-to-t from-[#6e2c1c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <div className="p-6 text-white text-lg font-serif">This is a beautiful living room with modern design elements.</div>
              </div>
            </div>
            <span className="mt-4 text-xl font-serif text-[#6e2c1c] w-full text-left">abc</span>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg group relative">
              <img
                src={img7}
                alt="xyz"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-center bg-gradient-to-t from-[#6e2c1c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <div className="p-6 text-white text-lg font-serif">A minimalist interior with warm lighting and cozy atmosphere.</div>
              </div>
            </div>
            <span className="mt-4 text-xl font-serif text-[#6e2c1c] w-full text-left">xyz</span>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg group relative">
              <img
                src={img8}
                alt="123"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
              />
              {/* Overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end justify-center bg-gradient-to-t from-[#6e2c1c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
                <div className="p-6 text-white text-lg font-serif">Elegant dining space with natural textures and soft colors.</div>
              </div>
            </div>
            <span className="mt-4 text-xl font-serif text-[#6e2c1c] w-full text-left">123</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-full max-w-5xl mx-auto mt-20 px-4 pb-16">
        <div className="bg-[#e7e7e2] rounded-[48px] flex flex-col md:flex-row items-center justify-start p-8 md:p-12 gap-8 md:gap-16">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={img9}
              alt="About Us"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full"
            />
          </div>
          {/* Text and Button */}
          <div className="flex flex-col justify-center items-start max-w-xl">
            <p className="text-[#6e2c1c] text-base md:text-lg font-serif mb-8 leading-relaxed">
              We&apos;re an interior design studio based in Hyderabad, working on fully finished, end-to-end homes and spaces. Our focus is on understanding each client&apos;s lifestyle and preferences, then designing and executing every element with precision.
            </p>
            <button className="bg-[#6e2c1c] text-white font-serif px-8 py-3 rounded-full text-base md:text-lg shadow hover:bg-[#a34c3a] transition-colors duration-200">
              More About us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
