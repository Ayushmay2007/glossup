import React, { useState } from "react";
import Header from "./commonCamponent/Header";

export default function Appointment() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✨ Appointment Request Sent Successfully!");
    console.log(form);
  };

  return (
    <>
      <Header />

      {/* Appointment Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-[#FFF8F2] via-[#F8EFEA] to-[#F3E6DD] flex justify-center items-center py-20 px-6 overflow-hidden">
        
        {/* Soft Background Blurs */}
        <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#FFD9B3]/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] left-[-80px] w-[300px] h-[300px] bg-[#F1C8A6]/30 blur-[100px] rounded-full"></div>

        <div className="relative z-10 w-full max-w-[900px] bg-white/70 backdrop-blur-md shadow-2xl rounded-3xl p-10 md:p-14 border border-white/40">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#2E2E2E] tracking-tight">
              Book Your <span className="text-[#B07A56] italic">Appointment</span>
            </h1>
            <p className="text-[#5F564B] mt-3 text-base md:text-lg max-w-[600px] mx-auto">
              Reserve your spot and let us create stunning nail art just for you.
              Choose your service, date, and time — and we’ll make it magical.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className="text-[#2E2E2E] font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="border border-[#D9C8B4] rounded-lg px-4 py-3 bg-white/60 focus:ring-2 focus:ring-[#B07A56] outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col">
              <label className="text-[#2E2E2E] font-medium mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="border border-[#D9C8B4] rounded-lg px-4 py-3 bg-white/60 focus:ring-2 focus:ring-[#B07A56] outline-none"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col">
              <label className="text-[#2E2E2E] font-medium mb-2">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="border border-[#D9C8B4] rounded-lg px-4 py-3 bg-white/60 focus:ring-2 focus:ring-[#B07A56] outline-none"
              />
            </div>

            {/* Service */}
            <div className="flex flex-col">
              <label className="text-[#2E2E2E] font-medium mb-2">Service</label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="border border-[#D9C8B4] rounded-lg px-4 py-3 bg-white/60 focus:ring-2 focus:ring-[#B07A56] outline-none"
              >
                <option value="">Select a service</option>
                <option value="Classic Manicure">Classic Manicure</option>
                <option value="Gel Nail Art">Gel Nail Art</option>
                <option value="Luxury Pedicure">Luxury Pedicure</option>
                <option value="Nail Extension">Nail Extension</option>
                <option value="Custom Design">Custom Design</option>
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-[#2E2E2E] font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="border border-[#D9C8B4] rounded-lg px-4 py-3 bg-white/60 focus:ring-2 focus:ring-[#B07A56] outline-none resize-none"
                placeholder="Write any special requests..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="px-10 py-3 bg-[#B07A56] text-white text-lg font-medium rounded-full shadow-md hover:bg-[#9A6946] hover:scale-105 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
