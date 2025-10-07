import React from 'react';

const SkipLinks: React.FC = () => {
  const skipLinks = [
    { href: '#main-content', text: 'Skip to main content' },
    { href: '#navigation', text: 'Skip to navigation' },
    { href: '#footer', text: 'Skip to footer' },
    { href: '#contact', text: 'Skip to contact' },
  ];

  return (
    <div className="sr-only focus-within:not-sr-only">
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#171717] border-b-2 border-[#F25C23] p-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {skipLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                bg-[#F25C23] text-[#171717] px-4 py-2 rounded-lg font-semibold
                focus:outline-none focus:ring-2 focus:ring-[#DEDEDE] focus:ring-offset-2 focus:ring-offset-[#171717]
                hover:opacity-90 transition-colors duration-200
              "
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkipLinks;