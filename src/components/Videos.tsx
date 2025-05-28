import React from 'react';
import { motion } from 'framer-motion';

const Videos: React.FC = () => {
  const videos = [
    {
      id: "0_K8UGEGKmg",
      title: "Quantum Intelligence for Chemistry Simulations",
      description: "MolKet harnesses the power of quantum intelligence to revolutionize simulations in chemistry and physics. Our AI agents, trained on intricate Hamiltonian derivations, predict the behavior of complex systems, significantly accelerating research and discovery."
    },
    {
      id: "45OccvEjzIU",
      title: "Accelerating Chemical Design with AI Agents",
      description: "Alain Chancé and Dr. Taha Selim propose leveraging AI agents to accelerate chemical design and quantum dynamical simulations. These AI agents can be trained on the inputs and outputs of quantum chemistry and dynamics algorithms, effectively replacing computationally expensive components."
    }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Videos</h2>
          <p className="text-lg text-gray-600">Discover how MolKet is revolutionizing quantum computing</p>
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