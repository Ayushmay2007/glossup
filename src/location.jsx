import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "./commonComponent/Footer";
import Header from "./commonComponent/Header";

export default function Location() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* ===== Hero Section ===== */}
      <section className="relative w-full bg-gradient-to-br from-[#F8F4EC] via-[#EDE4D3] to-[#E1D4BA] py-20 md:py-24 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,138,82,0.15),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto px-6 sm:px-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#2E2E2E] mb-4">
            Find <span className="text-[#B08A52] italic">Us</span>
          </h1>
          <p className="text-[#5A5248] text-sm sm:text-base md:text-lg leading-relaxed">
            Step into the world of luxury and artistry at{" "}
            <span className="text-[#B08A52] font-medium">Prason Nail Studio</span>.  
            Discover beauty that shines through every detail.
          </p>
        </motion.div>
      </section>

      {/* ===== Location Section ===== */}
      <section className="relative w-full bg-[#F8F4EC] py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-6xl bg-white/70 backdrop-blur-md rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.1)] border border-[#E3D5B8] overflow-hidden"
        >
          {/* Google Map Embed */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
            <iframe
              title="Prason Nail Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.037395605701!2d73.0645896754159!3d26.32131388335843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418deb13fc3297%3A0xb2aca2b9ac915eb7!2sGlossup%20by%20Tanishka!5e0!3m2!1sen!2sin!4v1739817236543!5m2!1sen!2sin"
              className="w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Info Section */}
          <div className="p-8 sm:p-10 md:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left bg-gradient-to-br from-[#FFFDF9] to-[#F8F4EC]">
            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center md:items-start"
            >
              <FaMapMarkerAlt className="text-[#B08A52] text-3xl sm:text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-2">
                Our Location
              </h3>
              <p className="text-[#5F564B] text-sm sm:text-base leading-relaxed">
                80 Feet Rd, near Satguru Classes, Gandhinagar,
                <br /> Purani Pyau, Rawat Nagar, Jodhpur, Rajasthan 342001
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center md:items-start"
            >
              <FaPhoneAlt className="text-[#B08A52] text-3xl sm:text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-2">
                Contact Us
              </h3>
              <p className="text-[#5F564B] text-sm sm:text-base">
                +91 98765 43210
              </p>
              <p className="text-[#5F564B] text-sm sm:text-base">
                +91 87654 32109
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center md:items-start"
            >
              <FaEnvelope className="text-[#B08A52] text-3xl sm:text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-2">
                Email
              </h3>
              <p className="text-[#5F564B] text-sm sm:text-base">
                support@prasonnail.com
              </p>
              <p className="text-[#5F564B] text-sm sm:text-base">
                info@prasonnail.com
              </p>
            </motion.div>

            {/* Timings */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center md:items-start"
            >
              <FaClock className="text-[#B08A52] text-3xl sm:text-4xl mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-[#2E2E2E] mb-2">
                Working Hours
              </h3>
              <p className="text-[#5F564B] text-sm sm:text-base">
                Mon – Sat: 10:00 AM – 8:00 PM
              </p>
              <p className="text-[#5F564B] text-sm sm:text-base">
                Sunday: Closed
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="relative bg-gradient-to-br from-[#EDE4D3] via-[#E6D7B8] to-[#E1D4BA] py-16 sm:py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(176,138,82,0.1),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto px-6 sm:px-8"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#2E2E2E] mb-4">
            Visit Us & Experience{" "}
            <span className="text-[#B08A52] italic">Luxury Nail Care</span>
          </h2>
          <p className="text-[#5A5248] mb-8 text-sm sm:text-base md:text-lg">
            Step into elegance, relax in luxury, and let your nails tell your
            story 💅
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            onClick={() => navigate("/appointment")}
            className="bg-[#B08A52] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg shadow-md hover:bg-[#9A753F] transition duration-300"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
