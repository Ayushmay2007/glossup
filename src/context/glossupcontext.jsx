import React, { createContext, useEffect, useState } from "react";

// Create context
export const EcommContext = createContext();

export default function GlossupContextProvider({ children }) {
  // Initialize cart from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("glossup-cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("glossup-cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // Increase quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Otherwise, add new item
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // ✅ Remove item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Clear cart
  const clearCart = () => setCart([]);

  // ✅ Update quantity
  const updateQuantity = (id, qty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  // ✅ Get total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // Provide data and functions globally
  return (
    <EcommContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        totalPrice,
      }}
    >
      {children}
    </EcommContext.Provider>
  );
}
