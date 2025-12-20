import React, { useState } from 'react';
import { ArrowLeft, Calendar, Repeat, User, Plus, Edit, Trash2, Wallet, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function VirementProgramme({ navigate }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('list');
  const [showSuccess, setShowSuccess] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // État du formulaire
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [iban, setIban] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [frequency, setFrequency] = useState('once');
  const [endDate, setEndDate] = useState('');
  const [reference, setReference] = useState('');

  // Virements programmés - vide pour nouveaux inscrits
  const [scheduledTransfers, setScheduledTransfers] = useState(
    user?.virementProgramme > 0 ? [
      {
        id: 1,
        beneficiary: 'Sophie Martin',
        iban: 'FR76 3000 4000 0300 0345 6789 012',
        amount: 500,
        nextDate: '20 Déc 2024',
        frequency: 'monthly',
        reference: 'Loyer Décembre',
        status: 'active'
      },
      {
        id: 2,
        beneficiary: 'Électricité de France',
        iban: 'FR45 2004 1000 0100 0234 5678 901',
        amount: 120,
        nextDate: '25 Déc 2024',
        frequency: 'monthly',
        reference: 'Facture électricité',
        status: 'active'
      },
      {
        id: 3,
        beneficiary: 'Pierre Dubois',
        iban: 'FR12 3000 2004 0000 0567 8901 234',
        amount: 200,
        nextDate: '30 Déc 2024',
        frequency: 'once',
        reference: 'Remboursement',
        status: 'pending'
      },
    ].slice(0, user.virementProgramme) : []
  );

  const handleSubmit = () => {
    if (beneficiaryName && iban && amount && date) {
      if (editingId) {
        // Modifier un virement existant
        setScheduledTransfers(scheduledTransfers.map(t => 
          t.id === editingId 
            ? {
                ...t,
                beneficiary: beneficiaryName,
                iban: iban,
                amount: parseFloat(amount),
                frequency: frequency,
                reference: reference
              }
            : t
        ));
        setEditingId(null);
      } else {
        // Créer un nouveau virement
        const newTransfer = {
          id: scheduledTransfers.length > 0 ? Math.max(...scheduledTransfers.map(t => t.id)) + 1 : 1,
          beneficiary: beneficiaryName,
          iban: iban,
          amount: parseFloat(amount),
          nextDate: new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }),
          frequency: frequency,
          reference: reference,
          status: 'active'
        };
        setScheduledTransfers([...scheduledTransfers, newTransfer]);
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        resetForm();
        setActiveTab('list');
      }, 3000);
    }
  };

  const resetForm = () => {
    setBeneficiaryName('');
    setIban('');
    setAmount('');
    setDate('');
    setFrequency('once');
    setEndDate('');
    setReference('');
    setEditingId(null);
  };

  const handleEditTransfer = (transferId) => {
    const transfer = scheduledTransfers.find(t => t.id === transferId);
    if (transfer) {
      setBeneficiaryName(transfer.beneficiary);
      setIban(transfer.iban);
      setAmount(transfer.amount.toString());
      setFrequency(transfer.frequency);
      setReference(transfer.reference || '');
      setEditingId(transferId);
      setActiveTab('new');
    }
  };

  const handleDeleteTransfer = (transferId) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce virement programmé ?')) {
      setScheduledTransfers(scheduledTransfers.filter(t => t.id !== transferId));
    }
  };

  const getFrequencyLabel = (freq) => {
    switch(freq) {
      case 'once': return 'Ponctuel';
      case 'weekly': return 'Hebdomadaire';
      case 'monthly': return 'Mensuel';
      default: return freq;
    }
  };

  const getFrequencyColor = (freq) => {
    switch(freq) {
      case 'once': return 'bg-blue-100 text-blue-700';
      case 'weekly': return 'bg-purple-100 text-purple-700';
      case 'monthly': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Modal de succès */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-emerald-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {editingId ? 'Virement modifié !' : 'Virement programmé !'}
            </h3>
            <p className="text-gray-600 mb-4">
              {editingId 
                ? 'Votre virement a été modifié avec succès' 
                : 'Votre virement a été programmé avec succès'
              }
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
            <h1 className="text-xl font-bold text-gray-800">Virements programmés</h1>
            <p className="text-sm text-gray-500">Gérez vos virements automatiques</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Solde disponible */}
        <div className="bg-emerald-600 to-emerald-700 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Wallet size={20} />
            <span className="text-sm opacity-90">Solde disponible</span>
          </div>
          <div className="text-4xl font-bold">
            {(user?.balance || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
          </div>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => {
              setActiveTab('list');
              resetForm();
            }}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'list'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Calendar size={20} />
              Mes virements ({scheduledTransfers.length})
            </div>
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'new'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Plus size={20} />
              {editingId ? 'Modifier' : 'Nouveau'}
            </div>
          </button>
        </div>

        {/* Liste des virements */}
        {activeTab === 'list' && (
          <div>
            {scheduledTransfers.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Aucun virement programmé
                </h3>
                <p className="text-gray-600 mb-6">
                  Créez votre premier virement automatique pour simplifier vos paiements récurrents
                </p>
                <button
                  onClick={() => setActiveTab('new')}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition"
                >
                  Créer un virement
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {scheduledTransfers.map(transfer => (
                  <div
                    key={transfer.id}
                    className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          {transfer.frequency === 'once' ? (
                            <Calendar className="text-emerald-600" size={24} />
                          ) : (
                            <Repeat className="text-emerald-600" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-800 mb-1">
                            {transfer.beneficiary}
                          </h3>
                          <p className="text-sm text-gray-500 font-mono mb-2">
                            {transfer.iban}
                          </p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${getFrequencyColor(transfer.frequency)}`}>
                              {getFrequencyLabel(transfer.frequency)}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              transfer.status === 'active' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {transfer.status === 'active' ? 'Actif' : 'En attente'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-800">
                          {transfer.amount}€
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          Prochain: {transfer.nextDate}
                        </p>
                      </div>
                    </div>

                    {transfer.reference && (
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Référence:</span> {transfer.reference}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditTransfer(transfer.id)}
                        className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition flex items-center justify-center gap-1"
                      >
                        <Edit size={16} />
                        Modifier
                      </button>
                      <button 
                        onClick={() => handleDeleteTransfer(transfer.id)}
                        className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center justify-center gap-1"
                      >
                        <Trash2 size={16} />
                        Supprimer
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Formulaire nouveau virement */}
        {activeTab === 'new' && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {editingId ? 'Modifier le virement' : 'Programmer un virement'}
              </h2>
              {editingId && (
                <button
                  onClick={() => {
                    resetForm();
                    setActiveTab('list');
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Annuler
                </button>
              )}
            </div>

            <div className="space-y-5">
              {/* Nom du bénéficiaire */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom du bénéficiaire
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={beneficiaryName}
                    onChange={(e) => setBeneficiaryName(e.target.value)}
                    placeholder="Ex: Sophie Martin"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* IBAN */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  IBAN du bénéficiaire
                </label>
                <input
                  type="text"
                  value={iban}
                  onChange={(e) => setIban(e.target.value)}
                  placeholder="FR76 3000 4000 0300 0345 6789 012"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono"
                />
              </div>

              {/* Montant */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Montant
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

              {/* Date de début */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date du premier virement
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Fréquence */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fréquence
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFrequency('once')}
                    className={`py-3 rounded-lg font-medium transition ${
                      frequency === 'once'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm">Ponctuel</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('weekly')}
                    className={`py-3 rounded-lg font-medium transition ${
                      frequency === 'weekly'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Repeat className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm">Hebdo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency('monthly')}
                    className={`py-3 rounded-lg font-medium transition ${
                      frequency === 'monthly'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Repeat className="w-5 h-5 mx-auto mb-1" />
                    <span className="text-sm">Mensuel</span>
                  </button>
                </div>
              </div>

              {/* Date de fin (si récurrent) */}
              {frequency !== 'once' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date de fin (optionnel)
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Laissez vide pour un virement sans date de fin
                  </p>
                </div>
              )}

              {/* Référence */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Référence (optionnel)
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder="Ex: Loyer, Facture..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              {/* Bouton de soumission */}
              <button
                onClick={handleSubmit}
                disabled={!beneficiaryName || !iban || !amount || !date}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
              >
                <CheckCircle size={24} />
                {editingId ? 'Enregistrer les modifications' : 'Programmer le virement'}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}