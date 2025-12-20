import React from 'react';
import { ArrowRight, CloudLightning, Wrench, Edit3 } from 'lucide-react';

export default function PracticalSection({ onNavigateToLogin }) {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section 1: Une banque entreprise à mission */}
        <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-900 "></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Une banque<br/>entreprise à mission
            </h2>
          </div>

          <div className="flex items-start gap-8 mb-8">
            <div className="text-blue-900">
              <div className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-2">18</div>
              <div className="w-4 h-4 bg-red-600"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed flex-1">
              C'est le nombre d'engagements formant le projet sociétal et environnemental du CIC dans le cadre de sa qualité d'entreprise à mission. Ils traduisent l'engagement éthique et solidaire du CIC dans tous les territoires.
            </p>
          </div>

          <button 
            onClick={onNavigateToLogin}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded text-lg font-semibold transition w-full sm:w-auto"
          >
            Voir nos engagements
          </button>
        </div>

        {/* Section 2: Engagement - Slider */}
        <div className=" bg-slate-700 to-slate-800 rounded-lg shadow-md p-8 sm:p-12 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Engagement 1</h2>
          
          <div className="flex justify-center mb-8">
            <svg className="w-24 h-24" viewBox="0 0 100 100">
              <circle cx="50" cy="30" r="15" fill="currentColor"/>
              <circle cx="30" cy="60" r="15" fill="currentColor"/>
              <circle cx="70" cy="60" r="15" fill="currentColor"/>
              <circle cx="50" cy="85" r="15" fill="currentColor"/>
              <circle cx="50" cy="50" r="8" fill="white"/>
            </svg>
          </div>

          <p className="text-center text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Créer davantage de valeur et accroître notre impact environnemental et social en consacrant 15% de notre résultat net au Dividende sociétal
          </p>

          <div className="flex justify-center gap-4 items-center">
            <button onClick={onNavigateToLogin} className="text-white hover:text-teal-400 transition">
              <ArrowRight className="w-8 h-8 rotate-180" />
            </button>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            </div>
            <button onClick={onNavigateToLogin} className="text-white hover:text-teal-400 transition">
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Section 3: L'application mobile CIC */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-900 "></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                L'application mobile CIC
              </h2>
            </div>

            {/* Image de l'application */}
            <div className="mb-8 flex justify-center">
              <img 
                src="/images/image 5.jpeg" 
                alt="Application mobile CIC" 
                className="max-w-full h-auto"
              />
            </div>

            {/* Fonctionnalités */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                  <circle cx="6" cy="6" r="1"/>
                  <circle cx="6" cy="12" r="1"/>
                  <circle cx="6" cy="18" r="1"/>
                </svg>
                <p className="text-gray-700">Modifiez le plafond de retrait de votre carte bancaire</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2"/>
                  <path d="M2 10h20"/>
                </svg>
                <p className="text-gray-700">Gérez votre budget et vos dépenses</p>
              </div>

              <div className="flex items-start gap-4">
                <ArrowRight className="w-8 h-8 " />
                <p className="text-gray-700">Effectuez des virements instantanés</p>
              </div>

              <div className="flex items-start gap-4">
                <svg className="w-8 h-8 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <p className="text-gray-700">Restez connecté avec votre conseiller</p>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Disponible sur :</h3>
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
                <div className="flex-1 max-w-xs">
                  <img 
                    src="/images/logo app.jpeg" 
                    alt="App Store" 
                    className="w-full h-auto cursor-pointer hover:opacity-80 transition"
                    onClick={onNavigateToLogin}
                  />
                  <p className="text-center mt-2"><span className="text-2xl">★</span> 4,7/5</p>
                </div>
                <div className="flex-1 max-w-xs">
                  <img 
                    src="/images/logo p.jpeg" 
                    alt="Google Play" 
                    className="w-full h-auto cursor-pointer hover:opacity-80 transition"
                    onClick={onNavigateToLogin}
                  />
                  <p className="text-center mt-2"><span className="text-2xl">★</span> 4,5/5</p>
                </div>
              </div>

              <button 
                onClick={onNavigateToLogin}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded text-lg font-semibold transition w-full"
              >
                Découvrir l'application en détails
              </button>
            </div>
          </div>
        </div>

        {/* Section 4: Centre d'aide */}
        <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 bg-teal-600 "></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Centre d'aide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Carte Urgences */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition cursor-pointer text-center"
            >
              <CloudLightning className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Urgences</h3>
              <ArrowRight className="w-8 h-8 mx-auto text-teal-600" />
            </div>

            {/* Carte Assistance technique */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition cursor-pointer text-center"
            >
              <Wrench className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assistance technique</h3>
              <ArrowRight className="w-8 h-8 mx-auto text-teal-600" />
            </div>

            {/* Carte Faire une réclamation */}
            <div 
              onClick={onNavigateToLogin}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition cursor-pointer text-center border-2 border-dashed border-gray-300"
            >
              <Edit3 className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Faire une réclamation</h3>
              <ArrowRight className="w-8 h-8 mx-auto text-teal-600" />
            </div>
          </div>

          {/* Questions fréquentes */}
          <div className="mt-12 space-y-4">
            <button 
              onClick={onNavigateToLogin}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-left"
            >
              <span className="text-lg text-blue-600 font-medium">
                Comment commander ou activer ma Carte de Clés Personnelles ?
              </span>
              <span className="text-3xl text-gray-400">+</span>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-left"
            >
              <span className="text-lg text-blue-600 font-medium">
                Comment signaler un changement d'adresse, mettre à jour un numéro de téléphone ou une adresse messagerie web ?
              </span>
              <span className="text-3xl text-gray-400">+</span>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-left"
            >
              <span className="text-lg text-blue-600 font-medium">
                Comment modifier le mot de passe de mon contrat de banque à distance ?
              </span>
              <span className="text-3xl text-gray-400">+</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}