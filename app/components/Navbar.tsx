'use client'; 

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaHome } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 80; // Altura aproximada da navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/85 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-primary-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={(e) => scrollToSection(e, '#inicio')}
              className="text-2xl font-serif text-white hover:text-primary-200 transition-colors duration-300"
            >
              <span className="relative">
                Lírio
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-primary-500/50 to-transparent" />
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: '#inicio', label: 'Início', icon: FaHome },
                { href: '#servicos', label: 'Serviços' },
                { href: '#sobre', label: 'Sobre Nós' },
                { href: '#depoimentos', label: 'Depoimentos' },
                { href: '#contato', label: 'Contato' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-300 relative group flex items-center gap-2"
                >
                  {item.icon && <item.icon className="text-lg" />}
                  <span>{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary-500 to-transparent group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 p-2 text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-3' : 'top-3'
                  }`}
                />
                <span
                  className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/98 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-center justify-center h-full space-y-8"
              >
                {[
                  { href: '#inicio', label: 'Início', icon: FaHome },
                  { href: '#servicos', label: 'Serviços' },
                  { href: '#sobre', label: 'Sobre Nós' },
                  { href: '#depoimentos', label: 'Depoimentos' },
                  { href: '#contato', label: 'Contato' }
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-white/90 hover:text-white transition-colors text-2xl font-serif flex items-center gap-2"
                  >
                    {item.icon && <item.icon />}
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 