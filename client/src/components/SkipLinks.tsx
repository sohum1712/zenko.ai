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
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#1b1b1b] border-b-2 border-[#D1FF00] p-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {skipLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                bg-[#D1FF00] text-black px-4 py-2 rounded-lg font-semibold
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1b1b1b]
                hover:bg-[#c4e71a] transition-colors duration-200
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