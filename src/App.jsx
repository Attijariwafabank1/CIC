import React, { useState, useEffect, useRef } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import AlertBanner from './components/AlertBanner';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import ServicesSection from './components/ServicesSection';
import LocationSection from './components/LocationSection';
import BecomeClientSection from './components/BecomeClientSection';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import InscriptionPage from './components/InscriptionPage';
import DashboardPage from './components/DashboardPage';
import HistoriquePage from './components/HistoriquePage';
import VirementPage from './components/VirementPage';
import CartesPage from './components/CartesPage';
import RIBPage from './components/RIBPage';
import RecuPage from './components/RecuPage';
// Nouvelles pages
import VirementRapide from './components/VirementRapide';
import PayerQR from './components/PayerQR';
import VirementProgramme from './components/VirementProgramme';
import Chequier from './components/Chequier';
import AjouterBeneficiaire from './components/AjouterBeneficiaire';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');
  const [virementData, setVirementData] = useState(null);
  
  const hasRedirectedToDashboard = useRef(false);

  useEffect(() => {
    if (user && currentPage === 'home' && !hasRedirectedToDashboard.current) {
      console.log('🏠 Redirection automatique vers dashboard');
      setCurrentPage('dashboard');
      hasRedirectedToDashboard.current = true;
    }
    
    if (!user) {
      hasRedirectedToDashboard.current = false;
    }
  }, [user, currentPage]);

  const navigate = (page) => {
    console.log('🧭 Navigation vers:', page);
    setCurrentPage(page);
  };

  const handleVirementSuccess = (data) => {
    console.log('✅ App.jsx - Callback virement reçu');
    console.log('📦 Données du virement:', data);
    setVirementData(data);
    console.log('💾 Données sauvegardées dans App.jsx, état virementData mis à jour');
  };

  // Afficher un loader pendant la vérification de l'authentification
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Page de connexion
  if (currentPage === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  // Page d'inscription
  if (currentPage === 'inscription') {
    return <InscriptionPage navigate={navigate} />;
  }

  // Page Dashboard
  if (currentPage === 'dashboard' || currentPage === 'solde') {
    return <DashboardPage navigate={navigate} />;
  }

  // Page Historique
  if (currentPage === 'historique') {
    return <HistoriquePage navigate={navigate} />;
  }

  // Page Virement
  if (currentPage === 'virement') {
    return (
      <VirementPage 
        navigate={navigate} 
        onVirementSuccess={handleVirementSuccess}
      />
    );
  }

  // Page Reçu
  if (currentPage === 'recu') {
    console.log('📄 Affichage de RecuPage avec virementData:', virementData);
    return (
      <RecuPage 
        navigate={navigate} 
        virementData={virementData}
      />
    );
  }

  // Page Cartes
  if (currentPage === 'cartes') {
    return <CartesPage user={user} navigate={navigate} />;
  }

  // Page RIB
  if (currentPage === 'rib') {
    return <RIBPage user={user} navigate={navigate} />;
  }

  // NOUVELLES PAGES
  if (currentPage === 'virement-rapide') {
    return <VirementRapide navigate={navigate} />;
  }
  
  if (currentPage === 'ajouter-beneficiaire') {
    return <AjouterBeneficiaire navigate={navigate} />;
  }

  if (currentPage === 'payer-qr') {
    return <PayerQR navigate={navigate} />;
  }

  if (currentPage === 'virement-programme') {
    return <VirementProgramme navigate={navigate} />;
  }

  if (currentPage === 'chequier') {
    return <Chequier navigate={navigate} />;
  }

  // Page d'accueil
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigateToLogin={() => navigate('login')}
        onNavigateToInscription={() => navigate('inscription')}
      />
      <AlertBanner onNavigateToLogin={() => navigate('login')}
       onNavigateToInscription={() => navigate('inscription')} />
      <HeroSection />
      <FeatureCards onNavigateToLogin={() => navigate('login')} />
      <ServicesSection onNavigateToLogin={() => navigate('login')} 
      onNavigateToInscription={() => navigate('inscription')} />
      <LocationSection onNavigateToLogin={() => navigate('login')} />
      <BecomeClientSection 
        onNavigateToLogin={() => navigate('login')}
        onNavigateToInscription={() => navigate('inscription')}
      />
      <Footer onNavigateToLogin={() => navigate('login')} />
    </div>
  );
}

// Composant principal avec AuthProvider
export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}