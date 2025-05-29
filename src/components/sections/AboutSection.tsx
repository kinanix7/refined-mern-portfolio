
import React from 'react';
import { Code, Lightbulb, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: 'Code de qualité',
      description: 'J\'écris du code propre, maintenable et bien documenté en suivant les meilleures pratiques.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à la recherche des dernières technologies pour créer des solutions modernes.'
    },
    {
      icon: Target,
      title: 'Orienté résultats',
      description: 'Je me concentre sur la livraison de projets qui répondent aux besoins métier.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'J\'aime travailler en équipe et partager mes connaissances avec les autres développeurs.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À propos de <span className="gradient-text">moi</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Développeur passionné avec 3 ans d'expérience dans le développement web moderne
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte de présentation */}
            <div className="animate-fadeInUp">
              <div className="glass rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold text-white mb-6">Mon parcours</h3>
                <div className="space-y-4 text-gray-200">
                  <p>
                    Diplômé en informatique, je me suis spécialisé dans le développement web 
                    avec la stack MERN (MongoDB, Express, React, Node.js). Ma passion pour 
                    la technologie m'a mené à explorer continuellement de nouveaux outils 
                    et frameworks.
                  </p>
                  <p>
                    J'ai eu l'opportunité de travailler sur des projets variés, allant de 
                    sites web vitrines à des applications web complexes avec gestion 
                    d'utilisateurs, paiements en ligne et APIs RESTful.
                  </p>
                  <p>
                    Aujourd'hui, je me concentre sur l'apprentissage des technologies 
                    DevOps (Docker, CI/CD) pour proposer des solutions complètes et 
                    robustes à mes clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Image ou statistiques */}
            <div className="animate-fadeInUp">
              <div className="glass rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold text-white mb-6">En quelques chiffres</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                    <div className="text-gray-200">Projets réalisés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">3</div>
                    <div className="text-gray-200">Ans d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                    <div className="text-gray-200">Technologies maîtrisées</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-gray-200">Clients satisfaits</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Mes valeurs</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass border-white/20 hover-lift group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-gray-200 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
