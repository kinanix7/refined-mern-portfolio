
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Clock, Coffee } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simuler l'envoi d'email (intégration EmailJS ou backend à configurer)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simuler l'envoi d'un email de confirmation
      console.log('Email envoyé avec les données:', formData);
      
      toast({
        title: "Message envoyé avec succès !",
        description: "Je vous répondrai dans les plus brefs délais. Un email de confirmation vous a été envoyé.",
      });

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        timeline: ''
      });

    } catch (error) {
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur est survenue. Veuillez réessayer ou me contacter directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@portfolio.dev',
      link: 'mailto:contact@portfolio.dev'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 6 12 34 56 78',
      link: 'tel:+33612345678'
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Paris, France',
      link: null
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      value: 'Lun-Ven, 9h-18h',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:contact@portfolio.dev',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactez-<span className="gradient-text">moi</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Parlons-en ensemble !
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <Card className="glass border-white/20 hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    Démarrons votre projet
                  </CardTitle>
                  <p className="text-gray-200">
                    Remplissez ce formulaire et je vous recontacterai rapidement
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">Nom complet *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Jean Dupont"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="jean@entreprise.com"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>

                    {/* Informations projet */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-white">Entreprise</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Mon Entreprise SAS"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectType" className="text-white">Type de projet *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)} required>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Site web vitrine</SelectItem>
                            <SelectItem value="webapp">Application web</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="mobile">Application mobile</SelectItem>
                            <SelectItem value="api">API / Backend</SelectItem>
                            <SelectItem value="maintenance">Maintenance / Support</SelectItem>
                            <SelectItem value="other">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Budget et timeline */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget" className="text-white">Budget estimé</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Sélectionnez un budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1k-5k">1 000€ - 5 000€</SelectItem>
                            <SelectItem value="5k-10k">5 000€ - 10 000€</SelectItem>
                            <SelectItem value="10k-25k">10 000€ - 25 000€</SelectItem>
                            <SelectItem value="25k+">25 000€+</SelectItem>
                            <SelectItem value="discuss">À discuter</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline" className="text-white">Délai souhaité</Label>
                        <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="Sélectionnez un délai" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Le plus tôt possible</SelectItem>
                            <SelectItem value="1month">Dans le mois</SelectItem>
                            <SelectItem value="3months">Dans les 3 mois</SelectItem>
                            <SelectItem value="6months">Dans les 6 mois</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Décrivez votre projet *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre projet, vos besoins, contraintes techniques, fonctionnalités souhaitées..."
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                        required
                      />
                    </div>

                    {/* Bouton d'envoi */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 text-lg hover-lift"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="space-y-6">
              {/* Coordonnées */}
              <Card className="glass border-white/20 hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white mb-4">
                    Informations de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm">{info.title}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Réseaux sociaux */}
              <Card className="glass border-white/20 hover-lift">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white mb-4">
                    Suivez-moi
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white transition-all duration-300 hover-lift ${social.color}`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Call to action */}
              <Card className="glass border-white/20">
                <CardContent className="p-6 text-center">
                  <Coffee className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Prenons un café !
                  </h3>
                  <p className="text-gray-200 text-sm mb-4">
                    Discutons de votre projet autour d'un café (virtuel ou non)
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Planifier un appel
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Note sur le processus */}
          <div className="mt-16 text-center glass rounded-2xl p-8 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-white mb-6">
              Comment ça se passe après ?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Première discussion</h4>
                <p className="text-gray-200 text-sm">
                  Je vous recontacte sous 24h pour comprendre vos besoins
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Proposition détaillée</h4>
                <p className="text-gray-200 text-sm">
                  Devis personnalisé avec timeline et livrables
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Développement</h4>
                <p className="text-gray-200 text-sm">
                  Suivi régulier et livraisons itératives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
