import React, { useState, useEffect, useRef } from 'react';
import type { Character, Ability } from '../types.ts';

interface CharacterDetailsProps {
  character: Character;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  const [selectedAbility, setSelectedAbility] = useState<Ability>(character.abilities[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Get the click sound element from the DOM on component mount
    clickSoundRef.current = document.getElementById('ui-click-sound') as HTMLAudioElement;
  }, []);

  const handleSelectAbility = (ability: Ability) => {
    if (ability.key === selectedAbility.key) return;

    // Play the click sound
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0; // Rewind to start
      clickSoundRef.current.play().catch(error => console.error("Click sound failed:", error));
    }
    
    setSelectedAbility(ability);
    setAnimationKey(prev => prev + 1); // Trigger re-render for animation
  };

  return (
    <div className="relative z-10 p-8 md:p-12 text-white h-full flex flex-col justify-between">
      <div>
        <div className="mb-8">
          <h2 className="text-sm uppercase tracking-[0.5em] text-cyan-400">// BIOGRAFIA</h2>
          <p className="mt-2 text-lg font-sans max-w-lg leading-tight">{character.bio}</p>
        </div>
        
        <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.5em] text-cyan-400">// FUNÇÃO</h2>
            <div className="flex items-center gap-2 mt-2">
                {character.roleIcon}
                <p className="text-xl font-bold uppercase">{character.role}</p>
            </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h2 className="text-sm uppercase tracking-[0.5em] text-cyan-400">// HABILIDADES ESPECIAIS</h2>
        
        {/* Clickable Icons */}
        <div className="flex justify-start gap-4 py-2">
          {character.abilities.map((ability) => {
            const isSelected = selectedAbility.key === ability.key;
            const isUltimate = ability.key === 'X';
            return (
              <button
                key={ability.key}
                onClick={() => handleSelectAbility(ability)}
                className={`
                  w-16 h-16 flex-shrink-0 flex items-center justify-center transition-all duration-300 border-2
                  ${isSelected
                    ? 'bg-white text-gray-900 border-cyan-400 scale-110'
                    : isUltimate
                    ? 'bg-cyan-400 text-gray-900 border-cyan-400/50 hover:border-white'
                    : 'bg-black/50 text-white border-gray-600 hover:border-white'
                  }
                `}
                aria-label={`Selecionar habilidade: ${ability.name}`}
              >
                {ability.icon}
              </button>
            );
          })}
        </div>

        {/* Selected Ability Details with Animation */}
        <div key={animationKey} className="text-left animate-ability-details min-h-[140px]">
          <p className="text-xs uppercase text-cyan-400 tracking-widest">{selectedAbility.key} - {selectedAbility.key === 'X' ? 'ULTIMATE' : 'HABILIDADE'}</p>
          <h3 className="text-2xl font-bold uppercase text-white tracking-wide">{selectedAbility.name}</h3>
          <p className="text-sm text-gray-300 font-sans normal-case max-w-md">{selectedAbility.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;