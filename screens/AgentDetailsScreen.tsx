

import React, { useState, useRef, useEffect } from 'react';
import type { Character } from '../types.ts';
import CharacterDetails from '../components/CharacterDetails.tsx';

interface AgentDetailsScreenProps {
    character: Character;
    onBack: () => void;
    onConfirm: () => void;
}

const AgentDetailsScreen: React.FC<AgentDetailsScreenProps> = ({ character, onBack, onConfirm }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = document.getElementById('bg-music') as HTMLAudioElement;
    if (audioElement) {
      audioRef.current = audioElement;
      audioRef.current.volume = 0.1; 
    }
    clickSoundRef.current = document.getElementById('ui-click-sound') as HTMLAudioElement;
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleConfirmClick = () => {
    if (clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play().catch(error => console.error("Click sound failed:", error));
    }
    onConfirm();
  }

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to top, rgba(17, 24, 39, 1), rgba(17, 24, 39, 0.7)), url(https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7b623946c7398188/637eb836e1b6f539d6b2815f/Valorant_2022_E6A1_PlayVALORANT_ContentStack_Thumbnail_1200x628_MB01.jpg)' }}>
      <main className="relative w-full h-screen flex flex-col md:flex-row items-stretch text-white overflow-hidden">
        
        {/* Back Button */}
        <button 
            onClick={onBack}
            className="absolute top-4 left-4 md:top-8 md:left-8 z-50 flex items-center gap-2 text-white uppercase text-lg font-bold tracking-widest opacity-70 hover:opacity-100 transition-opacity"
        >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z" clipRule="evenodd" />
            </svg>
            Voltar
        </button>

        {/* Left Side - Details */}
        <div className="w-full md:w-[60%] h-full flex flex-col justify-center bg-gray-900/40 backdrop-blur-sm">
          <CharacterDetails character={character} />
        </div>

        {/* Right Side - Character Portrait */}
        <div className="w-full md:w-[40%] h-full relative flex items-center justify-center p-8 md:p-12">
          {/* Angled Divider */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gray-900/40 transform -skew-x-[8deg] z-20 hidden md:block" style={{left: '-48px'}}></div>

          {/* Character Name Background Text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
            <h1 
                className="text-[12rem] lg:text-[18rem] font-black uppercase text-white select-none whitespace-nowrap"
                style={{ textShadow: '0 0 25px rgba(255, 255, 255, 0.1)' }}
            >
              {character.name}
            </h1>
          </div>
        
          {/* Character Image Container */}
          <div className="relative z-10 w-full max-w-md h-auto max-h-[85%]">
             <div className="relative w-full h-full border-2 border-cyan-400/50 bg-black/20 p-2">
                 <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover object-center"
                />
             </div>
             <div className="absolute -inset-1 border border-cyan-300/30 blur-sm opacity-70"></div>
          </div>
        </div>
      </main>

      {/* Music Control Button */}
      <div className="absolute bottom-4 right-4 z-50">
        <button
          onClick={toggleMusic}
          className="w-12 h-12 bg-black/50 border-2 border-gray-600 hover:border-white transition-colors duration-300 flex items-center justify-center text-white"
          aria-label={isMusicPlaying ? "Pausar música" : "Tocar música"}
        >
          {isMusicPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.722-2.779-.217-2.779-1.643V5.653Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Lock In Button */}
      <div className="absolute bottom-8 right-1/2 translate-x-1/2 md:right-32 md:translate-x-0 z-40">
        <button
          onClick={handleConfirmClick}
          className="px-16 py-4 bg-cyan-400 text-gray-900 text-2xl font-black uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:scale-105"
          style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}
        >
          LOCK IN
        </button>
      </div>

    </div>
  );
};

export default AgentDetailsScreen;