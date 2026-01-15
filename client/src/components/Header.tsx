
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#171717] border-b-4 border-[#F25C23] px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <img src="/zenko-logo.png" alt="Zenko" className="h-8 w-auto hidden sm:block" />
            <span className="text-lg sm:text-xl font-extrabold text-[#DEDEDE] tracking-tight font-display">ZENKO</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm lg:text-base font-bold font-sans">
            <li><a href="#home" className="text-[#F25C23] hover:text-[#DEDEDE] transition-colors duration-300">HOME</a></li>
            <li><a href="#about" className="text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300">ABOUT US</a></li>
            <li><a href="#services" className="text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300">SERVICES</a></li>
            <li><a href="#portfolio" className="text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300">PORTFOLIO</a></li>
            <li><a href="#contact" className="text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300">CONTACT</a></li>
          </ul>
        </nav>
        
          {/* Desktop CTA Button */}
          <a
            href="#contact"
            className="hidden md:block bg-[#F25C23] text-[#171717] px-5 py-2 rounded-full font-bold font-sans hover:bg-[#DEDEDE] hover:text-[#171717] transition-all duration-300 transform hover:scale-105"
          >
          Contact
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F25C23] focus:ring-offset-2 focus:ring-offset-[#171717]"
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
          className="md:hidden bg-[#171717] border-t border-[#4D4D4D] mt-4 py-4"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav>
            <ul className="flex flex-col gap-4 px-4">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-[#F25C23] hover:text-[#DEDEDE] transition-colors duration-300 py-2">HOME</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300 py-2">ABOUT US</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300 py-2">SERVICES</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300 py-2">PORTFOLIO</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[#DEDEDE] hover:text-[#F25C23] transition-colors duration-300 py-2">CONTACT</a></li>
            </ul>
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#F25C23] text-[#171717] px-5 py-2 rounded-full font-bold hover:bg-[#DEDEDE] hover:text-[#171717] transition-all duration-300"
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
