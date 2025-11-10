import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { EcommContext } from "./context/glossupcontext";
import dog from "./assets/images/cart.png";

export default function Cart() {
  const { cart, setCart } = useContext(EcommContext);
  const navigate = useNavigate();

  const updateQty = (id, qty) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Billing
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F6F1] via-[#F3EDE2] to-[#E9DFC8] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#B08A52] to-[#d3b377] text-transparent bg-clip-text"
        >
          Your Cart
        </motion.h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center text-gray-700 mt-20"
          >
            <img src={dog} alt="Empty Cart" className="w-72 opacity-90 mb-6" />
            <p className="text-xl font-medium mb-6">Your cart is feeling lonely 😔</p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-[#B08A52] text-white font-semibold rounded-full hover:bg-[#9a7847] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* 🛒 Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center justify-between bg-white/70 backdrop-blur-md border border-[#E3D5B8]/60 rounded-2xl shadow-[0_4px_20px_rgba(176,138,82,0.1)] hover:shadow-[0_6px_25px_rgba(176,138,82,0.25)] transition-all duration-300 p-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 rounded-xl object-cover border border-[#E3D5B8]/80 shadow-sm"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#E3D5B8] rounded-full px-3 py-1 bg-white/60">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-2 text-xl text-[#B08A52] hover:text-[#9a7847] transition"
                      >
                        -
                      </button>
                      <span className="px-3 text-gray-700 font-medium">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 text-xl text-[#B08A52] hover:text-[#9a7847] transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 💳 Order Summary */}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-lg border border-[#E3D5B8]/70 rounded-2xl shadow-[0_4px_25px_rgba(176,138,82,0.15)] p-8 sticky top-28 h-fit"
            >
              <h2 className="text-2xl font-semibold text-[#B08A52] mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst.toFixed(2)}</span>
                </div>
                <hr className="my-2 border-[#E3D5B8]/60" />
                <div className="flex justify-between text-lg font-semibold text-[#B08A52]">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="mt-8 w-full py-3 bg-[#B08A52] text-white font-medium rounded-full hover:bg-[#9a7847] shadow-md hover:shadow-lg transition-all duration-300"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate("/")}
                className="mt-3 w-full py-3 border border-[#E3D5B8] text-gray-700 font-medium rounded-full hover:bg-[#F8F4EC] transition-all duration-300"
              >
                Continue Shopping
              </button>

              {/* Small Note */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                All prices include GST and applicable discounts.
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
