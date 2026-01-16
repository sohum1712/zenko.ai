import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 px-4 sm:px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#11120D]">
              <path d="M12 2L15 8H9L12 2Z" fill="currentColor"/>
              <circle cx="12" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-[#11120D] tracking-tight font-display">Zenko Digital</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 bg-[#FFFBF4] rounded-full px-2 py-1 shadow-sm border border-[#D8CFBC]/30">
            <li>
              <a href="#home" className="px-4 py-2 rounded-full text-[#11120D] bg-[#11120D]/5 text-sm font-medium transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="px-4 py-2 rounded-full text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 text-sm font-medium transition-colors duration-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="px-4 py-2 rounded-full text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 text-sm font-medium transition-colors duration-300">
                Services
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 bg-[#FFFBF4] text-[#11120D] px-5 py-2.5 rounded-full font-medium text-sm font-sans border border-[#11120D] hover:bg-[#11120D] hover:text-[#FFFBF4] transition-all duration-300"
        >
          <span>Contact</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#11120D] hover:text-[#565449] transition-colors duration-300 focus:outline-none"
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
          className="md:hidden bg-[#FFFBF4] border border-[#D8CFBC] rounded-2xl mt-4 py-4 shadow-xl"
          role="navigation"
          aria-label="Mobile navigation menu"
        >
          <nav>
            <ul className="flex flex-col gap-2 px-4">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-[#11120D] hover:bg-[#11120D]/5 transition-colors duration-300 py-2 px-4 rounded-xl font-medium">Home</a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 transition-colors duration-300 py-2 px-4 rounded-xl font-medium">About</a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 transition-colors duration-300 py-2 px-4 rounded-xl font-medium">Services</a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 transition-colors duration-300 py-2 px-4 rounded-xl font-medium">Portfolio</a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[#565449] hover:text-[#11120D] hover:bg-[#11120D]/5 transition-colors duration-300 py-2 px-4 rounded-xl font-medium">Contact</a></li>
            </ul>
            <div className="px-4 mt-4">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-[#11120D] text-[#FFFBF4] px-5 py-3 rounded-full font-bold hover:bg-[#565449] transition-all duration-300"
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
