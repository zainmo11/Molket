import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto mb-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('about.subtitle')}
                </h3>
                <div className="h-1 w-16 bg-blue-600 mb-6"></div>
                <p className="text-gray-700 mb-6">
                  {t('about.description_1')}
                </p>
                <p className="text-gray-700">
                  {t('about.description_2')}
                </p>
              </motion.div>

              <motion.div
                  className="rounded-lg overflow-hidden shadow-xl w-full max-w-2xl mx-auto"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                    src="./deck_general_compact_new.004.jpeg"
                    alt="MolKet Services"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                />
              </motion.div>
            </div>

            <motion.div
                className="mt-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('about.process_title')}
              </h3>
              <div className="h-1 w-16 bg-blue-600 mx-auto mb-8"></div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <video className="w-full h-auto" controls>
                  <source src="./ezgif.com-gif-to-mp4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;
