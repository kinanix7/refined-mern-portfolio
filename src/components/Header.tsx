
import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Projets', href: '#projects' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Portfolio
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3">
                <span className="text-white text-sm">Bonjour, {user.name}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={logout}
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Déconnexion
                </Button>
              </div>
            ) : (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection('#auth')}
                  className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Connexion
                </Button>
                <Button
                  size="sm"
                  onClick={() => scrollToSection('#auth')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <User className="w-4 h-4 mr-2" />
                  S'inscrire
                </Button>
              </div>
            )}
          </div>

          {/* Menu Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-blue-300 transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 mt-3">
                {user ? (
                  <Button
                    variant="outline"
                    onClick={logout}
                    className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Déconnexion
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection('#auth')}
                      className="w-full bg-transparent border-white text-white hover:bg-white hover:text-gray-900"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Connexion
                    </Button>
                    <Button
                      onClick={() => scrollToSection('#auth')}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      <User className="w-4 h-4 mr-2" />
                      S'inscrire
                    </Button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
