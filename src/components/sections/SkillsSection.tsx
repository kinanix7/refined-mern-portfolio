
import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React / Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'APIs RESTful', level: 90 },
        { name: 'Authentication JWT', level: 85 },
        { name: 'Microservices', level: 75 }
      ]
    },
    {
      title: 'Base de données',
      icon: Database,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 87 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma ORM', level: 82 }
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 88 },
        { name: 'App Deployment', level: 75 }
      ]
    },
    {
      title: 'DevOps',
      icon: Settings,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'AWS / Vercel', level: 78 }
      ]
    },
    {
      title: 'Outils',
      icon: Code,
      color: 'from-teal-500 to-green-500',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Figma', level: 75 },
        { name: 'Webpack/Vite', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et des technologies que je maîtrise
            </p>
          </div>

          {/* Grille de compétences */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass border-white/20 hover-lift group">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                          <span className="text-gray-300">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-white/10"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technologies supplémentaires */}
          <div className="mt-16 text-center animate-fadeInUp">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies familières</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'GraphQL', 'Socket.io', 'Stripe', 'Firebase', 'Supabase', 
                'Jest', 'Cypress', 'Storybook', 'Linux', 'Nginx', 'PM2'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-full text-white font-medium hover-lift cursor-default transition-all duration-300 hover:bg-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center glass rounded-2xl p-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Je suis toujours ouvert aux nouveaux défis et aux projets innovants. 
              Contactez-moi pour discuter de vos besoins techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover-lift"
              >
                Télécharger mon CV
              </a>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 hover-lift"
              >
                Démarrer un projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
