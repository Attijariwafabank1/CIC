// components/HistoriquePage.jsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  ArrowLeft, Search, Filter, ArrowUpRight, ArrowDownRight, 
  Calendar, Download, Wallet, Clock, ArrowLeftRight, CreditCard, FileText
} from 'lucide-react';

export default function HistoriquePage({ navigate }) {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('historique');
  const [filterType, setFilterType] = useState('all'); // Ajout du filtre

  // Utiliser les transactions du user
  const allTransactions = user?.transactions || [];

  // Filtrer par type ET par recherche
  const filteredTransactions = allTransactions.filter(transaction => {
    const matchesSearch = transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.reference?.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'virement') return matchesSearch && transaction.type.toLowerCase().includes('virement');
    if (filterType === 'achat') return matchesSearch && transaction.type.toLowerCase().includes('achat');
    if (filterType === 'retrait') return matchesSearch && transaction.type.toLowerCase().includes('retrait');
    
    return matchesSearch;
  });

  const menuItems = [
    { id: 'solde', icon: Wallet, label: 'Solde' },
    { id: 'historique', icon: Clock, label: 'Historique' },
    { id: 'virement', icon: ArrowLeftRight, label: 'Virement' },
    { id: 'cartes', icon: CreditCard, label: 'Cartes' },
    { id: 'rib', icon: FileText, label: 'RIB' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // Si c'est "solde", rediriger vers dashboard au lieu de "solde"
    if (tabId === 'solde') {
      navigate('dashboard');
    } else {
      navigate(tabId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => navigate('dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              <span>Retour</span>
            </button>
            <h1 className="text-xl font-bold text-gray-800">Historique</h1>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Download size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Barre de recherche */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une transaction..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Solde actuel */}
        <div className="bg-gray-600 rounded-xl p-6 text-white mb-6 shadow-lg">
          <p className="text-emerald-100 text-sm mb-1">Solde actuel</p>
          <h2 className="text-3xl font-bold">
            {user?.balance?.toLocaleString('fr-FR', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })} €
          </h2>
        </div>

        {/* Filtres */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <button 
            onClick={() => setFilterType('all')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              filterType === 'all' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Tout
          </button>
          <button 
            onClick={() => setFilterType('virement')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              filterType === 'virement' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Virements
          </button>
          <button 
            onClick={() => setFilterType('achat')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              filterType === 'achat' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Achats
          </button>
          <button 
            onClick={() => setFilterType('retrait')}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
              filterType === 'retrait' ? 'bg-emerald-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Retraits
          </button>
        </div>

        {/* Liste des transactions */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredTransactions.map((transaction) => (
            <div 
              key={transaction.id}
              className="flex items-center gap-4 p-4 border-b last:border-b-0 hover:bg-gray-50 transition cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                transaction.isCredit ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {transaction.isCredit ? (
                  <ArrowDownRight className="text-green-600" size={24} />
                ) : (
                  <ArrowUpRight className="text-red-600" size={24} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-800 truncate">{transaction.type}</h4>
                <p className="text-sm text-gray-500">{transaction.date}</p>
                <p className="text-xs text-gray-400 font-mono">{transaction.reference}</p>
              </div>
              <div className="text-right">
                <p className={`text-lg font-bold ${
                  transaction.isCredit ? 'text-green-600' : 'text-red-600'
                }`}>
                  {transaction.isCredit ? '+' : ''}{transaction.amount.toLocaleString('fr-FR', { 
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2 
                  })} €
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucune transaction trouvée</p>
          </div>
        )}
      </main>

      {/* Navigation inférieure */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="max-w-4xl mx-auto px-2">
          <div className="flex items-center justify-around">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center gap-1 py-3 px-4 transition ${
                  activeTab === item.id
                    ? 'text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon size={24} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}