import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#F8F4EC] border-t border-[#E0D8C5] py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ===== Top Section ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left mb-10">
          {/* --- Brand Info --- */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-2xl font-semibold text-[#2E2E2E] mb-3">
              Timeless<span className="text-[#B08A52] italic">Decor</span>
            </h3>
            <p className="text-[#5A5248] text-sm leading-relaxed max-w-xs">
              Elevate your spaces with handcrafted pieces that blend art,
              comfort, and timeless beauty.
            </p>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="text-lg font-semibold text-[#2E2E2E] mb-3">
              Quick Links
            </h4>
            <ul className="text-[#5A5248] text-sm space-y-2">
              {["Home", "Collection", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#B08A52] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Customer Care --- */}
          <div>
            <h4 className="text-lg font-semibold text-[#2E2E2E] mb-3">
              Customer Care
            </h4>
            <ul className="text-[#5A5248] text-sm space-y-2">
              {[
                "FAQs",
                "Shipping & Returns",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#B08A52] transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Contact / Socials --- */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-semibold text-[#2E2E2E] mb-3">
              Connect With Us
            </h4>
            <p className="text-[#5A5248] text-sm mb-3">
              support@timelessdecor.com
            </p>
            <div className="flex justify-center sm:justify-start flex-wrap gap-3 text-[#2E2E2E]">
              {[FaInstagram, FaFacebookF, FaTwitter, FaPinterestP].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 bg-[#EDE4D3] rounded-full hover:bg-[#B08A52] hover:text-white transition-all duration-300"
                  >
                    <Icon className="text-lg" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* ===== Divider ===== */}
        <div className="border-t border-[#E0D8C5] mb-6"></div>

        {/* ===== Bottom Section ===== */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3">
          <p className="text-[#5A5248] text-sm">
            © {new Date().getFullYear()} Timeless Decor. All rights reserved.
          </p>
          <p className="text-[#5A5248] text-sm">
            Designed with <span className="text-[#B08A52]">♥</span> by Ayushmay Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}
