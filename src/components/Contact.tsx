import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, BookText as TikTok, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    // In a real implementation, you would send the form data to a backend here
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">
            Besoin d'un devis ou d'informations supplémentaires ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Téléphone</h4>
                    <a href="tel:0695171502" className="text-secondary-600 hover:text-primary-500 transition-colors">
                      06 95 17 15 02
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <a href="mailto:ib.trans77@gmail.com" className="text-secondary-600 hover:text-primary-500 transition-colors">
                      ib.trans77@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mr-4">
                    <TikTok size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">TikTok</h4>
                    <a 
                      href="https://www.tiktok.com/@liftexpresse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary-600 hover:text-primary-500 transition-colors"
                    >
                      @liftexpresse
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6">Zones d'intervention</h3>
                <p className="text-secondary-600 mb-4">
                  Nous intervenons principalement en Île-de-France et dans les départements limitrophes.
                </p>
                <p className="text-secondary-600">
                  Pour des prestations dans d'autres régions, n'hésitez pas à nous contacter pour étudier votre demande.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl p-8 shadow-service flex flex-col items-center justify-center text-center h-full"
              >
                <CheckCircle size={64} className="text-success-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Demande envoyée !</h3>
                <p className="text-secondary-600 mb-6">
                  Merci pour votre message. Nous vous recontacterons dans les plus brefs délais.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-primary"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <ContactForm onSubmit={handleFormSubmit} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;