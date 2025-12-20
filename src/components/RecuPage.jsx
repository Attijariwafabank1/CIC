// components/RecuPage.jsx

import React from 'react';
import { CheckCircle, Download, ArrowLeft, Share2 } from 'lucide-react';

export default function RecuPage({ navigate, virementData }) {
  // ✅ Vérification de sécurité
  if (!virementData) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-600 text-3xl">⚠️</span>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Aucune donnée de virement
          </h2>
          <p className="text-gray-600 mb-6">
            Les informations du virement ne sont pas disponibles.
          </p>
          <button
            onClick={() => navigate('dashboard')}
            className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Retour au tableau de bord
          </button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    // Créer un canvas pour le reçu
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');

    // Fond blanc
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header vert
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 100);
    gradient.addColorStop(0, '#059669');
    gradient.addColorStop(1, '#0d9488');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 120);

    // Titre
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('BNP PARIBAS', canvas.width / 2, 45);
    ctx.font = '18px Arial';
    ctx.fillText('REÇU DE VIREMENT', canvas.width / 2, 75);

    // Badge succès
    ctx.fillStyle = '#d1fae5';
    ctx.fillRect(250, 140, 300, 50);
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('✓ VIREMENT EFFECTUÉ', canvas.width / 2, 170);

    // Référence
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(150, 210, 500, 60);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.strokeRect(150, 210, 500, 60);
    ctx.fillStyle = '#92400e';
    ctx.font = '11px Arial';
    ctx.fillText('RÉFÉRENCE', canvas.width / 2, 230);
    ctx.font = 'bold 16px Courier New';
    ctx.fillText(virementData.reference, canvas.width / 2, 255);

    // Montant
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 42px Arial';
    ctx.fillText(`${virementData.amount} €`, canvas.width / 2, 320);

    // Détails
    ctx.textAlign = 'left';
    let y = 380;

    const details = [
      { label: 'ÉMETTEUR', value: virementData.senderName },
      { label: 'BÉNÉFICIAIRE', value: virementData.beneficiary },
      { label: 'EMAIL', value: virementData.email },
      { label: 'IBAN', value: virementData.iban },
      { label: 'BIC', value: virementData.bic },
      { label: 'DATE', value: virementData.date },
    ];

    details.forEach(detail => {
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px Arial';
      ctx.fillText(detail.label, 80, y);
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 14px Arial';
      ctx.fillText(detail.value, 80, y + 20);
      y += 50;
    });

    // Message
    if (virementData.message) {
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px Arial';
      ctx.fillText('MESSAGE', 80, y);
      ctx.fillStyle = '#1f2937';
      ctx.font = '12px Arial';
      ctx.fillText(virementData.message, 80, y + 20);
    }

    // Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('Document généré le ' + new Date().toLocaleDateString('fr-FR'), canvas.width / 2, 950);

    // Téléchargement
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Recu_${virementData.reference}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              <span>Retour</span>
            </button>
            <h1 className="text-xl font-bold text-gray-800">Reçu</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Carte de succès */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header vert */}
          <div className="bg-emerald-600 to-teal-600 p-8 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Virement effectué !</h2>
            <p className="text-emerald-100">Votre transaction a été traitée avec succès</p>
          </div>

          {/* Référence */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mx-6 -mt-4 rounded-lg shadow-sm">
            <p className="text-xs text-yellow-800 mb-1">RÉFÉRENCE DE TRANSACTION</p>
            <p className="text-lg font-bold text-yellow-900 font-mono">{virementData.reference}</p>
          </div>

          {/* Montant */}
          <div className="p-6 text-center border-b">
            <p className="text-sm text-gray-600 mb-1">Montant</p>
            <p className="text-4xl font-bold text-emerald-600">{virementData.amount} €</p>
          </div>

          {/* Détails */}
          <div className="p-6 space-y-4">
            <div>
              <p className="text-xs text-gray-500 mb-1">ÉMETTEUR</p>
              <p className="text-base font-semibold text-gray-800">{virementData.senderName}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">BÉNÉFICIAIRE</p>
              <p className="text-base font-semibold text-gray-800">{virementData.beneficiary}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">EMAIL</p>
              <p className="text-base text-gray-700">{virementData.email}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">IBAN</p>
              <p className="text-sm font-mono text-gray-700">{virementData.iban}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">CODE BIC/SWIFT</p>
              <p className="text-sm font-mono text-gray-700">{virementData.bic}</p>
            </div>

            <div>
              <p className="text-xs text-gray-500 mb-1">DATE ET HEURE</p>
              <p className="text-base text-gray-700">{virementData.date}</p>
            </div>

            {virementData.message && (
              <div>
                <p className="text-xs text-gray-500 mb-1">MESSAGE</p>
                <p className="text-base text-gray-700">{virementData.message}</p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="p-6 bg-gray-50 space-y-3">
            <button
              onClick={handleDownload}
              className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger le reçu
            </button>

            <button
              onClick={() => navigate('dashboard')}
              className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition"
            >
              Retour au tableau de bord
            </button>
          </div>
        </div>

       
      </main>
    </div>
  );
}