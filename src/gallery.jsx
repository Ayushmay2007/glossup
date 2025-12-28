import React from "react";
import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";
import Img1 from "./assets/images/img-1.jpg";
import Img2 from "./assets/images/img-2.jpg";
import Img3 from "./assets/images/img-3.jpeg";
import Img4 from "./assets/images/img-4.jpeg";
import Img5 from "./assets/images/img-5.jpeg";
import Img6 from "./assets/images/img-0.jpeg";


export default function Gallery() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full bg-gradient-to-br from-[#F8F4EC] via-[#EDE4D3] to-[#E1D4BA] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#2E2E2E] mb-4">
            Our <span className="text-[#B08A52] italic">Gallery</span>
          </h1>
          <p className="text-[#5A5248] text-sm md:text-base leading-relaxed">
            Discover our curated collection of handcrafted décor, where each
            piece tells a story of elegance and craftsmanship.
          </p>
        </div>
      </section>

      {/* ===== Gallery Grid ===== */}
      <section className="bg-[#F8F4EC] py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Gallery Image ${i + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-all duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-[#B08A52]/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Call To Action ===== */}
      <section className="bg-gradient-to-br from-[#EDE4D3] to-[#E1D4BA] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-[#2E2E2E] mb-4">
            Want to Style Your Home Like This?
          </h2>
          <p className="text-[#5A5248] mb-6">
            Explore our full collection and bring timeless beauty to your home.
          </p>
          <button >
            <a
              href="https://www.instagram.com/glossup_by_tanishka?igsh=MTFrazE2NWM2d3Nodg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#B08A52] text-white px-6 py-3 rounded-full hover:bg-[#9A753F] transition duration-300"
            >
              Explore Collection
            </a>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
