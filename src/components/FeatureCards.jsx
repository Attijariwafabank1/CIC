import React from 'react';

export default function WhyChooseCIC({ onNavigateToLogin }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 sm:mb-16 lg:mb-20">
          " Pourquoi choisir le CIC ? "
        </h2>

        {/* Liste des avantages */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Banque responsable */}
          <div className="border-b border-gray-300 pb-8 sm:pb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Banque responsable
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Entreprise à mission qui place l'entrepreneuriat au cœur de son ADN, le CIC agit pour un monde plus juste et plus durable.
            </p>
          </div>

          {/* Banque d'une PME sur trois */}
          <div className="border-b border-gray-300 pb-8 sm:pb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Banque d'une PME sur trois
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4">
              Une banque qui accompagne ceux qui ont l'énergie d'entreprendre.
            </p>
            <p className="text-sm sm:text-base text-gray-500 italic">
              Source : Étude « PME PMI et les banques 2023 », Kantar TNS
            </p>
          </div>

          {/* Banque de proximité */}
          <div className="pb-8 sm:pb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Banque de proximité
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Au CIC, votre conseiller dédié vous connaît et vous accompagne dans la durée. Il est non commissionné.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}