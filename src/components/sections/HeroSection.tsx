
import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        <div className="max-w-4xl mx-auto animate-fadeInUp">
          {/* Avatar */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold gradient-text">
                JD
              </div>
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Développeur{' '}
            <span className="gradient-text">Full Stack</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Passionné par la création d'expériences web modernes et performantes avec la stack MERN
          </p>

          {/* Spécialités */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Docker'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-white font-medium hover-lift cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg hover-lift"
            >
              Voir mes projets
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg hover-lift"
            >
              Me contacter
              <Mail className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Liens sociaux */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-200 hover-lift"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-colors duration-200 hover-lift"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:contact@portfolio.com"
              className="text-white hover:text-blue-300 transition-colors duration-200 hover-lift"
            >
              <Mail className="w-8 h-8" />
            </a>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-blue-300 hover:bg-transparent p-0"
            >
              <Download className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;
