'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const images = [
  {
    src: '/images/services/interno1.png',
    alt: 'Interior do Salão Lírio - Ambiente Principal'
  },
  {
    src: '/images/services/interno2.png',
    alt: 'Interior do Salão Lírio - Área de Tratamentos'
  },
  {
    src: '/images/services/interno3.png',
    alt: 'Interior do Salão Lírio - Espaço de Relaxamento'
  },
  {
    src: '/images/services/interno4.png',
    alt: 'Interior do Salão Lírio - Área de Cortes'
  },
  {
    src: '/images/services/interno5.png',
    alt: 'Interior do Salão Lírio - Espaço de Beleza'
  },
  {
    src: '/images/services/interno6.png',
    alt: 'Interior do Salão Lírio - Área de Espera'
  },
  {
    src: '/images/services/interno7.png',
    alt: 'Interior do Salão Lírio - Recepção'
  }
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsAutoPlaying(false);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="sobre" className="h-screen w-full bg-gradient-to-b from-black to-primary-950 relative overflow-hidden scroll-mt-16">
      {/* Textura de fundo decorativa */}
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5" />
      
      <div className="container-custom relative z-10 h-full overflow-y-auto pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-200 text-sm font-medium tracking-wide border border-primary-500/20 backdrop-blur-sm mb-3">
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Sobre o Lírio Cabeleireiro
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Há anos transformando a beleza e a autoestima de nossos clientes em Fazenda Rio Grande.
            Nossa missão é proporcionar uma experiência única de cuidado e transformação.
          </p>
        </motion.div>

        {/* Grid com carrossel e informações */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Carrossel de Imagens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Sombra superior */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent opacity-50 z-10" />
              
              {/* Imagem atual */}
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Sombra inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent opacity-50 z-10" />

              {/* Botões de navegação */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Conteúdo do lado direito */}
          <div className="space-y-6">
            {/* Texto sobre o salão */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-primary-800/30">
                <h3 className="text-2xl font-bold text-white mb-3">Nossa Missão</h3>
                <p className="text-gray-300">
                  Buscamos proporcionar uma experiência única de beleza e bem-estar, 
                  utilizando produtos de alta qualidade e técnicas modernas para realçar 
                  a beleza natural de cada cliente.
                </p>
              </div>

              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-primary-800/30">
                <h3 className="text-2xl font-bold text-white mb-3">Nossos Valores</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    Excelência em atendimento
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    Compromisso com a qualidade
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    Respeito à individualidade
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    Inovação constante
                  </li>
                </ul>
              </div>

              {/* Botão de agendamento */}
              <motion.a
                href="https://wa.me/5541997404952"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Agende seu Horário
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 