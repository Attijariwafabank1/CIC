import React, { useState } from 'react';
import { ArrowLeft, Send, User, Clock, Star, Plus, Wallet, ChevronRight } from 'lucide-react';

export default function VirementRapide({ user, navigate }) {
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Récupérer les bénéficiaires depuis l'objet user
  const beneficiaries = user?.beneficiaires || [];
  const hasBeneficiaries = beneficiaries.length > 0;

  // Montants rapides
  const quickAmounts = [50, 100, 200, 500, 1000];

  // Derniers virements
  const recentTransfers = hasBeneficiaries ? [
    { id: 1, name: 'Sophie Martin', amount: 150, date: '15 Déc 2024' },
    { id: 2, name: 'Pierre Dubois', amount: 500, date: '12 Déc 2024' },
    { id: 3, name: 'Isabelle Moreau', amount: 250, date: '10 Déc 2024' },
  ] : [];

  const handleQuickTransfer = (beneficiary, quickAmount = null) => {
    setSelectedBeneficiary(beneficiary);
    if (quickAmount) {
      setAmount(quickAmount.toString());
    }
  };

  const handleSubmit = () => {
    if (selectedBeneficiary && amount) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedBeneficiary(null);
        setAmount('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Modal de succès */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="text-gray-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Virement effectué !</h3>
            <p className="text-gray-600 mb-4">
              {amount}€ envoyés à {selectedBeneficiary?.name}
            </p>
            <div className="w-12 h-1 bg-emerald-600 mx-auto rounded"></div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => navigate('dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Virement rapide</h1>
            <p className="text-sm text-gray-500">Envoyez de l'argent en un clic</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Solde disponible */}
        <div className="bg-emerald-600 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Wallet size={20} />
            <span className="text-sm opacity-90">Solde disponible</span>
          </div>
          <div className="text-4xl font-bold">
            {(user?.balance || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
          </div>
        </div>

        {/* Message pour nouveaux inscrits */}
        {!hasBeneficiaries && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ">
                <User className="text-blue-600" size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Aucun bénéficiaire enregistré</h3>
                <p className="text-sm text-blue-700">
                  Commencez par ajouter vos bénéficiaires pour effectuer des virements rapides.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bénéficiaires favoris */}
        {beneficiaries.filter(b => b.favorite).length > 0 && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-800">Bénéficiaires favoris</h2>
              <button 
                onClick={() => navigate('ajouter-beneficiaire')}
                className="flex items-center gap-1 text-emerald-600 font-medium text-sm"
              >
                <Plus size={18} />
                Ajouter
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {beneficiaries.filter(b => b.favorite).map(beneficiary => (
                <div
                  key={beneficiary.id}
                  onClick={() => setSelectedBeneficiary(beneficiary)}
                  className={`bg-white rounded-xl p-4 cursor-pointer transition ${
                    selectedBeneficiary?.id === beneficiary.id
                      ? 'ring-2 ring-emerald-600 shadow-md'
                      : 'shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                        <User className="text-emerald-600" size={24} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-gray-800">{beneficiary.name}</h3>
                          <Star className="text-yellow-500 fill-yellow-500" size={16} />
                        </div>
                        <p className="text-sm text-gray-500 font-mono">{beneficiary.iban}</p>
                        <p className="text-xs text-gray-400">Dernier: {beneficiary.lastAmount}€</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tous les bénéficiaires */}
        {beneficiaries.filter(b => !b.favorite).length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Tous les bénéficiaires</h2>
            <div className="grid grid-cols-1 gap-3">
              {beneficiaries.filter(b => !b.favorite).map(beneficiary => (
                <div
                  key={beneficiary.id}
                  onClick={() => setSelectedBeneficiary(beneficiary)}
                  className={`bg-white rounded-xl p-4 cursor-pointer transition ${
                    selectedBeneficiary?.id === beneficiary.id
                      ? 'ring-2 ring-emerald-600 shadow-md'
                      : 'shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <User className="text-gray-600" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{beneficiary.name}</h3>
                        <p className="text-sm text-gray-500 font-mono">{beneficiary.iban}</p>
                        <p className="text-xs text-gray-400">Dernier: {beneficiary.lastAmount}€</p>
                      </div>
                    </div>
                    <ChevronRight className="text-gray-400" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Derniers virements */}
        {recentTransfers.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-gray-600" />
              <h2 className="text-lg font-bold text-gray-800">Répéter un virement</h2>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {recentTransfers.map((transfer, index) => (
                <button
                  key={transfer.id}
                  onClick={() => handleQuickTransfer(
                    beneficiaries.find(b => b.name === transfer.name),
                    transfer.amount
                  )}
                  className={`w-full p-4 flex items-center justify-between hover:bg-gray-50 transition ${
                    index !== recentTransfers.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Send className="text-emerald-600" size={20} />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{transfer.name}</p>
                      <p className="text-sm text-gray-500">{transfer.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">{transfer.amount}€</p>
                    <p className="text-xs text-emerald-600">Répéter</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bouton ajouter un bénéficiaire si aucun */}
        {!hasBeneficiaries && (
          <button 
            onClick={() => navigate('ajouter-beneficiaire')}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-medium transition flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Ajouter un bénéficiaire
          </button>
        )}

        {/* Formulaire de virement */}
        {selectedBeneficiary && (
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky bottom-24">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Virement vers {selectedBeneficiary.name}
            </h3>

            {/* Montants rapides */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Montants rapides
              </label>
              <div className="grid grid-cols-5 gap-2">
                {quickAmounts.map(qa => (
                  <button
                    key={qa}
                    type="button"
                    onClick={() => setAmount(qa.toString())}
                    className={`py-2 rounded-lg font-medium transition ${
                      amount === qa.toString()
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {qa}€
                  </button>
                ))}
              </div>
            </div>

            {/* Montant personnalisé */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Montant personnalisé
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
                  step="0.01"
                  min="0"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                  €
                </span>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!amount || parseFloat(amount) <= 0}
              className="w-full bg-gray-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
            >
              <Send size={24} />
              Envoyer {amount ? `${amount}€` : ''}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}