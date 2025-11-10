import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "./commonCamponent/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// ==== Product Images ====
import Img1 from "./assets/images/img-1.jpg";
import Img2 from "./assets/images/img-2.jpg";
import Img3 from "./assets/images/img-3.jpeg";
import { EcommContext } from "./context/glossupcontext";
import Header from "./commonCamponent/Header";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: "Prason Luxury Nail Kit 💅",
    desc: "A complete premium set with tools, polishes & design accessories for salon-quality nails at home.",
    price: 899,
    oldPrice: 1299,
    img: Img1,
  },
  {
    id: 2,
    name: "Prason Studio Gel Kit 💎",
    desc: "Professional gel kit with UV lamp and top-quality brushes for long-lasting shine.",
    price: 1099,
    oldPrice: 1599,
    img: Img2,
  },
  {
    id: 3,
    name: "Prason Classic Collection 🌸",
    desc: "Soft tones & smooth textures for everyday elegance with premium brushes.",
    price: 699,
    oldPrice: 999,
    img: Img3,
  },
];

export default function Prason() {
  const { addToCart } = useContext(EcommContext);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    cardRefs.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);

    toast.success(`Successfully added to cart 🛍️`, {
      duration: 2500,
      position: "top-right",
      style: {
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid #E3D5B8",
        borderRadius: "14px",
        color: "#2E2E2E",
        fontWeight: 500,
        fontSize: "15px",
        boxShadow: "0 8px 20px rgba(176,138,82,0.2)",
      },
      icon: "✅",
    });
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    navigate("/cart"); // ✅ redirects to cart or checkout
  };

  return (
    <>
      <Header />

      <Toaster
        toastOptions={{
          success: {
            style: {
              border: "1px solid #E3D5B8",
              background: "#F8F4EC",
              color: "#2E2E2E",
              borderRadius: "14px",
              fontWeight: "500",
              boxShadow: "0 4px 20px rgba(176,138,82,0.25)",
            },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-[#F9F6EF] via-[#F4EAD5] to-[#EAD9B8] py-24 text-center overflow-hidden">
        <div className="absolute w-[250px] h-[250px] bg-[#B08A52]/20 blur-3xl rounded-full top-10 left-16"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#E5C07B]/20 blur-3xl rounded-full bottom-10 right-16"></div>

        <h1 className="relative z-10 text-5xl md:text-6xl font-semibold text-[#2E2E2E] mb-4">
          Luxury <span className="text-[#B08A52] italic">Nail Art</span> Kits
        </h1>

        <p className="relative z-10 text-[#5A5248] max-w-2xl mx-auto text-lg">
          Handpicked premium nail kits that define beauty, precision, and art —
          crafted for every nail artist.
        </p>
      </section>

      {/* Product Showcase */}
      <section className="bg-[#F8F4EC] py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {products.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } items-center gap-10 bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-[#E3D5B8] hover:shadow-[0_10px_50px_rgba(176,138,82,0.2)] transition-all duration-500`}
            >
              <div className="md:w-1/2 w-full overflow-hidden rounded-3xl">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="md:w-1/2 w-full px-8 py-10 text-center md:text-left">
                <h3 className="text-3xl font-semibold text-[#2E2E2E] mb-3">
                  {item.name}
                </h3>
                <p className="text-[#5A5248] mb-6">{item.desc}</p>
                <div className="mb-6">
                  <span className="text-[#B08A52] text-2xl font-semibold">
                    ₹{item.price}
                  </span>
                  <span className="text-gray-400 line-through ml-3">
                    ₹{item.oldPrice}
                  </span>
                </div>

                <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-[#B08A52] hover:bg-[#9A753F] cursor-pointer text-white px-8 py-3 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>

                  <button
                    onClick={() => handleBuyNow(item)}
                    className="px-8 py-3 bg-[#2E2E2E] cursor-pointer text-white rounded-full text-base md:text-lg font-medium shadow-md hover:bg-[#5F564B] transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
