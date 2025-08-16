
import React from 'react';
import { AGENTS } from '../constants.tsx';
import type { Character } from '../types.ts';
import AgentCard from '../components/AgentCard.tsx';

interface AgentSelectScreenProps {
  onAgentSelect: (character: Character) => void;
}

const AgentSelectScreen: React.FC<AgentSelectScreenProps> = ({ onAgentSelect }) => {
  return (
    <div 
        className="min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-8 bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.9), rgba(17, 24, 39, 1)), url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7a634143322b7953/62a24f487a8b3309cb4b5c77/Valorant_LORE_Article-Header.jpg)' }}
    >
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-widest">
            <span className="text-cyan-400">//</span> SELECIONE SEU AGENTE
        </h1>
      </header>
      
      <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {AGENTS.map((agent, index) => (
                  <AgentCard 
                    key={agent.name} 
                    character={agent} 
                    onSelect={onAgentSelect}
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
              ))}
          </div>
      </div>
    </div>
  );
};

export default AgentSelectScreen;