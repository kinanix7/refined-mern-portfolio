
import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo et description */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold gradient-text mb-4">Portfolio</div>
              <p className="text-gray-300 mb-4 max-w-md">
                Développeur Full Stack MERN passionné par la création d'expériences web modernes et performantes.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:contact@portfolio.dev"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Navigation rapide */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {[
                  { label: 'Accueil', href: '#home' },
                  { label: 'À propos', href: '#about' },
                  { label: 'Projets', href: '#projects' },
                  { label: 'Compétences', href: '#skills' },
                  { label: 'Contact', href: '#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Développement Web</li>
                <li>Applications MERN</li>
                <li>APIs RESTful</li>
                <li>DevOps & Déploiement</li>
                <li>Maintenance & Support</li>
                <li>Conseil Technique</li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
                © {currentYear} Portfolio. Fait avec{' '}
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                en France
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">
                  Propulsé par React, TypeScript & Tailwind
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white hover:bg-white/10"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
