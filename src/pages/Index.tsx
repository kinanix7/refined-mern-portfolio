
import React from 'react';
import { AuthProvider } from '@/hooks/useAuth';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import AuthSection from '@/components/sections/AuthSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        {/* Header avec navigation */}
        <Header />

        {/* Contenu principal */}
        <main>
          {/* Section Hero */}
          <HeroSection />

          {/* Section À propos */}
          <AboutSection />

          {/* Section Projets */}
          <ProjectsSection />

          {/* Section Compétences */}
          <SkillsSection />

          {/* Section Authentification */}
          <AuthSection />

          {/* Section Contact */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default Index;
