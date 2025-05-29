import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Videos: React.FC = () => {
  const { t } = useTranslation(); // Initialize translation hook

  // Translate video content dynamically
  const videos = [
    {
      id: "0_K8UGEGKmg",
      title: t('featured_videos.video_1.title'), // Use translation keys
      description: t('featured_videos.video_1.description'),
    },
    {
      id: "45OccvEjzIU",
      title: t('featured_videos.video_2.title'),
      description: t('featured_videos.video_2.description'),
    },
  ];

  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
          >
            {/* Use translations for section title and subtitle */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('featured_videos.title')}
            </h2>
            <p className="text-lg text-gray-600">{t('featured_videos.description')}</p>
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
                <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute w-full h-full"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    {/* Use translated title and description */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.description}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Videos;