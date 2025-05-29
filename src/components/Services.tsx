import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BarChart4 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Cpu className="w-10 h-10" />,
      title: t('services.service_1.title'),
      description: t('services.service_1.description'),
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: t('services.service_2.title'),
      description: t('services.service_2.description'),
    },
    {
      icon: <BarChart4 className="w-10 h-10" />,
      title: t('services.service_3.title'),
      description: t('services.service_3.description'),
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('services.description')}
            </p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
          >
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105 flex flex-col"
                    variants={item}
                >
                  <div className="p-8 flex-1">
                    <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {service.description}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 w-full rounded-b-lg"></div>
                </motion.div>
            ))}
          </motion.div>

          <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            <a
                href="https://1u0ya8k0gol.typeform.com/to/RyIvarq4"
                rel="nofollow noopener"
                target="_blank"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {t('services.explore_button')}
            </a>
          </motion.div>
        </div>
      </section>
  );
};

export default Services;
