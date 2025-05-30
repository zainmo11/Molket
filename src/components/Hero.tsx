import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import i18n from "i18next";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useTranslation();
  const isEnglish = i18n.language === 'en';
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        const colors = ['rgba(59, 130, 246, 0.7)', 'rgba(79, 70, 229, 0.7)', 'rgba(139, 92, 246, 0.7)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particlesArray: Particle[] = [];
    for (let i = 0; i < Math.min(100, Math.floor(window.innerWidth / 10)); i++) {
      particlesArray.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      requestAnimationFrame(animate);
    };

    const connectParticles = () => {
      const maxDistance = Math.min(100, canvas.width / 8);
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(79, 70, 229, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 overflow-hidden">
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <motion.img
              src="/logo.png"
              alt="MolKet Logo"
              className="mx-auto mt-6 sm:mt-0 h-20 sm:h-24 md:h-32 lg:h-40 mb-6"
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              loading="lazy"
          />

          <motion.h1
              className={`font-bold text-white mb-6 transition-all duration-300 ${
                  isEnglish
                      ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                      : 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
              }`}
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.8, delay: 0.2}}
          >
            {t('home.title')}
          </motion.h1>

          <motion.div
              className="max-w-3xl mx-auto px-2"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
          >
            <p className="text-lg sm:text-xl text-white/90 mb-8">
              {t('home.description')}
            </p>

            <ul className="space-y-3 text-base sm:text-lg text-white/90 mb-8 mx-auto max-w-md">
              <motion.li className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" initial={{x: -20, opacity: 0}}
                         animate={{x: 0, opacity: 1}} transition={{delay: 0.6}}>
                {t('home.services_list.quantum_molecular_dynamics')}
              </motion.li>
              <motion.li className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" initial={{x: -20, opacity: 0}}
                         animate={{x: 0, opacity: 1}} transition={{delay: 0.7}}>
                {t('home.services_list.cryptography')}
              </motion.li>
              <motion.li className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2" initial={{x: -20, opacity: 0}}
                         animate={{x: 0, opacity: 1}} transition={{delay: 0.8}}>
                {t('home.services_list.neuromorphic_computing')}
              </motion.li>
            </ul>

            <p className="text-base sm:text-lg text-white/90 mb-10">
              {t('home.support_text')}
            </p>

            <motion.div
                className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 1}}
            >
              <a
                  href="https://1u0ya8k0gol.typeform.com/to/RyIvarq4"
                  target="_blank"
                  rel="nofollow noopener"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-blue-900 font-medium hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
              >
                {t('home.request_demo')}
              </a>
              <a
                  href="#services"
                  className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors duration-300 text-center"
              >
                {t('home.explore_services')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
