'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      const savedUser = localStorage.getItem('user');

      if (token && savedUser) {
        setUser(JSON.parse(savedUser));
        // Optionnel : vérifier la validité du token avec l'API
        // const response = await api.get('/auth/me');
        // setUser(response.data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    const MOCK_MODE = true; // <-- active/désactive facilement

    if (MOCK_MODE) {
      const fakeUser = {
        firstName: "John",
        lastName: "Doe",
        email,
      };

      // Simule un token
      const fakeToken = "mocked_token_123";

      localStorage.setItem("auth_token", fakeToken);
      // Set a cookie so Next.js middleware (which runs server-side) can read it.
      try {
        // cookie name matches what middleware expects: 'auth-token'
        document.cookie = `auth-token=${fakeToken}; path=/; max-age=${60 * 60 * 24 * 7}`;
      } catch (e) {
        console.warn('Could not set auth cookie (client environment):', e);
      }
      localStorage.setItem("user", JSON.stringify(fakeUser));

      setUser(fakeUser);
      toast.success(`Bienvenue ${fakeUser.firstName} !`);
      console.log("caca");
      
      router.push("/dashboard");
      return;
    } else {
        try {
          const response = await api.post('/auth/login', {
            email,
            password,
          });
    
          const { user, token } = response.data;
    
              localStorage.setItem('auth_token', token.value);
              try {
                // Ensure cookie name matches middleware: 'auth-token'
                document.cookie = `auth-token=${token.value}; path=/; max-age=${60 * 60 * 24 * 7}`;
              } catch (e) {
                console.warn('Could not set auth cookie (client environment):', e);
              }
          localStorage.setItem('user', JSON.stringify(user));
    
          setUser(user);
          toast.success(`Bienvenue ${user.firstName} !`);
          router.push('/dashboard');
        } catch (error: unknown) {
            console.error("Login error:", error);

            if (error instanceof AxiosError) {
              const status = error.response?.status;

              if (status === 401) {
                throw new Error("Email ou mot de passe incorrect");
              } else if (status === 422) {
                throw new Error("Veuillez vérifier vos informations");
              } else {
                throw new Error("Une erreur est survenue. Veuillez réessayer.");
              }
            }

            // Si ce n'est même pas une erreur Axios
            throw new Error("Une erreur inconnue est survenue.");
          }
    }
  };

  const logout = async () => {
    try {
      // Appel optionnel à l'API pour invalider le token côté serveur
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user');
      try {
        // Remove cookie on logout
        document.cookie = 'auth-token=; Max-Age=0; path=/';
      } catch (e: unknown) {
        console.log('Could not remove auth cookie (client environment):', e);
        // ignore
      }
      setUser(null);
      router.push('/login');
      toast.success('Déconnexion réussie');
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};  