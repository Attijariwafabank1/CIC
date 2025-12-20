import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, AlertCircle, Building2, EarOff, Gift, ArrowRight, Phone, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer({ onNavigateToLogin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Section teal avec liens rapides (Image 1) */}
      <div className="bg-teal-600 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Ligne supérieure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 hover:opacity-80 transition text-left"
            >
              <AlertCircle className="w-12 h-12 " />
              <span className="text-xl font-medium">Centre d'aide</span>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 hover:opacity-80 transition text-left"
            >
              <Building2 className="w-12 h-12 " />
              <span className="text-xl font-medium">Trouver une agence</span>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex items-center gap-4 hover:opacity-80 transition text-left"
            >
              <EarOff className="w-12 h-12 " />
              <span className="text-xl font-medium">Sourds et malentendants</span>
            </button>
          </div>

          {/* Bouton télécharger l'application */}
          <button 
            onClick={onNavigateToLogin}
            className="w-full border-2 border-white text-white py-4 text-xl font-medium hover:bg-white hover:text-teal-600 transition mb-12"
          >
            Télécharger l'application
          </button>

          {/* Section parrainage */}
          <div className="border-t border-teal-500 pt-8">
            <div className="flex items-start gap-6">
              <Gift className="w-16 h-16 " />
              <div>
                <p className="text-xl mb-4">
                  Parrainez un proche et profitez ensemble d'avantages
                </p>
                <button 
                  onClick={onNavigateToLogin}
                  className="flex items-center gap-2 text-lg hover:underline"
                >
                  Découvrir notre offre
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section mentions légales (Image 2) */}
      <div className="bg-teal-700 text-white py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section parrainage répétée */}
          <div className="flex items-start gap-6 mb-8 pb-8 border-b border-teal-600">
            <Gift className="w-12 h-12 " />
            <div>
              <p className="text-lg mb-3">
                Parrainez un proche et profitez ensemble d'avantages
              </p>
              <button 
                onClick={onNavigateToLogin}
                className="flex items-center gap-2 hover:underline"
              >
                Découvrir notre offre
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Liens légaux */}
          <div className="space-y-3 text-center mb-8">
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Mentions légales
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Tarifs et conditions générales
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Guides et informations réglementaires
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Protection des données
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Gestion des cookies
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Fraude et sécurité bancaire — VDP
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-white hover:underline py-2 text-sm">
              Accessibilité
            </button>
            <p className="text-sm py-2">
              Déclaration d'accessibilité : partiellement conforme
            </p>
          </div>

          {/* Logo CIC */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <img src="images/logo cic.jpeg" alt="CIC" className="h-16 w-auto mx-auto" />
            </div>
            <p className="text-lg">Construisons pour que le monde bouge</p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-gray-300 transition">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <Linkedin className="w-8 h-8" />
            </a>
          </div>

          {/* Bouton retour en haut */}
          <div className="flex justify-end">
            <button 
              onClick={scrollToTop}
              className="bg-white text-teal-700 p-4 hover:bg-gray-100 transition"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Barre fixe en bas */}
      <div className="fixed bottom-0 left-0 right-0 bg-cyan-100 py-4 sm:py-6 px-2 sm:px-4 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-1 sm:gap-0 sm:flex sm:items-center sm:justify-center sm:divide-x sm:divide-teal-600">
            <button 
              onClick={onNavigateToLogin}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-2 sm:px-6 md:px-12 text-teal-700 hover:text-teal-900 transition"
            >
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-xs sm:text-base md:text-lg">Nous</div>
                <div className="font-semibold text-xs sm:text-base md:text-lg">contacter</div>
              </div>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-2 sm:px-6 md:px-12 text-teal-700 hover:text-teal-900 transition"
            >
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-xs sm:text-base md:text-lg">Trouver une</div>
                <div className="font-semibold text-xs sm:text-base md:text-lg">agence</div>
              </div>
            </button>

            <button 
              onClick={onNavigateToLogin}
              className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-2 sm:px-6 md:px-12 text-teal-700 hover:text-teal-900 transition"
            >
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              <div className="text-center sm:text-left">
                <div className="font-semibold text-xs sm:text-base md:text-lg">Besoin</div>
                <div className="font-semibold text-xs sm:text-base md:text-lg">d'aide ?</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}