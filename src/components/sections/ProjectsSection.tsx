
import React from 'react';
import { ExternalLink, Github, Database, Server, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce MERN',
      description: 'Plateforme e-commerce complète avec gestion des utilisateurs, panier, paiements Stripe et tableau de bord administrateur.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      features: ['Authentification sécurisée', 'Gestion des commandes', 'Paiements en ligne', 'Panel admin'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Database
    },
    {
      title: 'API REST & Dashboard',
      description: 'API RESTful robuste avec dashboard de monitoring en temps réel et système de notifications.',
      image: '/placeholder.svg',
      technologies: ['Express', 'MongoDB', 'Socket.io', 'React', 'Chart.js', 'Redis'],
      features: ['API documentée', 'Temps réel', 'Analytics', 'Cache Redis'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Server
    },
    {
      title: 'App Mobile & PWA',
      description: 'Application mobile hybride avec fonctionnalités offline et synchronisation cloud.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Expo', 'AsyncStorage', 'Firebase', 'PWA'],
      features: ['Offline first', 'Push notifications', 'Géolocalisation', 'Synchronisation'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      icon: Smartphone
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mes <span className="gradient-text">Projets</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents mettant en œuvre les technologies MERN
            </p>
          </div>

          {/* Grille de projets */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass border-white/20 hover-lift group">
                <div className="grid lg:grid-cols-2 gap-0 h-full">
                  {/* Image du projet */}
                  <div className="relative overflow-hidden rounded-l-lg">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                      <project.icon className="w-24 h-24 text-white/60" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Contenu du projet */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl font-bold text-white mb-3">
                          {project.title}
                        </CardTitle>
                        <p className="text-gray-200 text-base leading-relaxed">
                          {project.description}
                        </p>
                      </CardHeader>

                      <CardContent className="p-0">
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies utilisées</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="bg-white/10 text-white border-white/20">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Fonctionnalités */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-300 mb-3">Fonctionnalités clés</h4>
                          <ul className="text-gray-200 text-sm space-y-1">
                            {project.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 flex-1"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 flex-1"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Démo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-12 animate-fadeInUp">
            <p className="text-gray-200 mb-6">
              Intéressé par mon travail ? Contactez-moi pour discuter de votre projet !
            </p>
            <Button
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 hover-lift"
            >
              Démarrer un projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
