'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaWhatsapp } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    content: "As mechas ficaram exatamente como eu queria. Super recomendo o trabalho do Salão Lírio!",
    author: "Ana Paula Santos",
    since: "Cliente desde 2021"
  },
  {
    id: 2,
    content: "Atendimento impecável e profissionais muito capacitados. Sempre saio satisfeita!",
    author: "Maria Silva",
    since: "Cliente desde 2020"
  },
  {
    id: 3,
    content: "O melhor salão da região! Ambiente acolhedor e resultados incríveis.",
    author: "Juliana Oliveira",
    since: "Cliente desde 2022"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Muda a cada 5 segundos
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black/90 to-primary-950/90 flex items-center">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-transparent" />

      <div className="container-custom relative z-10 py-24">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-900/60 text-primary-200 text-sm font-medium tracking-wide mb-4 border border-primary-700/50 shadow-lg shadow-primary-900/20"
          >
            Depoimentos
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Depoimentos de quem já experimentou nossos serviços
          </p>
        </motion.div>

        {/* Carrossel de depoimentos */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Botões de navegação */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-primary-800/30 text-white hover:bg-primary-900/60 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-sm border border-primary-800/30 text-white hover:bg-primary-900/60 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative bg-black/40 backdrop-blur-sm p-8 rounded-2xl border border-primary-800/30"
              >
                <FaQuoteLeft className="text-4xl text-primary-500 mb-6" />
                <p className="text-xl text-gray-200 italic mb-8">
                  {testimonials[currentIndex].content}
                </p>
                <div className="text-center">
                  <h4 className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-primary-400 text-sm">
                    {testimonials[currentIndex].since}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-500 w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Botão de Agendamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://wa.me/5541997404952"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="w-5 h-5" />
            Agendar pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 