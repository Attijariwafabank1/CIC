import React, { useState } from 'react';
import { ArrowLeft, BookOpen, CheckCircle, AlertCircle, Copy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Chequier({navigate}) {
  const { user } = useAuth();
  const [showCopied, setShowCopied] = useState(false);

  // Informations du chéquier - utilise les données de l'utilisateur connecté
  const checkbook = {
    checksTotal: user?.chequier || 0,
    checksUsed: user?.chequier > 0 ? Math.floor(user.chequier * 0.4) : 0, // 40% utilisés par exemple
    checksRemaining: user?.chequier || 0,
    lastCheckNumber: user?.chequier > 0 ? '0001234' : '0000000',
    issueDate: user?.chequier > 0 ? '15 Nov 2024' : 'Non émis'
  };

  const handleCopyIban = () => {
    if (user?.rib?.iban) {
      navigator.clipboard.writeText(user.rib.iban);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification copie */}
      {showCopied && (
        <div className="fixed top-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 animate-fade-in">
          <CheckCircle size={20} />
          <span>IBAN copié !</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition" onClick={() => navigate('dashboard')}>
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Mon Chéquier</h1>
            <p className="text-sm text-gray-500">Informations de paiement par chèque</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {user?.chequier === 0 ? (
          /* Message pour nouvel inscrit sans chéquier */
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-gray-400" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Aucun chéquier disponible
            </h3>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas encore de chéquier. Commandez-en un pour commencer à effectuer des paiements par chèque.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-emerald-700 transition">
              Commander un chéquier
            </button>
          </div>
        ) : (
          <>
            {/* Carte Chéquier principal */}
            <div className="bg-emerald-600 rounded-2xl p-6 mb-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white rounded flex items-center justify-center overflow-hidden">
                    <img src="images/logo bnp.jpeg" alt="BNP Paribas" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Chéquier Actif</h2>
                    <p className="text-sm opacity-90">BNP Paribas</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm opacity-75 mb-1">Chèques restants</p>
                  <p className="text-3xl font-bold">{checkbook.checksRemaining}</p>
                </div>
                <div>
                  <p className="text-sm opacity-75 mb-1">Total chèques</p>
                  <p className="text-3xl font-bold">{checkbook.checksTotal}</p>
                </div>
              </div>

              <div className="rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Progression</span>
                  <span className="font-bold">
                    {checkbook.checksTotal > 0 
                      ? Math.round((checkbook.checksRemaining / checkbook.checksTotal) * 100)
                      : 0}%
                  </span>
                </div>
                <div className="w-full bg-emerald-800 rounded-full h-3">
                  <div 
                    className="bg-white h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: checkbook.checksTotal > 0 
                        ? `${(checkbook.checksRemaining / checkbook.checksTotal) * 100}%`
                        : '0%'
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-sm text-gray-600 mb-2">Chèques utilisés</p>
                <p className="text-3xl font-bold text-gray-800">{checkbook.checksUsed}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500">Date d'émission</p>
                  <p className="text-sm font-medium text-gray-700">{checkbook.issueDate}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-sm text-gray-600 mb-2">Dernier chèque</p>
                <p className="text-3xl font-bold text-gray-800">N°{checkbook.lastCheckNumber}</p>
                <div className="mt-3 pt-3 border-t">
                  <p className="text-xs text-gray-500">Solde disponible</p>
                  <p className="text-sm font-medium text-emerald-600">
                    {(user?.balance || 0).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}€
                  </p>
                </div>
              </div>
            </div>

            {/* Informations du compte */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Informations du compte</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Titulaire</p>
                  <p className="font-medium text-gray-800">{user?.name}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">N° de compte</p>
                  <p className="font-mono text-gray-800">{user?.accountNumber}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-2">IBAN</p>
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-gray-800 flex-1">{user?.rib?.iban}</p>
                    <button
                      onClick={handleCopyIban}
                      className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
                      title="Copier l'IBAN"
                    >
                      <Copy size={18} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerte stock faible */}
            {checkbook.checksRemaining < 10 && checkbook.checksRemaining > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-6 flex items-start gap-3">
                <AlertCircle className="text-yellow-600 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-yellow-900 mb-1">Stock de chèques faible</h4>
                  <p className="text-sm text-yellow-800 mb-3">
                    Il ne vous reste que {checkbook.checksRemaining} chèques. Pensez à commander un nouveau chéquier.
                  </p>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-700 transition">
                    Commander un chéquier
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}