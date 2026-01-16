import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#11120D] border-b border-[#565449] px-4 sm:px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#D8CFBC] rounded-xl flex items-center justify-center">
            <span className="text-[#11120D] font-display font-black text-lg">Z</span>
          </div>
          <span className="text-lg sm:text-xl font-extrabold text-[#FFFBF4] tracking-tight font-display">ZENKO</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium font-sans">
            <li><a href="#home" className="text-[#FFFBF4] hover:text-[#D8CFBC] transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300">About</a></li>
            <li><a href="#services" className="text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300">Services</a></li>
            <li><a href="#portfolio" className="text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300">Portfolio</a></li>
            <li><a href="#contact" className="text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-[#D8CFBC] text-[#11120D] px-6 py-2.5 rounded-full font-bold font-sans hover:bg-[#FFFBF4] transition-all duration-300 transform hover:scale-105"
        >
          Get Started
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#FFFBF4] hover:text-[#D8CFBC] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#D8CFBC] focus:ring-offset-2 focus:ring-offset-[#11120D]"
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
          className="md:hidden bg-[#11120D] border-t border-[#565449] mt-4 py-4"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav>
            <ul className="flex flex-col gap-4 px-4">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-[#FFFBF4] hover:text-[#D8CFBC] transition-colors duration-300 py-2 font-medium">Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300 py-2 font-medium">About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300 py-2 font-medium">Services</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300 py-2 font-medium">Portfolio</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[#D8CFBC] hover:text-[#FFFBF4] transition-colors duration-300 py-2 font-medium">Contact</a></li>
            </ul>
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#D8CFBC] text-[#11120D] px-5 py-3 rounded-full font-bold hover:bg-[#FFFBF4] transition-all duration-300"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
