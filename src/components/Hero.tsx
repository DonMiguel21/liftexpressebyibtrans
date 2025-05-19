import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-primary-50 to-white pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-secondary-900 leading-tight">
              Solutions de <span className="text-primary-500">levage</span> en hauteur
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 mb-8 md:mb-10">
              Liftexpresse by IBTrans vous accompagne pour tous vos besoins de levage, transport et déménagement en hauteur, jusqu'au 12e étage. Intervention rapide sur Paris et toute l'Île-de-France.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="#contact" className="btn btn-primary w-full sm:w-auto">
                Être rappelé(e)
              </a>
              <a href="#services" className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors w-full sm:w-auto justify-center">
                Nos services
                <ArrowDown size={18} className="ml-2 animate-bounce" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img 
              src="https://images.pexels.com/photos/4246097/pexels-photo-4246097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Service de levage professionnel" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform -skew-y-3 -mb-10 hidden md:block" />
    </section>
  );
};

export default Hero;