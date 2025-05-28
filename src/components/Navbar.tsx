import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
    { name: 'Use Cases', href: 'usecases.html' },
    { name: 'Lab', href: 'http://jupyterhub.molket.io' },
    { name: 'MolKet.jl', href: 'https://github.com/molket-io/molket.jl/tree/main/examples' },
  ];

  return (
      <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled ? 'bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-4">
          <div className="flex items-center justify-between h-16 md:h-20 pl-4 sm:pl-6 lg:pl-8">
            <div className="flex items-center mt-4 md:mt-0">
              <a href="#home" className="flex items-center">
                <img
                    src="/logo.png"
                    alt="MolKet Logo"
                    className="h-7 w-auto"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 pr-4 sm:pr-6 lg:pr-8">
              {navLinks.slice(0, 6).map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:text-blue-400 ${
                          scrolled ? 'text-white' : 'text-white'
                      }`}
                  >
                    {link.name}
                  </a>
              ))}
              <div className="relative group">
                <button
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                        scrolled ? 'text-white' : 'text-white'
                    } flex items-center hover:text-blue-400`}
                >
                  Resources
                  <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  <div className="py-1">
                    {navLinks.slice(6).map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          {link.name}
                        </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-md pr-4 sm:pr-6 lg:pr-8 ${
                    scrolled ? 'text-white' : 'text-white'
                } hover:bg-blue-700 hover:text-white focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>

          {/* Mobile menu */}
          <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 invisible'
              }`}
          >
            <div className="px-4 sm:px-6 lg:px-8 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-b-lg">
              {navLinks.map((link) => (
                  <a
                      key={link.name}
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 hover:text-white"
                      onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;