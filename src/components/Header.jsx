import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

// Icône de poignée de main (handshake)
const HandshakeIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 11h1a3 3 0 0 1 0 6h-1"/>
    <path d="M9 12v6"/>
    <path d="M13 12v6"/>
    <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-2.5.5-2.5 2c0 1 .5 1.5 1.5 2l5 3 5-3c1-.5 1.5-1 1.5-2 0-1.5-1.5-2-2.5-2z"/>
  </svg>
);

// Icône de cadenas
const LockIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="11" width="14" height="10" rx="2" ry="2"/>
    <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
  </svg>
);

export default function Header({ onNavigateToLogin, onNavigateToInscription }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="border-b-4 border-teal-600">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
          <div className="flex items-center justify-between gap-2">
            {/* Menu hamburger - visible uniquement sur mobile */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1 p-1.5 sm:p-2 hover:bg-gray-100 rounded transition "
            >
              <div className="w-5 sm:w-7 h-0.5 bg-gray-800"></div>
              <div className="w-5 sm:w-7 h-0.5 bg-gray-800"></div>
              <div className="w-5 sm:w-7 h-0.5 bg-gray-800"></div>
              <span className="text-[10px] sm:text-xs font-semibold text-gray-800 mt-0.5">Menu</span>
            </button>

            {/* Logo CIC */}
            <div className="">
              <img 
                src="/images/logo cic.jpeg" 
                alt="CIC" 
                className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
              />
            </div>

            {/* Icône de recherche - cachée sur petit mobile */}
            <button 
              onClick={onNavigateToLogin}
              className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition  ml-auto lg:ml-0"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
            </button>

            {/* Boutons - Desktop */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 ml-auto">
              {/* Ouvrir un compte */}
              <button 
                onClick={onNavigateToInscription}
                className="flex flex-col items-center gap-1 px-3 xl:px-4 py-2 hover:bg-purple-50 rounded transition group"
              >
                <HandshakeIcon />
                <span className="text-xs xl:text-sm font-semibold text-purple-700 group-hover:text-purple-800 whitespace-nowrap">
                  Ouvrir un compte
                </span>
              </button>

              {/* Espace client */}
              <button 
                onClick={onNavigateToLogin}
                className="flex flex-col items-center gap-1 px-3 xl:px-4 py-2 hover:bg-red-50 rounded transition group"
              >
                <LockIcon />
                <span className="text-xs xl:text-sm font-semibold text-red-600 group-hover:text-red-700 whitespace-nowrap">
                  Espace client
                </span>
              </button>
            </div>

            {/* Boutons - Mobile/Tablet */}
            <div className="lg:hidden flex items-center gap-1 sm:gap-2 ml-auto">
              {/* Recherche petit mobile seulement */}
              <button 
                onClick={onNavigateToLogin}
                className="sm:hidden flex items-center justify-center w-8 h-8 border-2 border-teal-600 rounded-full hover:bg-teal-50 transition "
              >
                <Search className="w-3.5 h-3.5 text-teal-600" />
              </button>
              
              {/* Ouvrir un compte - mobile */}
              <button 
                onClick={onNavigateToInscription}
                className="flex flex-col items-center gap-0.5 px-1.5 sm:px-2 py-1 hover:bg-purple-50 rounded transition "
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <HandshakeIcon />
                </div>
                <span className="text-[9px] sm:text-xs font-semibold text-purple-700 leading-tight text-center">
                  Ouvrir un<br/>compte
                </span>
              </button>

              {/* Espace client - mobile */}
              <button 
                onClick={onNavigateToLogin}
                className="flex flex-col items-center gap-0.5 px-1.5 sm:px-2 py-1 hover:bg-red-50 rounded transition "
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5">
                  <LockIcon />
                </div>
                <span className="text-[9px] sm:text-xs font-semibold text-red-600 leading-tight text-center">
                  Espace<br/>client
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-3 space-y-2">
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Particuliers
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Professionnels
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Entreprises
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Banque privée
            </button>
            
            {/* Séparateur */}
            <div className="border-t border-gray-200 my-2"></div>
            
            {/* Éléments de la sidebar */}
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Gérer ses comptes
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Emprunter
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Assurer et sécuriser
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Épargner
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Investir en bourse
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Nous contacter
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Vous et vos besoins
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Ma banque et moi
            </button>
            
            {/* Séparateur */}
            <div className="border-t border-gray-200 my-2"></div>
            
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-green-600 font-medium">
              Ma banque s'engage
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded text-green-600 font-medium">
              Sécurité, conseils et bonnes pratiques
            </button>
            <button onClick={onNavigateToLogin} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Accessibilité
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}