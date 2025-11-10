import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallery from './gallery.jsx'
import Prason from './prason.jsx'
import Appointment from './appointment.jsx'
import Location from './location.jsx'
import Cart from './cart.jsx'
import GlossupContextProvider from './context/glossupcontext.jsx'


createRoot(document.getElementById('root')).render(
  <GlossupContextProvider>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/parsons" element={<Prason />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/location" element={<Location />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  </GlossupContextProvider>
)