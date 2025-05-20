'use client';

import { motion } from 'framer-motion';
import { FaCut, FaStar } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-[#4A071C] to-black overflow-hidden pt-16 md:pt-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative h-[calc(100vh-4rem)] md:h-[calc(100vh-6rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 md:space-y-6 z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <FaCut className="w-4 h-4 text-primary-400 animate-spin-slow" />
              <span className="text-sm font-medium text-white">
                Seu espaço de beleza em Fazenda Rio Grande
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif"
            >
              Transforme seu visual em uma{' '}
              <span className="text-primary-400">obra de arte</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Expertise em cortes modernos e experiência premium. Onde cada cliente é
              único e cada corte é uma expressão de arte.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#agendar"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 shadow-lg shadow-primary-500/25"
              >
                Agendar Agora
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Conheça nossos serviços →
              </a>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-8 text-center lg:text-left"
            >
              <div>
                <p className="text-gray-400 text-sm">Seg-Sex</p>
                <p className="text-white">9h às 19h</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Santa Terezinha</p>
                <p className="text-white">Rua Jaguariaíva, 1385</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Agendamento</p>
                <p className="text-white">(41) 98720-3046</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative block lg:block"
          >
            {/* Efeito de brilho de fundo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-2xl" />
            
            {/* Container da imagem com sombras e efeitos */}
            <div className="relative max-w-sm md:max-w-md lg:max-w-xl mx-auto">
              {/* Sombra superior */}
              <div className="absolute -top-2 -left-2 -right-2 h-32 bg-gradient-to-b from-[#4A071C] to-transparent opacity-50 blur-lg" />
              
              {/* Container da imagem com bordas e efeitos */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-primary-500/10 shadow-lg shadow-primary-900/30">
                <img
                  src="/MulherDoLirio.png"
                  alt="Proprietária do Salão Lírio"
                  className="object-cover w-full h-full scale-100 hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradientes sobrepostos para melhor contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A071C] via-transparent to-transparent opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-l from-[#4A071C] via-transparent to-transparent opacity-20" />
                
                {/* Brilho nas bordas mais sutil */}
                <div className="absolute inset-0 border border-white/5 rounded-xl" />
              </div>
              
              {/* Sombra inferior */}
              <div className="absolute -bottom-2 -left-2 -right-2 h-32 bg-gradient-to-t from-[#4A071C] to-transparent opacity-50 blur-lg" />
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          >
            <p className="text-gray-400 text-sm mb-2">Role para descobrir mais</p>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 