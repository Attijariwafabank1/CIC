import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({ onNavigateToLogin, onNavigateToInscription }) {
  return (
    <div>
      {/* Section 1: Banque Hybride */}
      <section className="bg-teal-600 text-white px-3 sm:px-4 md:px-6 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Texte */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                CIC Banque Hybride, la banque comme vous l'avez toujours souhaitée
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                Profitez d'une relation 100% digitale, tout en conservant la force d'un accompagnement humain et personnalisé. Parce qu'avoir un conseiller qui vous connaît fait toute la différence, même à distance.
              </p>

              <button 
                onClick={onNavigateToLogin}
                className="bg-blue-900 hover:bg-blue-950 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold transition flex items-center gap-2 sm:gap-3 group w-full sm:w-auto justify-center sm:justify-start"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="bg-red-600 p-3 sm:p-4 md:p-6 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <img 
                  src="/images/image 1.jpeg" 
                  alt="Banque digitale" 
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Offre de Bienvenue */}
      <section className="bg-blue-900 text-white px-3 sm:px-4 md:px-6 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Carré rouge décoratif en haut à gauche */}
        <div className="absolute left-0 top-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-red-600"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Titre avec ligne */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12">
            <div className="w-12 sm:w-16 md:w-20 lg:w-28 h-0.5 sm:h-1 bg-white "></div>
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold tracking-wider sm:tracking-widest whitespace-nowrap">
              OFFRE DE BIENVENUE
            </h2>
          </div>

          {/* Texte principal */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 leading-tight">
            6 mois offerts<sup className="text-base sm:text-lg md:text-xl lg:text-2xl">1</sup> pour toute ouverture de compte
          </h3>

          {/* Bouton */}
          <button 
            onClick={onNavigateToInscription}
            className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 rounded text-base sm:text-lg md:text-xl font-semibold transition w-full sm:w-auto"
          >
            Ouvrir un compte en ligne
          </button>
        </div>
      </section>
    </div>
  );
}