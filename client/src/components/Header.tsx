
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#1b1b1b] border-b-4 border-[#D1FF00] px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <span className="text-[#D1FF00] text-2xl font-extrabold animate-pulse">★</span>
          <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">ZENKO</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm lg:text-base font-bold">
            <li><a href="#home" className="text-[#D1FF00] hover:text-white transition-colors duration-300">HOME</a></li>
            <li><a href="#about" className="text-white hover:text-[#D1FF00] transition-colors duration-300">ABOUT US</a></li>
            <li><a href="#services" className="text-white hover:text-[#D1FF00] transition-colors duration-300">SERVICES</a></li>
            <li><a href="#portfolio" className="text-white hover:text-[#D1FF00] transition-colors duration-300">PORTFOLIO</a></li>
            <li><a href="#contact" className="text-white hover:text-[#D1FF00] transition-colors duration-300">CONTACT</a></li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-[#D1FF00] text-black px-5 py-2 rounded-full font-bold hover:bg-white hover:text-[#111ac3] transition-all duration-300 transform hover:scale-105"
        >
          GET STARTED
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white hover:text-[#D1FF00] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D1FF00] focus:ring-offset-2 focus:ring-offset-[#1b1b1b]"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-navigation" 
          className="md:hidden bg-[#1b1b1b] border-t border-[#D1FF00]/30 mt-4 py-4"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav>
            <ul className="flex flex-col gap-4 px-4">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-[#D1FF00] hover:text-white transition-colors duration-300 py-2">HOME</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#D1FF00] transition-colors duration-300 py-2">ABOUT US</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#D1FF00] transition-colors duration-300 py-2">SERVICES</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#D1FF00] transition-colors duration-300 py-2">PORTFOLIO</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-white hover:text-[#D1FF00] transition-colors duration-300 py-2">CONTACT</a></li>
            </ul>
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#D1FF00] text-black px-5 py-2 rounded-full font-bold hover:bg-white hover:text-[#111ac3] transition-all duration-300"
              >
                GET STARTED
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
