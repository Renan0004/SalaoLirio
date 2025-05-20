'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaClock, FaPhone, FaCode } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ],
  social: [
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/5541997404952', color: 'text-green-500' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com', color: 'text-pink-500' },
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com', color: 'text-blue-500' },
  ],
  contato: {  
    endereco: 'Rua Jaguariaíva, nº 1385, Santa Terezinha',
    cidade: 'Fazenda Rio Grande, Paraná',
    telefone: '(41) 99740-4952',
    horario: {
      semana: 'Segunda a Sexta: 09:00 - 19:00',
      sabado: 'Sábado: 09:00 - 18:00',
      domingo: 'Domingo: Fechado',
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black to-primary-950">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Seção Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white">Salão Lírio</h3>
            <p className="text-gray-400">
              Transformando sua beleza e autoestima com excelência e dedicação.
            </p>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800/50 ${item.color} hover:bg-gray-700/50 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{navigation.contato.horario.semana}</li>
              <li>{navigation.contato.horario.sabado}</li>
              <li>{navigation.contato.horario.domingo}</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  {navigation.contato.endereco}<br />
                  {navigation.contato.cidade}
                </div>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="w-5 h-5 text-primary-400" />
                {navigation.contato.telefone}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {currentYear} Salão Lírio. Todos os direitos reservados.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <FaCode className="text-primary-400" />
                <span>Desenvolvido por</span>
                <motion.a
                  href="https://www.instagram.com/renan_almeidaa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  Renan Dirceu
                  <FaInstagram className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 