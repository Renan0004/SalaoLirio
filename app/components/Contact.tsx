'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaFacebook, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section 
      id="contato" 
      className="relative bg-gradient-to-b from-black to-primary-950 overflow-hidden py-16 md:py-24 scroll-mt-20"
    >
      {/* Textura de fundo */}
      <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-5" />
      
      <div className="container-custom relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-200 text-sm font-medium tracking-wide border border-primary-500/20 backdrop-blur-sm mb-4"
          >
            Entre em Contato
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-3 font-serif"
          >
            Estamos Aqui para Você
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base"
          >
            Tire suas dúvidas, faça seu agendamento ou nos siga nas redes sociais para ficar por dentro das novidades.
          </motion.p>
        </div>

        {/* Grid Principal */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Coluna Esquerda - Mapa */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-20 blur" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5298927757635!2d-49.3072847!3d-25.6617097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd0a8b74f773%3A0x4b95d19421f4b114!2sR.%20Jaguaria%C3%ADva%2C%201385%20-%20Santa%20Terezinha%2C%20Fazenda%20Rio%20Grande%20-%20PR%2C%2083830-033!5e0!3m2!1spt-BR!2sbr!4v1709762046018!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl relative z-10"
            />
          </motion.div>

          {/* Coluna Direita - Informações */}
          <div className="space-y-4">
            {/* Cards de Informação */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-4"
            >
              {/* Endereço */}
              <div className="bg-primary-900/40 backdrop-blur-sm rounded-xl p-4 border border-primary-500/10">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-500/10 p-2 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Endereço</h3>
                    <p className="text-gray-300 text-sm mb-1">
                      Rua Jaguariaíva, nº 1385,<br />
                      Santa Terezinha, Fazenda Rio Grande, Paraná
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      Como chegar →
                    </a>
                  </div>
                </div>
              </div>

              {/* Horário */}
              <div className="bg-primary-900/40 backdrop-blur-sm rounded-xl p-4 border border-primary-500/10">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-500/10 p-2 rounded-lg">
                    <FaClock className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Horário</h3>
                    <div className="space-y-1 text-sm text-gray-300">
                      <p>Segunda a Sexta: 09:00 - 19:00</p>
                      <p>Sábado: 09:00 - 18:00</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato e Redes Sociais */}
              <div className="bg-primary-900/40 backdrop-blur-sm rounded-xl p-4 border border-primary-500/10">
                <div className="flex items-start gap-3">
                  <div className="bg-primary-500/10 p-2 rounded-lg">
                    <FaPhone className="w-5 h-5 text-primary-400" />
                  </div>
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-white mb-2">Entre em Contato</h3>
                    <div className="space-y-3">
                      {/* WhatsApp */}
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Telefone/WhatsApp</p>
                        <a
                          href="https://wa.me/5541997404952"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-500/10 rounded-lg text-white hover:bg-primary-500/20 transition-colors text-sm"
                        >
                          <FaWhatsapp className="w-4 h-4" />
                          (41) 99740-4952
                        </a>
                      </div>
                      {/* Redes Sociais */}
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Redes Sociais</p>
                        <div className="flex gap-2">
                          <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-primary-500/10 rounded-lg text-white hover:bg-primary-500/20 transition-colors text-sm"
                          >
                            <FaInstagram className="w-4 h-4" />
                            Instagram
                          </a>
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 py-1.5 bg-primary-500/10 rounded-lg text-white hover:bg-primary-500/20 transition-colors text-sm"
                          >
                            <FaFacebook className="w-4 h-4" />
                            Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Botão de WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <a
                href="https://wa.me/5541997404952"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-sm md:text-base"
              >
                <FaWhatsapp className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 