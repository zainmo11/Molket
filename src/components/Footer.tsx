import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation functionality

  return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <motion.div
                className="col-span-1 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <img
                    src="/logo.png"
                    alt={t('navbar.logo')} // Localized alt text
                    className="h-12 w-auto mr-3"
                />
                {/* Optionally, display the translated brand name */}
                {/* <span className="text-2xl font-bold">{t('navbar.logo')}</span> */}
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description')} {/* Localized description */}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">{t('footer.quick_links.title')}</h3> {/* Localized heading */}
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.quick_links.about')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.quick_links.services')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.quick_links.how_it_works')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.quick_links.team')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.quick_links.contact')} {/* Localized link */}
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Resources Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-4">{t('footer.resources.title')}</h3> {/* Localized heading */}
              <ul className="space-y-2">
                <li>
                  <a href="usecases.html" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.resources.use_cases')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a
                      href="http://jupyterhub.molket.io"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    {t('footer.resources.lab')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a
                      href="https://github.com/molket-io/molket.jl/tree/main/examples"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    {t('footer.resources.molket_jl')} {/* Localized link */}
                  </a>
                </li>
                <li>
                  <a href="pp.html" className="text-gray-400 hover:text-white transition-colors duration-300">
                    {t('footer.resources.legal_mentions')} {/* Localized link */}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Copyright Section */}
          <motion.div
              className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>
              {t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}
              {/* Dynamically replace {year} with the current year */}
            </p>
          </motion.div>
        </div>
      </footer>
  );
};

export default Footer;