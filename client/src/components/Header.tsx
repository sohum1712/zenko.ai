import React, { useState, useEffect } from 'react';
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-primary-foreground font-black text-xl italic">Z</span>
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-foreground group-hover:text-accent transition-colors">
              ZENKO<span className="text-accent">.</span>AI
            </span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="text-sm font-semibold tracking-wide uppercase text-foreground/70 hover:text-accent transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group btn btn-accent px-6 py-2.5 flex items-center gap-2"
          >
            Start Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground hover:bg-muted rounded-full transition-colors"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-lg z-[-1] md:hidden transition-all duration-500 ease-in-out transform",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <nav className="h-full flex flex-col justify-center items-center gap-8 px-6 pt-20">
          <ul className="flex flex-col items-center gap-8 w-full">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <a 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-3xl font-bold text-foreground hover:text-accent transition-colors block py-2"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="w-full max-w-xs mt-8">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="btn btn-primary w-full py-4 text-xl"
            >
              GET STARTED
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
