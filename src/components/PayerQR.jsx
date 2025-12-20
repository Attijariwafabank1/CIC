import React, { useState } from 'react';
import { ArrowLeft, QrCode, Scan, Wallet, CheckCircle, XCircle, Camera } from 'lucide-react';

export default function PayerQR({navigate}) {
  const [activeTab, setActiveTab] = useState('scan'); // 'scan' ou 'myqr'
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const user = {
    name: 'Marie-Françoise Boignon',
    accountNumber: '20250000001',
    balance: 987000.00,
    iban: 'FR76 3000 4000 0100 0123 4567 890'
  };

  // Simuler un scan QR
  const handleStartScan = () => {
    setIsScanning(true);
    // Simuler le scan après 2 secondes
    setTimeout(() => {
      setScannedData({
        name: 'Commerce PARIS',
        iban: 'FR76 1234 5678 9012 3456 7890 123',
        reference: 'SHOP-2024-12-17-001'
      });
      setIsScanning(false);
    }, 2000);
  };

  const handlePayment = () => {
    if (scannedData && amount) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setScannedData(null);
        setAmount('');
      }, 3000);
    }
  };

  const handleCancelScan = () => {
    setScannedData(null);
    setAmount('');
  };

  // Générer QR Code pour mon compte
  const myQRCode = (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <rect width="200" height="200" fill="white"/>
      {/* Coins de positioning */}
      <rect x="10" y="10" width="40" height="40" fill="black"/>
      <rect x="150" y="10" width="40" height="40" fill="black"/>
      <rect x="10" y="150" width="40" height="40" fill="black"/>
      <rect x="20" y="20" width="20" height="20" fill="white"/>
      <rect x="160" y="20" width="20" height="20" fill="white"/>
      <rect x="20" y="160" width="20" height="20" fill="white"/>
      
      {/* Pattern QR simplifié */}
      {Array.from({ length: 10 }).map((_, i) => (
        <React.Fragment key={i}>
          {Array.from({ length: 10 }).map((_, j) => (
            Math.random() > 0.5 && (
              <rect
                key={`${i}-${j}`}
                x={60 + j * 10}
                y={60 + i * 10}
                width="8"
                height="8"
                fill="black"
              />
            )
          ))}
        </React.Fragment>
      ))}
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Modal de succès */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-emerald-600" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Paiement effectué !</h3>
            <p className="text-gray-600 mb-4">
              {amount}€ payés à {scannedData?.name}
            </p>
            <div className="w-12 h-1 bg-emerald-600 mx-auto rounded"></div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition"  onClick={() => navigate('dashboard')}>
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Payer par QR Code</h1>
            <p className="text-sm text-gray-500">Scanner ou partager mon code</p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Solde disponible */}
        <div className=" bg-emerald-600 to-emerald-700 rounded-2xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Wallet size={20} />
            <span className="text-sm opacity-90">Solde disponible</span>
          </div>
          <div className="text-4xl font-bold">
            {user.balance.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}€
          </div>
        </div>

        {/* Onglets */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'scan'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Scan size={20} />
              Scanner un QR
            </div>
          </button>
          <button
            onClick={() => setActiveTab('myqr')}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              activeTab === 'myqr'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <QrCode size={20} />
              Mon QR Code
            </div>
          </button>
        </div>

        {/* Contenu Scanner */}
        {activeTab === 'scan' && (
          <div>
            {!scannedData ? (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Scanner un QR Code</h2>
                
                {/* Zone de scan */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden mb-6 aspect-square">
                  {isScanning ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-white font-medium">Scan en cours...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-24 h-24 text-white mx-auto mb-4 opacity-50" />
                        <p className="text-white font-medium mb-2">Placez le QR Code dans le cadre</p>
                        <p className="text-gray-400 text-sm">Le scan démarrera automatiquement</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Cadre de scan */}
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full border-4 border-white rounded-2xl">
                      {/* Coins du cadre */}
                      <div className="relative w-full h-full">
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-emerald-500"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-emerald-500"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-emerald-500"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-emerald-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {!isScanning && (
                  <button
                    onClick={handleStartScan}
                    className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2"
                  >
                    <Scan size={24} />
                    Commencer le scan
                  </button>
                )}

                {/* Instructions */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <h3 className="font-medium text-blue-900 mb-2">Comment ça marche ?</h3>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>1. Demandez le QR Code du commerçant</li>
                    <li>2. Placez-le dans le cadre</li>
                    <li>3. Confirmez le montant</li>
                    <li>4. Validez le paiement</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-emerald-600" size={32} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">QR Code détecté</h2>
                    <p className="text-gray-500">Confirmez le paiement</p>
                  </div>
                </div>

                {/* Informations du destinataire */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">Bénéficiaire</p>
                    <p className="font-bold text-gray-800">{scannedData.name}</p>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600 mb-1">IBAN</p>
                    <p className="font-mono text-sm text-gray-800">{scannedData.iban}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Référence</p>
                    <p className="text-sm text-gray-800">{scannedData.reference}</p>
                  </div>
                </div>

                {/* Montant */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Montant à payer
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0.00"
                      className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-2xl font-bold"
                      step="0.01"
                      min="0"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">
                      €
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleCancelScan}
                    className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-300 transition flex items-center justify-center gap-2"
                  >
                    <XCircle size={20} />
                    Annuler
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
                  >
                    <CheckCircle size={20} />
                    Payer {amount ? `${amount}€` : ''}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contenu Mon QR Code */}
        {activeTab === 'myqr' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Mon QR Code
            </h2>

            {/* QR Code */}
            <div className="bg-white p-6 rounded-2xl border-4 border-emerald-600 mb-6">
              <div className="w-full max-w-sm mx-auto">
                {myQRCode}
              </div>
            </div>

            {/* Informations du compte */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-1">Titulaire</p>
                <p className="font-bold text-gray-800">{user.name}</p>
              </div>
              <div className="mb-3">
                <p className="text-sm text-gray-600 mb-1">N° de compte</p>
                <p className="font-mono text-sm text-gray-800">{user.accountNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">IBAN</p>
                <p className="font-mono text-sm text-gray-800">{user.iban}</p>
              </div>
            </div>

            {/* Instructions */}
            <div className="p-4 bg-blue-50 rounded-xl mb-4">
              <h3 className="font-medium text-blue-900 mb-2">Comment recevoir un paiement ?</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>1. Présentez ce QR Code</li>
                <li>2. Le payeur le scanne</li>
                <li>3. Il saisit le montant</li>
                <li>4. Vous recevez l'argent instantanément</li>
              </ul>
            </div>

            {/* Boutons d'action */}
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition">
                Télécharger
              </button>
              <button className="bg-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300 transition">
                Partager
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}