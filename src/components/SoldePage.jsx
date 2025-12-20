// components/SoldePage.jsx

import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

export default function SoldePage({ navigate }) {
  const { user } = useAuth();

  useEffect(() => {
    // Rediriger immédiatement vers le dashboard
    // Le dashboard affichera automatiquement la notification si isBlocked = true
    navigate('dashboard');
  }, [navigate]);

  // Afficher un loader pendant la redirection
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement...</p>
      </div>
    </div>
  );
}