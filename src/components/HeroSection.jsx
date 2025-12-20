import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 mx-4 sm:mx-6 my-6 sm:my-8 rounded-lg overflow-hidden">
      {/* Image de fond */}
      <img 
        src="/images/famille.jpeg" 
        alt="Famille heureuse dans leur nouveau départ"
        className="w-full h-full object-cover"
      />
    </div>
  );
}