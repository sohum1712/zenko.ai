
import React from 'react';

const Header = () => (
  <header className="bg-[#1b1b1b] border-b-4 border-[#D1FF00] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
    {/* Logo and Brand */}
    <div className="flex items-center gap-3">
      {/* Replace with your logo image if needed */}
      <span className="text-[#D1FF00] text-2xl font-extrabold">★</span>
      <span className="text-lg font-extrabold text-white tracking-tight">ZENKO</span>
    </div>
    {/* Navigation Links */}
    <nav>
      <ul className="flex items-center gap-6 text-base font-bold">
        <li><a href="#home" className="text-[#D1FF00] hover:text-white transition">HOME</a></li>
        <li><a href="#about" className="text-white hover:text-[#D1FF00] transition">ABOUT US</a></li>
        <li><a href="#services" className="text-white hover:text-[#D1FF00] transition">SERVICES</a></li>
        <li><a href="#portfolio" className="text-white hover:text-[#D1FF00] transition">PORTFOLIO</a></li>
        <li><a href="#contact" className="text-white hover:text-[#D1FF00] transition">CONTACT</a></li>
      </ul>
    </nav>
    {/* CTA Button */}
    <a
      href="#getstarted"
      className="ml-6 bg-[#D1FF00] text-black px-5 py-2 rounded-full font-bold hover:bg-white hover:text-[#111ac3] transition"
    >
      GET STARTED
    </a>
  </header>
);

export default Header;
