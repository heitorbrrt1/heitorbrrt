'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  
  activeSection: string;
  setActiveSection: (section: string) => void;
  
  notification: string | null;
  showNotification: (message: string, duration?: number) => void;
  clearNotification: () => void;
}

const defaultContext: AppContextType = {
  theme: 'dark',
  setTheme: () => {},
  activeSection: 'home',
  setActiveSection: () => {},
  notification: null,
  showNotification: () => {},
  clearNotification: () => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useApp = () => useContext(AppContext);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string, duration = 3000) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, duration);
  };

  const clearNotification = () => {
    setNotification(null);
  };

  const value: AppContextType = {
    theme,
    setTheme,
    activeSection,
    setActiveSection,
    notification,
    showNotification,
    clearNotification,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};