'use client';

import { motion } from 'framer-motion';
import { FaCut, FaPaintBrush, FaSprayCan, FaCrown, FaEye, FaSpa } from 'react-icons/fa';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

const services = [
  {
    name: 'Cortes Modernos',
    description: 'Cortes personalizados que valorizam seu estilo e personalidade, seguindo as últimas tendências.',
    icon: FaCut,
    price: 'A partir de R$ 45',
    features: ['Corte feminino', 'Corte masculino', 'Corte infantil'],
    image: '/images/CortesModernos.jpeg',
    isNew: true
  },
  {
    name: 'Coloração e Mechas',
    description: 'Transforme seu visual com as últimas técnicas em coloração e mechas personalizadas.',
    icon: FaPaintBrush,
    price: 'A partir de R$ 120',
    features: ['Mechas', 'Coloração', 'Tonalização'],
    image: '/images/services/Mechas.jpeg',
    isPromo: true
  },
  {
    name: 'Tratamentos Capilares',
    description: 'Hidratação profunda, reconstrução e tratamentos específicos para seu tipo de cabelo.',
    icon: FaSprayCan,
    price: 'A partir de R$ 80',
    features: ['Hidratação', 'Reconstrução', 'Cauterização'],
    image: '/images/services/tratamentos.jpeg'
  },
  {
    name: 'Penteados para Eventos',
    description: 'Penteados especiais para casamentos, formaturas e ocasiões especiais.',
    icon: FaCrown,
    price: 'A partir de R$ 150',
    features: ['Penteados', 'Makeup', 'Acessórios'],
    image: '/images/services/penteadosEventos.jpeg'
  },
  {
    name: 'Design de Sobrancelhas',
    description: 'Modelagem e design que realçam sua expressão natural com técnicas modernas.',
    icon: FaEye,
    price: 'A partir de R$ 35',
    features: ['Design', 'Henna', 'Micropigmentação'],
    image: '/images/services/designSobrancelhas.jpeg',
    isPromo: true
  },
  {
    name: 'Spa dos Fios',
    description: 'Um momento especial de cuidado e relaxamento para seus cabelos.',
    icon: FaSpa,
    price: 'A partir de R$ 95',
    features: ['Massagem', 'Aromaterapia', 'Hidratação VIP'],
    image: '/images/services/SpaFios.jpeg',
    isNew: true
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gradient-to-b from-black to-primary-950 relative overflow-hidden">
      {/* Textura de fundo decorativa */}
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-200 text-sm font-medium tracking-wide border border-primary-500/20 backdrop-blur-sm mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Serviços Exclusivos para Você
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Oferecemos uma experiência premium em beleza e cuidados, com profissionais 
            especializados e as melhores técnicas do mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* Efeito de brilho na borda */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl opacity-20 group-hover:opacity-100 blur transition duration-300" />
              
              <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl border border-primary-500/10 hover:border-primary-500/30 transition duration-300 overflow-hidden">
                {/* Imagem de fundo do serviço */}
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                  />
                  {/* Gradiente sobre a imagem */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                </div>

                {/* Badges de Novo/Promoção */}
                {service.isNew && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Novo
                  </div>
                )}
                {service.isPromo && (
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Promoção
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-lg bg-primary-500/20 flex items-center justify-center"
                    >
                      <service.icon className="w-6 h-6 text-primary-400" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-primary-500/10">
                    <div className="flex items-center justify-between">
                      <span className="text-primary-300 font-medium">{service.price}</span>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#agendar"
                        className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                      >
                        Agendar
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#agendar"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            Agende seu Horário
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 