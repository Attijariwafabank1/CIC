// components/DashboardPage.jsx

import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import BlockedAccountModal from './BlockedAccountModal';
import UserService from '../services/UserService';
import { 
  Wallet, Clock, ArrowLeftRight, CreditCard, FileText,
  LogOut, Send, QrCode, Calendar, BookOpen, MapPin,
  PiggyBank, TrendingUp, ChevronRight
} from 'lucide-react';

export default function DashboardPage({ navigate }) {
  const { user, logout, updateProfile, refreshUser } = useAuth();
  const [showBlockedModal, setShowBlockedModal] = useState(false);
  const [activeTab, setActiveTab] = useState('solde');

  useEffect(() => {
    console.log('📊 DashboardPage monté');
    
    if (refreshUser) {
      const freshUser = refreshUser();
      console.log('🔄 Utilisateur rafraîchi:', freshUser?.name, 'Solde:', freshUser?.balance);
    }
    
    if (user && user.isBlocked) {
      setShowBlockedModal(true);
    }
  }, []);

  useEffect(() => {
    console.log('👤 User dans Dashboard:', user?.name, 'Solde:', user?.balance);
    
    if (!user) {
      console.warn('⚠️ Pas d\'utilisateur dans Dashboard, redirection...');
      navigate('login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    console.log('🚪 Déconnexion depuis Dashboard');
    logout();
    navigate('home');
  };

  const handleUnlockAccount = async () => {
    try {
      setShowBlockedModal(false);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleTabClick = (tabId) => {
    console.log('📍 Clic sur tab:', tabId);
    setActiveTab(tabId);
    
    if (tabId === 'solde') {
      if (user && user.isBlocked) {
        setShowBlockedModal(true);
      }
    } else {
      navigate(tabId);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement de votre compte...</p>
        </div>
      </div>
    );
  }

  const balance = user?.balance || 0;
  const lastConnection = new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }) + ' ' + new Date().toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const menuItems = [
    { id: 'solde', icon: Wallet, label: 'Solde' },
    { id: 'historique', icon: Clock, label: 'Historique' },
    { id: 'virement', icon: ArrowLeftRight, label: 'Virement' },
    { id: 'cartes', icon: CreditCard, label: 'Cartes' },
    { id: 'rib', icon: FileText, label: 'RIB' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {showBlockedModal && (
        <BlockedAccountModal 
          user={user}
          onClose={() => setShowBlockedModal(false)}
          onUnlock={handleUnlockAccount}
        />
      )}

      {/* Header fixe - Mobile optimisé */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-40">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:max-w-4xl py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img src="images/logo cic.jpeg" alt="" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-600 text-white rounded-lg hover:bg-emerald-700 transition font-medium text-sm sm:text-base"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Déconnexion</span>
            <span className="sm:hidden">Sortir</span>
          </button>
        </div>
      </header>

      {/* Contenu principal - Mobile first */}
      <main className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:max-w-4xl py-4 sm:py-6 mt-16 sm:mt-20 mb-20 sm:mb-24">
        
        {/* Carte d'information utilisateur - Responsive */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            {user?.name}
          </h1>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2 text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="truncate">{user?.location || 'Non renseigné'}</span>
          </div>

          <div className="mb-2 text-sm sm:text-base">
            <span className="text-gray-600">Gestionnaire: </span>
            <span className="text-emerald-600 font-medium">{user?.manager || 'Non assigné'}</span>
          </div>

          <div className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
            Dernière connexion: {lastConnection}
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span className="font-medium">Actif</span>
          </div>

          <div className="border-t pt-3 sm:pt-4">
            <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1 sm:mb-2">
              {balance.toLocaleString('fr-FR', { 
                minimumFractionDigits: 2,
                maximumFractionDigits: 2 
              })}€
            </div>
            <div className="text-gray-600 text-sm sm:text-base">Solde disponible</div>
          </div>
        </div>

        {/* Boutons d'actions - Responsive */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          <button 
            className="bg-green-700 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition shadow-sm" 
            onClick={() => navigate('virement-rapide')}
          >
            <Send className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-medium text-sm sm:text-lg text-center leading-tight">Virement rapide</span>
          </button>

          <button 
            className="bg-green-700 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition shadow-sm"  
            onClick={() => navigate('payer-qr')}
          >
            <QrCode className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-medium text-sm sm:text-lg text-center leading-tight">Payer par QR</span>
          </button>

          <button 
            className="bg-green-700 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition shadow-sm" 
            onClick={() => navigate('virement-programme')}
          >
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-medium text-sm sm:text-lg text-center leading-tight">Virement programmé</span>
          </button>

          <button 
            className="bg-green-700 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 transition shadow-sm"  
            onClick={() => navigate('chequier')}
          >
            <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
            <span className="font-medium text-sm sm:text-lg text-center leading-tight">Chéquier</span>
          </button>
        </div>

        {/* Avertissement si compte bloqué - Responsive */}
        {user?.isBlocked && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <div>
                <p className="text-xs sm:text-sm font-medium text-yellow-800 mb-1">
                  Accès limité
                </p>
                <p className="text-xs text-yellow-700">
                  Votre compte est actuellement bloqué. Certaines fonctionnalités sont indisponibles.
                </p>
                <button 
                  onClick={() => setShowBlockedModal(true)}
                  className="mt-2 text-xs text-yellow-800 underline hover:text-yellow-900"
                >
                  Voir les détails
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Section Vos comptes - Responsive */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Vos comptes</h2>
            <button className="text-emerald-600 font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm sm:text-base">
              <span className="hidden sm:inline">Voir tout</span>
              <span className="sm:hidden">Tout</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {user?.accounts?.map((account) => {
              const getIcon = (iconName) => {
                switch(iconName) {
                  case 'wallet': return Wallet;
                  case 'piggybank': return PiggyBank;
                  case 'trending': return TrendingUp;
                  default: return Wallet;
                }
              };
              const Icon = getIcon(account.icon);

              return (
                <div 
                  key={account.id}
                  className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-1 truncate">
                        {account.type}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 truncate">
                        {account.number}
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-800">
                        {account.balance.toLocaleString('fr-FR', { 
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2 
                        })} €
                      </p>
                    </div>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section Dernières opérations - Responsive */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Dernières opérations</h2>

          {/* Transactions récentes - Responsive */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Transactions récentes</h3>
              <button 
                onClick={() => navigate('historique')}
                className="text-emerald-600 font-medium hover:underline text-xs sm:text-sm"
              >
                <span className="hidden sm:inline">Voir l'historique</span>
                <span className="sm:hidden">Historique</span>
              </button>
            </div>

            <div className="space-y-2 sm:space-y-4">
              {user?.transactions?.slice(0, 5).map((transaction) => (
                <div 
                  key={transaction.id}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <ArrowLeftRight className="text-emerald-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-gray-800 text-sm sm:text-base truncate">{transaction.type}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{transaction.date}</p>
                    <p className="text-xs sm:text-sm text-gray-600 font-mono truncate">{transaction.reference}</p>
                  </div>
                  <div className={`ml-auto text-base sm:text-xl font-bold whitespace-nowrap ${
                    transaction.isCredit ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {transaction.isCredit ? '+' : '-'}{transaction.amount.toLocaleString('fr-FR', { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2 
                    })} €
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dépenses par catégorie - Responsive */}
          <div className="bg-white rounded-lg sm:rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">Dépenses par catégorie</h3>
            <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">{user?.expenses?.month}</p>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-xs sm:max-w-sm mb-4 sm:mb-6">
                <svg width="100%" height="100%" viewBox="0 0 300 300" className="w-full h-auto">
                  <circle 
                    cx="150" 
                    cy="150" 
                    r="120" 
                    fill="none" 
                    stroke="#f3f4f6" 
                    strokeWidth="60"
                  />
                  {user?.expenses?.categories.map((category, index) => {
                    const total = user.expenses.categories.reduce((sum, cat) => sum + cat.value, 0);
                    
                    const previousValues = user.expenses.categories
                      .slice(0, index)
                      .reduce((sum, cat) => sum + cat.value, 0);
                    
                    const startAngle = -90 + (previousValues / total) * 360;
                    const endAngle = startAngle + (category.value / total) * 360;
                    
                    const startX = 150 + 120 * Math.cos((startAngle * Math.PI) / 180);
                    const startY = 150 + 120 * Math.sin((startAngle * Math.PI) / 180);
                    const endX = 150 + 120 * Math.cos((endAngle * Math.PI) / 180);
                    const endY = 150 + 120 * Math.sin((endAngle * Math.PI) / 180);
                    
                    const largeArcFlag = category.value / total > 0.5 ? 1 : 0;
                    
                    return (
                      <path
                        key={category.name}
                        d={`M 150 150 L ${startX} ${startY} A 120 120 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                        fill={category.color}
                      />
                    );
                  })}
                  <circle cx="150" cy="150" r="80" fill="white" />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
                {user?.expenses?.categories.map((category) => (
                  <div key={category.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 sm:w-4 sm:h-4 rounded"
                      style={{ backgroundColor: category.color }}
                    ></div>
                    <span className="text-xs sm:text-sm text-gray-700">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation inférieure fixe - Responsive */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="w-full mx-auto px-1 sm:px-2 lg:max-w-4xl">
          <div className="flex items-center justify-around">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center gap-0.5 sm:gap-1 py-2 sm:py-3 px-2 sm:px-4 transition ${
                  activeTab === item.id
                    ? 'text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}