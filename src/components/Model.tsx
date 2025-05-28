import React from 'react';
import { motion } from 'framer-motion';

const Model: React.FC = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8}}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Model</h2>
                    <p className="text-lg text-gray-600">We can help you by providing what you need from built-in
                        libraries that help you in your execution.</p>
                    <div className="h-1 w-20 bg-blue-600 mx-auto mt-6"></div>
                </motion.div>

                <motion.div
                    className="rounded-lg overflow-hidden shadow-xl"
                    initial={{opacity: 0, x: 50}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.8, delay: 0.2}}
                >
                    <img
                        src="./deck_general_compact_new_s1.001.jpeg"
                        alt="MolKet Services"
                        className="w-full h-auto"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Model;