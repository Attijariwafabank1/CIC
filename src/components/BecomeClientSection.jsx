import React from 'react';
import { Clock, Euro, Calculator, ArrowRight } from 'lucide-react';

export default function BecomeClientSection({ onNavigateToLogin, onNavigateToInscription }) {
  return (
    <div className="bg-white">
      {/* Section Nos conseils pratiques (Image 1) */}
      <div className=" bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600"></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Nos conseils<br/>pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Carte 1 - Crédit immobilier */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={onNavigateToLogin}>
              <div className="p-6 sm:p-8">
                <div className="border-2 border-gray-800 inline-block px-4 py-2 mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Crédit immobilier : quels documents fournir ?
                  </h3>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <Euro className="w-6 h-6 text-teal-600" />
                  <span className="text-teal-600 font-medium">Crédits</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">2 min</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Nous vous proposons la liste des éléments du dossier à déposer à la banque afin de vous faire gagner du temps. C'est parti.
                </p>
              </div>
            </div>

            {/* Carte 2 - Changer de banque */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer" onClick={onNavigateToLogin}>
              <div className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">
                  Comment changer de banque ?
                </h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="w-6 h-6 text-teal-600" />
                  <span className="text-teal-600 font-medium">Comptes</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">2 min</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  Vous trouvez que les tarifs appliqués par votre banque sont trop élevés ? Vous déménagez ou êtes muté dans une autre région ? Quelles que soient les raisons, découvrez toutes les démarches pour un changement de banque en toute simplicité.
                </p>
              </div>
              <div className="h-2 bg-teal-600"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Recrutement (Image 3) */}
      <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Envie de construire avec nous ?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12">
            Rejoignez un groupe aux valeurs d'innovation
          </p>

          {/* Logo géométrique */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-32">
              <div className="absolute left-0 top-0 w-24 h-20 bg-red-500"></div>
              <div className="absolute left-16 top-0 w-20 h-32 bg-teal-600"></div>
              <div className="absolute right-0 top-0 w-24 h-20 bg-blue-800"></div>
            </div>
          </div>

          <button 
            onClick={onNavigateToLogin}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 sm:px-12 py-4 rounded text-base sm:text-lg font-medium transition inline-flex items-center gap-3"
          >
            Accéder au site de recrutement
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Section Conditions (Image 4) */}
      <div className="bg-cyan-50 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <sup>1</sup> Offre de bienvenue réservée aux nouveaux clients personnes physiques dont l'ancienneté au CIC est inférieure à 6 mois, agissant à titre non-professionnel. Une seule offre par personne physique non-cumulable avec toute autre offre promotionnelle en cours ou à venir. Voir conditions détaillées en agence. L'entrée en relation est soumise à l'accord de la Banque. Les 6 mois sont offerts sous forme de réduction sur les e-Contrats Personnels. Prix au-delà des 6 mois offerts : à partir de 9 €/mois pour un e-Contrat Personnel Global, 15 €/mois pour un e-Contrat Personnel Premium et 26 €/mois pour un e-Contrat Personnel Premium World Elite. Conditions au 01/12/2024.
          </p>
        </div>
      </div>
    </div>
  );
}