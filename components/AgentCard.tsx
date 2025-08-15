import React from 'react';
import type { Character } from '../types';

interface AgentCardProps {
  character: Character;
  onSelect: (character: Character) => void;
  style: React.CSSProperties;
}

const AgentCard: React.FC<AgentCardProps> = ({ character, onSelect, style }) => {
  return (
    <div className="animate-card-enter" style={style}>
      <button
        onClick={() => onSelect(character)}
        className="
          group relative w-full aspect-[3/4] bg-gray-800 overflow-hidden 
          outline-none border-2 border-transparent hover:border-cyan-400 
          focus:border-cyan-400 transition-all duration-300 ease-in-out
          hover:-translate-y-2 hover:scale-105
        "
      >
        <img
          src={character.image}
          alt={character.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 md:p-6">
          <h3 className="text-3xl md:text-4xl font-bold uppercase text-white tracking-widest">{character.name}</h3>
        </div>
      </button>
    </div>
  );
};

export default AgentCard;
