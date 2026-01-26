import React from 'react';
import TranslatedText from './TranslatedText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 px-4 sm:px-6 py-5 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <img src="/Zenko.svg" alt="Zenko" className="w-20 h-20 object-contain" />
          </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 bg-white rounded-full px-1.5 py-1.5 shadow-sm border border-gray-100">
            <li><a href="#home" className="px-5 py-2 rounded-full text-[#1a1a2e] bg-gray-100 text-sm font-medium"><TranslatedText>Home</TranslatedText></a></li>
            <li><a href="#about" className="px-5 py-2 rounded-full text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 text-sm font-medium"><TranslatedText>About Us</TranslatedText></a></li>
            <li><a href="#services" className="px-5 py-2 rounded-full text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 text-sm font-medium"><TranslatedText>Services</TranslatedText></a></li>
          </ul>
        </nav>
        <a href="#contact" className="hidden md:flex items-center gap-2 bg-white text-[#1a1a2e] px-5 py-2.5 rounded-full font-medium text-sm border border-gray-200 hover:bg-gray-50 shadow-sm"><TranslatedText>Contact</TranslatedText></a>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#1a1a2e]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white border border-gray-100 rounded-2xl mt-4 py-4 shadow-xl">
          <nav>
            <ul className="flex flex-col gap-1 px-3">
              <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="block text-[#1a1a2e] bg-gray-50 py-2.5 px-4 rounded-xl font-medium text-sm"><TranslatedText>Home</TranslatedText></a></li>
              <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 py-2.5 px-4 rounded-xl font-medium text-sm"><TranslatedText>About Us</TranslatedText></a></li>
              <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 py-2.5 px-4 rounded-xl font-medium text-sm"><TranslatedText>Services</TranslatedText></a></li>
              <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="block text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 py-2.5 px-4 rounded-xl font-medium text-sm"><TranslatedText>Portfolio</TranslatedText></a></li>
              <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-[#6b7280] hover:text-[#1a1a2e] hover:bg-gray-50 py-2.5 px-4 rounded-xl font-medium text-sm"><TranslatedText>Contact</TranslatedText></a></li>
            </ul>
            <div className="px-3 mt-3">
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-[#4d8af0] text-white px-5 py-3 rounded-full font-medium hover:bg-[#3b7ae0]"><TranslatedText>Get Started</TranslatedText></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
