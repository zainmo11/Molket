import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <img
                    src="/logo.png"
                    alt={t('navbar.logo')}
                    className="h-12 w-auto mr-3"
                    loading="lazy"
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                {t('footer.description')}
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4">{t('footer.quick_links.title')}</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white">{t('footer.quick_links.about')}</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">{t('footer.quick_links.services')}</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white">{t('footer.quick_links.how_it_works')}</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white">{t('footer.quick_links.team')}</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">{t('footer.quick_links.contact')}</a></li>
              </ul>
            </motion.div>

            {/* Resources Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold mb-4">{t('footer.resources.title')}</h3>
              <ul className="space-y-2">
                <li><a href="usecases.html" className="text-gray-400 hover:text-white">{t('footer.resources.use_cases')}</a></li>
                <li><a href="http://jupyterhub.molket.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.resources.lab')}</a></li>
                <li><a href="https://github.com/molket-io/molket.jl/tree/main/examples" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">{t('footer.resources.molket_jl')}</a></li>
                <li><a href="pp.html" className="text-gray-400 hover:text-white">{t('footer.resources.legal_mentions')}</a></li>
              </ul>
            </motion.div>
          </div>

          {/* Map (separate row) */}
          <div className="mt-10">
            <div className="w-full h-60 rounded-xl overflow-hidden shadow-lg border border-gray-700">
              <MapContainer
                  center={[48.8733285, 2.3280217]}
                  zoom={13}
                  scrollWheelZoom={false}
                  className="h-full w-full z-0"
              >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[48.8733285, 2.3280217]}>
                  <Popup>{t('contact.location.address')}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
              className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>{t('footer.copyright').replace('{year}', new Date().getFullYear().toString())}</p>
          </motion.div>
        </div>
      </footer>
  );
};

export default Footer;
