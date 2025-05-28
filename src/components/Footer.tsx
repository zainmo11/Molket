import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                alt="MolKet Logo" 
                className="h-12 w-auto mr-3"
              />
              {/*<span className="text-2xl font-bold">MolKet</span>*/}
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              MolKet offers consulting and AI services for modeling quantum molecular 
              solutions with cloud-based software on hybrid HPC and quantum computing platforms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">How It Works</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="usecases.html" className="text-gray-400 hover:text-white transition-colors duration-300">Use Cases</a>
              </li>
              <li>
                <a href="http://jupyterhub.molket.io" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">Lab</a>
              </li>
              <li>
                <a href="https://github.com/molket-io/molket.jl/tree/main/examples" className="text-gray-400 hover:text-white transition-colors duration-300" target="_blank" rel="noopener noreferrer">MolKet.jl</a>
              </li>
              <li>
                <a href="pp.html" className="text-gray-400 hover:text-white transition-colors duration-300">Mentions légales</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>© {new Date().getFullYear()} MolKet SAS. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;