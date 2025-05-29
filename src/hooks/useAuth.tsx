
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simuler la vérification de l'authentification au chargement
    const storedUser = localStorage.getItem('portfolio_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Pour la démo, accepter n'importe quel email/mot de passe
      const userData = {
        id: '1',
        name: email.split('@')[0],
        email: email
      };
      
      setUser(userData);
      localStorage.setItem('portfolio_user', JSON.stringify(userData));
      
      toast({
        title: "Connexion réussie",
        description: `Bienvenue ${userData.name} !`,
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Erreur de connexion",
        description: "Vérifiez vos identifiants",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true);
    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: Date.now().toString(),
        name: name,
        email: email
      };
      
      setUser(userData);
      localStorage.setItem('portfolio_user', JSON.stringify(userData));
      
      toast({
        title: "Inscription réussie",
        description: `Bienvenue ${userData.name} !`,
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue",
        variant: "destructive",
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('portfolio_user');
    toast({
      title: "Déconnexion",
      description: "À bientôt !",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
