import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { key: 'navbar.home', href: '#home' },
    { key: 'navbar.about', href: '#about' },
    { key: 'navbar.services', href: '#services' },
    { key: 'navbar.how_it_works', href: '#how-it-works' },
    { key: 'navbar.team', href: '#team' },
    { key: 'navbar.contact', href: '#contact' },
  ];

  const resourceLinks = [
    { key: 'navbar.resources_menu.use_cases', href: 'usecases.html' },
    { key: 'navbar.resources_menu.lab', href: 'https://github.com/molket-io/molket.jl' },
    { key: 'navbar.resources_menu.molket_jl', href: 'https://github.com/molket-io/molket.jl/tree/main/examples' },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
      <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
              scrolled ? 'bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-4">
          <div className="flex items-center justify-between h-16 md:h-20 pl-4 sm:pl-6 lg:pl-8">
            {/* Logo Section */}
            <div className="flex items-center md:mt-0">
              <a href="#home" className="flex items-center">
                <img src="/logo.png" alt="MolKet Logo" className="h-7 w-auto"/>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 pr-4 sm:pr-6 lg:pr-8">
              {navLinks.map((link) => (
                  <a
                      key={link.key}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:text-blue-400 ${
                          scrolled ? 'text-white' : 'text-white'
                      }`}
                  >
                    {t(link.key)}
                  </a>
              ))}
              <div className="relative group">
                <button
                    className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                        scrolled ? 'text-white' : 'text-white'
                    } flex items-center hover:text-blue-400`}
                >
                  {t('navbar.resources')}
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
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {resourceLinks.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                          {t(link.key)}
                        </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Language Switcher (Desktop) */}
              <select
                  onChange={handleLanguageChange}
                  value={i18n.language}
                  className={`ml-4 px-3 py-1 rounded-md text-sm border ${
                      scrolled
                          ? 'bg-gray-800 text-white border-gray-600 hover:border-blue-500 focus:ring-blue-500'
                          : 'bg-transparent text-white border-white hover:border-blue-400'
                  } focus:outline-none focus:ring-2 transition duration-200`}
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="nl">NL</option>
              </select>
            </div>

            {/* Mobile Language Switcher */}
            <div className="md:hidden flex items-center space-x-2">
              <select
                  onChange={handleLanguageChange}
                  value={i18n.language}
                  className={`ml-4 px-2 py-1 rounded-md text-sm border ${
                      scrolled
                          ? 'bg-gray-800 text-white border-gray-600 hover:border-blue-500 focus:ring-blue-500'
                          : 'bg-transparent text-white border-white hover:border-blue-400'
                  } focus:outline-none focus:ring-2 transition duration-200`}              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="nl">NL</option>
              </select>
              {/* Mobile Menu Toggle */}
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-2 rounded-md ${
                      scrolled ? 'text-white' : 'text-white'
                  } hover:bg-blue-700 hover:text-white focus:outline-none`}
              >
                {isOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                  isOpen
                      ? 'max-h-screen opacity-100'
                      : 'max-h-0 opacity-0 invisible'
              }`}
          >
            <div
                className="px-4 sm:px-6 lg:px-8 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm shadow-lg rounded-b-lg">
              {[...navLinks, ...resourceLinks].map((link) => (
                  <a
                      key={link.key}
                      href={link.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-700 hover:text-white"
                      onClick={() => setIsOpen(false)}
                  >
                    {t(link.key)}
                  </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
