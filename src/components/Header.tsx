import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail, BookText as TikTok } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-20">
            <img 
              src="/logo.jpg" 
              alt="Liftexpresse by IB Trans" 
              className="h-12 md:h-16"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-secondary-800 hover:text-primary-500 font-medium transition-colors">
              Nos Services
            </a>
            <a href="#contact" className="text-secondary-800 hover:text-primary-500 font-medium transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-6">
              <a 
                href="tel:0695171502" 
                className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
                title="Appelez-nous"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">06 95 17 15 02</span>
              </a>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="z-20 md:hidden p-2 text-secondary-800 focus:outline-none"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-white z-10 md:hidden`}
      >
        <div className="container-custom h-full flex flex-col justify-center">
          <nav className="flex flex-col items-center space-y-8 pt-16">
            <a 
              href="#services" 
              className="text-2xl font-semibold text-secondary-800 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Nos Services
            </a>
            <a 
              href="#contact" 
              className="text-2xl font-semibold text-secondary-800 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col items-center space-y-4 mt-8">
              <a 
                href="tel:0695171502" 
                className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
              >
                <Phone size={20} className="mr-2" />
                <span className="font-medium">06 95 17 15 02</span>
              </a>
              <a 
                href="mailto:ib.trans77@gmail.com" 
                className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
              >
                <Mail size={20} className="mr-2" />
                <span className="font-medium">ib.trans77@gmail.com</span>
              </a>
              <a 
                href="https://www.tiktok.com/@liftexpresse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary-500 hover:text-primary-600 transition-colors"
              >
                <TikTok size={20} className="mr-2" />
                <span className="font-medium">@liftexpresse</span>
              </a>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;