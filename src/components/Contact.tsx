import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet marker icon issue
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
L.Marker.prototype.options.icon = new L.Icon({
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
            <p className="text-lg text-gray-300">{t('contact.description')}</p>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location Card */}
              <motion.div
                  className="bg-gray-800 rounded-lg p-8 text-center"
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6}}
              >
                <div
                    className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 mb-6">
                  <MapPin className="w-8 h-8"/>
                </div>
                <h3 className="text-xl font-bold mb-4">{t('contact.location.title')}</h3>
                <p className="text-gray-300 mb-6">{t('contact.location.address')}</p>
              </motion.div>

              {/* Email Card */}
              <motion.div
                  className="bg-gray-800 rounded-lg p-8 text-center"
                  initial={{opacity: 0, y: 30}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6, delay: 0.2}}
              >
                <div
                    className="w-16 h-16 mx-auto bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500 mb-6">
                  <Mail className="w-8 h-8"/>
                </div>
                <h3 className="text-xl font-bold mb-4">{t('contact.email.title')}</h3>
                <p className="text-gray-300 mb-2">
                  <a
                      href={`mailto:${t('contact.email.contact_email')}`}
                      className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {t('contact.email.contact_email')}
                  </a>
                </p>
                <p className="text-gray-300">
                  <a
                      href={`mailto:${t('contact.email.business_email')}`}
                      className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {t('contact.email.business_email')}
                  </a>
                </p>
              </motion.div>
            </div>


            {/* Request a Demo Button */}
            <motion.div
                className="mt-16 text-center"
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.8}}
            >
              <a
                  href="https://1u0ya8k0gol.typeform.com/to/RyIvarq4"
                  rel="nofollow noopener"
                  target="_blank"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
              >
                {t('contact.request_demo')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
