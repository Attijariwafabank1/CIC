import React from 'react';
import { Percent, Coins, Shield, Smartphone } from 'lucide-react';

export default function OffersSection({ onNavigateToLogin, onNavigateToInscription }) {
  return (
    <section className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* En-tête avec carré turquoise */}
        <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-teal-600"></div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              En ce moment
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-1 sm:mt-2">
              Nos offres à ne pas manquer
            </p>
          </div>
        </div>

        {/* Grille des offres */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          
          {/* Carte 1: Entreprise à mission */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="bg-teal-600 h-48 sm:h-64 md:h-80 flex items-center justify-center">
              <img 
                src="/images/image 2.jpeg" 
                alt="Entreprise à mission" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 uppercase tracking-wide">
                Entreprise à mission : la preuve en action
              </h3>
            </div>
          </div>

          {/* Carte 2: Prêts Adaptation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Prêts Adaptation du logement et du véhicule à <span className="bg-teal-600 text-white px-2">0% TAEG fixe</span>
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Parce que rien ne devrait vous freiner dans votre mobilité, découvrez nos crédits sans intérêts, sans frais de dossier.
              </p>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 mt-1" />
                  <p className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold">
                    Jusqu'à 5 ans maximum
                  </p>
                </div>
                
                <div className="h-px bg-gray-300"></div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <Coins className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 mt-1" />
                  <p className="text-sm sm:text-base md:text-lg text-blue-900 font-semibold">
                    Jusqu'à 30 000 €
                  </p>
                </div>
              </div>

              <button 
                onClick={onNavigateToLogin}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded text-base sm:text-lg font-semibold transition"
              >
                Découvrir les crédits
              </button>
            </div>
          </div>

          {/* Carte 3: Assurance Multirisque Habitation */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="bg-teal-600 h-48 sm:h-64 md:h-80 flex items-center justify-center">
              <img 
                src="/images/image 3.jpeg" 
                alt="Assurance habitation" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-2 sm:mb-3 uppercase tracking-wide">
                Votre protection n'est pas en option
              </p>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Assurance Multirisque Habitation (MRH) : simple et sur mesure
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Pas besoin de payer plus cher pour protéger ce qui l'est à vos yeux ! Vol et effraction, bris de glace, dégât des eaux ... Profitez d'un socle de garanties solide pour une couverture à votre mesure !
              </p>

              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 mt-1" />
                  <p className="text-sm sm:text-base text-blue-900">
                    La possibilité de déclarer vos sinistres sur l'application CIC
                  </p>
                </div>
                
                <div className="h-px bg-gray-300"></div>
                
                <div className="flex items-start gap-2 sm:gap-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900 mt-1" />
                  <p className="text-sm sm:text-base text-blue-900">
                    Des garanties de base solides pour vous rassurer
                  </p>
                </div>
              </div>

              <button 
                onClick={onNavigateToLogin}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded text-base sm:text-lg font-semibold transition"
              >
                Découvrir l'assurance multirisque habitation
              </button>
            </div>
          </div>

          {/* Carte 4: Image avec roue de vélo */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
            <div className="bg-teal-600 h-48 sm:h-64 md:h-80 flex items-center justify-center">
              <img 
                src="/images/image 4.jpeg" 
                alt="Mobilité durable" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Section Intéressé(e) */}
        <div className="mt-8 sm:mt-12 md:mt-16 bg-gray-50 rounded-lg p-6 sm:p-8 md:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            Intéressé(e)... ?
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button 
              onClick={onNavigateToInscription}
              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold transition"
            >
              Devenir client
            </button>
            
            <button 
              onClick={onNavigateToLogin}
              className="flex-1 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold transition"
            >
              Contacter un conseiller
            </button>
          </div>

          {/* Section Une envie ? Un projet ? */}
          <div className="border-t border-gray-300 pt-6 sm:pt-8 mb-8 sm:mb-12">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-600"></div>
              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Une envie ?<br/>Un projet ?
                </h4>
                <p className="text-base sm:text-lg md:text-xl text-gray-700">
                  Acquérir un logement, acheter une voiture, changer de vie...
                </p>
              </div>
            </div>
          </div>

          {/* Grille des projets - 2 colonnes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            
            {/* Carte: Financer et assurer un véhicule */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 17h14v2H5v-2z"/>
                  <path d="M6 17V6h12v11"/>
                  <circle cx="8.5" cy="19" r="1.5"/>
                  <circle cx="15.5" cy="19" r="1.5"/>
                  <path d="M6 6l1-3h10l1 3"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Financer et assurer un véhicule
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Constituer et gérer son patrimoine */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                  <circle cx="12" cy="15" r="3"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Constituer et gérer son patrimoine
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Accompagner les projets de ses enfants */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Accompagner les projets de ses enfants
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Se loger et faire des travaux */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <path d="M9 22V12h6v10"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Se loger et faire des travaux
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Comment préparer sa retraite */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4"/>
                  <path d="M12 18v4"/>
                  <path d="m4.93 4.93 2.83 2.83"/>
                  <path d="m16.24 16.24 2.83 2.83"/>
                  <path d="M2 12h4"/>
                  <path d="M18 12h4"/>
                  <path d="m4.93 19.07 2.83-2.83"/>
                  <path d="m16.24 7.76 2.83-2.83"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Comment préparer sa retraite ? Conseils et stratégies pour l'avenir
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Protéger et assurer sa famille */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Protéger et assurer sa famille
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Voyager */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10 20v-6h4v6"/>
                  <path d="M18 8h-1V6a4 4 0 0 0-8 0v2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2z"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Voyager
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

            {/* Carte: Créer une entreprise */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
                <h5 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  Créer une entreprise
                </h5>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}