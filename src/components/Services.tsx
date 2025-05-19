import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Home, Package } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="bg-white rounded-xl shadow-service p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-50 text-primary-500 mb-6">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Des solutions professionnelles adaptées à vos besoins en levage, déménagement et transport.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ServiceCard 
            icon={<Truck size={32} />}
            title="Monte-meuble"
            description="Levage de produits lourds ou dans des lieux difficiles d'accès, jusqu'au 12e étage. Équipement spécialisé pour garantir sécurité et efficacité."
            delay={0.1}
          />
          
          <ServiceCard 
            icon={<Home size={32} />}
            title="Déménagement"
            description="Service de déménagement professionnel et rapide. Notre équipe expérimentée prend soin de vos biens du début à la fin de votre déménagement."
            delay={0.2}
          />
          
          <ServiceCard 
            icon={<Package size={32} />}
            title="Transport et livraison"
            description="Solutions de transport et livraison pour particuliers et entreprises. Service ponctuel et fiable pour tous types de marchandises."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;