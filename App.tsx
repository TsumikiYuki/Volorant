import React, { useState } from 'react';
import type { Character } from './types';
import AgentSelectScreen from './screens/AgentSelectScreen';
import AgentDetailsScreen from './screens/AgentDetailsScreen';
import GameScreen from './screens/GameScreen';

type GameState = 'select' | 'details' | 'game';

const App: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Character | null>(null);
  const [gameState, setGameState] = useState<GameState>('select');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSelectAgent = (agent: Character) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedAgent(agent);
      setGameState('details');
      setIsTransitioning(false);
    }, 300); // Match transition duration
  };

  const handleGoBack = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedAgent(null);
      setGameState('select');
      setIsTransitioning(false);
    }, 300); // Match transition duration
  };

  const handleConfirmAgent = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setGameState('game');
      setIsTransitioning(false);
    }, 300);
  };

  const handleExitGame = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedAgent(null);
      setGameState('select');
      setIsTransitioning(false);
    }, 300);
  };

  const renderScreen = () => {
    switch(gameState) {
      case 'select':
        return <AgentSelectScreen onAgentSelect={handleSelectAgent} />;
      case 'details':
        if (!selectedAgent) return <AgentSelectScreen onAgentSelect={handleSelectAgent} />;
        return <AgentDetailsScreen character={selectedAgent} onBack={handleGoBack} onConfirm={handleConfirmAgent} />;
      case 'game':
        return <GameScreen onExit={handleExitGame} />;
      default:
        return <AgentSelectScreen onAgentSelect={handleSelectAgent} />;
    }
  }

  return (
    <div className={`min-h-screen w-full transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {renderScreen()}
    </div>
  );
};

export default App;