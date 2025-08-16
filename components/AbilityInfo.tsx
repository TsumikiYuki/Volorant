
import React from 'react';
import type { Ability } from '../types.ts';

interface AbilityInfoProps {
  ability: Ability;
}

const AbilityInfo: React.FC<AbilityInfoProps> = ({ ability }) => {
  const isUltimate = ability.key === 'X';

  return (
    <div className="flex items-center gap-4 group">
      <div className={`
        flex-shrink-0 w-16 h-16
        flex items-center justify-center 
        transition-all duration-300
        ${isUltimate 
          ? 'bg-cyan-400 text-gray-900 group-hover:bg-white' 
          : 'bg-black/50 text-white group-hover:bg-cyan-400 group-hover:text-gray-900'}
      `}>
        {ability.icon}
      </div>
      <div className="text-left">
        <p className="text-xs uppercase text-cyan-400 tracking-widest">{ability.key} - {isUltimate ? 'ULTIMATE' : 'HABILIDADE'}</p>
        <h3 className="text-2xl font-bold uppercase text-white tracking-wide">{ability.name}</h3>
        <p className="text-sm text-gray-300 font-sans normal-case max-w-xs">{ability.description}</p>
      </div>
    </div>
  );
};

export default AbilityInfo;