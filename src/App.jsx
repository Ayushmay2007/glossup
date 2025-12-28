import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "./commonComponent/Header";
import Footer from "./commonComponent/Footer";

// ====== Image Imports ======
import Img0 from "./assets/images/img-0.jpeg";
import Img1 from "./assets/images/img-1.jpg";
import Img2 from "./assets/images/img-2.jpg";
import Img3 from "./assets/images/img-3.jpeg";
import Img4 from "./assets/images/img-4.jpeg";
import Img5 from "./assets/images/img-5.jpeg";
import Img6 from "./assets/images/img-6.jpeg";
import Img7 from "./assets/images/img-7.jpeg";
import Img8 from "./assets/images/img-8.jpeg";
import Img9 from "./assets/images/img-9.jpeg";



// ====== Product Data ======
const products = [
  {
    name: "Minimal Elegance",
    price: 499,
    desc: "Soft nude and blush tones with subtle detailing.",
    image: Img0,
  },
  {
    name: "Gold Accent Glam",
    price: 599,
    desc: "Elegant nail art with delicate gold foil accents.",
    image: Img3,
  },
  {
    name: "Bridal Luxe Art",
    price: 399,
    desc: "Detailed bridal nail art for weddings and engagements.",
    image: Img4,
  },
  {
    name: "Classic Pink Finish",
    price: 499,
    desc: "Timeless pink shades with a glossy finish.",
    image: Img5,
  },
  {
    name: "Soft Glam Nails",
    price: 399,
    desc: "Light shimmer and clean designs for everyday wear.",
    image: Img6,
  },
  {
    name: "Premium Party Nails",
    price: 799,
    desc: "Bold designs with stones and artistic detailing.",
    image: Img7,
  },
  {
    name: "Luxury Statement Nails",
    price: 999,
    desc: "High-end nail art with premium finishes.",
    image: Img8,
  },
  {
    name: "Designer Nail Art",
    price: 899,
    desc: "Custom-designed nail art with intricate details.",
    image: Img9,
  },
];

// ====== Icon Section ======
import {
  FaHandSparkles,
  FaPaintBrush,
  FaSpa,
  FaPumpSoap,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHandSparkles className="text-5xl text-[#B08A52] mb-4" />,
    title: "Nail Care",
    desc: "Professional care to keep your nails healthy and beautiful.",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-[#B08A52] mb-4" />,
    title: "Nail Art",
    desc: "Trendy and creative nail designs tailored to your style.",
  },
  {
    icon: <FaSpa className="text-5xl text-[#B08A52] mb-4" />,
    title: "Add-Ons",
    desc: "Relaxing add-ons for a complete luxury experience.",
  },
  {
    icon: <FaPumpSoap className="text-5xl text-[#B08A52] mb-4" />,
    title: "Treatments",
    desc: "Nourishing treatments to strengthen and restore nails.",
  },
];

function App() {

  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ===================== Hero Section ===================== */}
      <section className="relative w-full bg-gradient-to-br from-[#F8F4EC] via-[#EDE4D3] to-[#E1D4BA] py-20 md:py-28 flex justify-center overflow-hidden">
        <div className="absolute top-[-100px] right-[-150px] w-[400px] h-[400px] bg-[#D9C6A0]/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-150px] left-[-120px] w-[380px] h-[380px] bg-[#B08A52]/20 blur-[100px] rounded-full"></div>

        <div className="w-full max-w-[1400px] grid lg:grid-cols-[55%_45%] md:grid-cols-2 grid-cols-1 gap-14 items-center px-6 md:px-10 relative z-10">
          {/* ===== Left Content ===== */}
          <div className="flex flex-col gap-7 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2E2E2E] leading-tight tracking-tight">
              Discover{" "}
              <span className="italic text-[#B08A52] drop-shadow-sm">
                Timeless
              </span>{" "}
              Elegance <br className="hidden md:block" /> in Every Detail
            </h1>

            <p className="text-[#5F564B] text-base md:text-lg leading-relaxed max-w-[520px] mx-auto md:mx-0">
              Where sophistication meets simplicity. Experience furniture and
              decor that blend comfort, craftsmanship, and character — curated
              for spaces that tell your story.
            </p>

            <div className="flex justify-center md:justify-start gap-4 mt-2">

              <button className="cursor-pointer px-8 py-3 bg-[#2E2E2E] text-white rounded-full text-base md:text-lg font-medium shadow-md hover:bg-[#5F564B] hover:scale-105 transition-all duration-300">
                Explore Now
              </button>

              <button className="cursor-pointer px-8 py-3 border border-[#B08A52] text-[#B08A52] rounded-full text-base md:text-lg font-medium hover:bg-[#B08A52] hover:text-white hover:scale-105 transition-all duration-300">
                View Collection
              </button>

            </div>

          </div>

          {/* ===== Right Image ===== */}

          <div className="relative flex justify-center items-center mt-10 md:mt-0">

            <div className="absolute w-[440px] h-[440px] bg-[#E2D1A5]/50 blur-3xl rounded-full animate-pulse"></div>

            <div className="relative z-10 rounded-[40%_10%_40%_10%] overflow-hidden shadow-2xl hover:scale-[1.04] transition-transform duration-500">
              <img
                src={Img1}
                alt="Elegant Design"
                className="w-[340px] sm:w-[400px] md:w-[460px] h-[400px] md:h-[480px] object-cover"
              />
            </div>

            <div className="absolute z-20 top-[-60px] right-[40px] md:right-[70px] bg-white/70 backdrop-blur-md p-2 rounded-full shadow-lg hover:scale-105 transition-all duration-500">
              <img
                src={Img2}
                alt="Accent Decor"
                className="w-[130px] sm:w-[150px] md:w-[170px] h-[130px] sm:h-[150px] md:h-[170px] object-cover rounded-full"
              />
            </div>

            <div className="absolute bottom-0 w-full h-[140px] bg-gradient-to-t from-[#EDE4D3] via-transparent to-transparent"></div>

          </div>

        </div>

      </section>

      {/* ===================== Product Section ===================== */}

      <section className="w-full bg-[#EDE4D3] py-20 flex justify-center">

        <div className="w-full max-w-[1350px] px-6 md:px-10">

          <div className="text-center mb-14">

            <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-3">
              Our <span className="text-[#B08A52] italic">Featured</span>{" "}
              Collection
            </h2>

            <p className="text-[#5A5248] text-base md:text-lg max-w-[650px] mx-auto leading-relaxed">
              Every set is more than just nail art — it’s a statement. Explore our handcrafted designs made to inspire, empower, and bring beauty to your everyday look.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-x-auto snap-x sm:overflow-visible pb-4 scroll-smooth">

            {products.map((item, i) => (

              <div
                key={i}
                className="group bg-[#F6EFE1] rounded-2xl shadow-lg overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 snap-center"
              >

                <div className="relative w-full h-[300px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                </div>

                <div className="p-5 flex flex-col gap-2">

                  <h3 className="text-lg font-semibold text-[#2E2E2E] tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-[#6A6258] text-sm">
                    Fine ceramic decor piece
                  </p>

                  <div className="flex justify-between items-center mt-3">

                    <span className="text-[#B08A52] font-semibold text-lg">
                      ₹{item.price}
                    </span>

                    <button
                    onClick={() => navigate("/parsons")}
                      className=" cursor-pointer px-4 py-2 bg-[#2E2E2E] text-white rounded-full text-sm font-medium hover:bg-[#3C3C3C] transition-all duration-300">
                      View
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <button className=" cursor-pointer px-10 py-3 bg-[#2E2E2E] text-white rounded-full text-lg font-semibold hover:bg-[#3C3C3C] transition-all duration-300 shadow-md">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ===================== Services Section ===================== */}
      <section className="w-full bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#2E2E2E] mb-12">
            Our <span className="text-[#B08A52] italic">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#F8F4EC] shadow-md hover:shadow-lg transition duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#5A5248] text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;            