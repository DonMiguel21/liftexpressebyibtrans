import React from 'react';
import { Phone, Mail, BookText as TikTok } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Liftexpresse by IB Trans</h3>
            <p className="text-gray-400 mb-6">
              Solutions professionnelles de levage, déménagement et transport pour particuliers et entreprises.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.tiktok.com/@liftexpresse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="TikTok"
              >
                <TikTok size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Monte-meuble</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Déménagement</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Transport et livraison</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-primary-500" />
                <a href="tel:0695171502" className="text-gray-400 hover:text-white transition-colors">
                  06 95 17 15 02
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-primary-500" />
                <a href="mailto:ib.trans77@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  ib.trans77@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <TikTok size={18} className="mr-3 mt-1 text-primary-500" />
                <a 
                  href="https://www.tiktok.com/@liftexpresse" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  @liftexpresse
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 text-center text-gray-500">
          <p>&copy; {currentYear} Liftexpresse by IB Trans. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;