
import React from 'react';
import type { Character } from './types';

// SVG Icons for Abilities
const CloneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M15.707 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 9H13a1 1 0 1 1 0-2h4.586l-1.879-1.879a1 1 0 0 1 0-1.414ZM8.001 4.5A2.5 2.5 0 0 0 5.5 7v1.5a1.5 1.5 0 0 1-3 0V7a5.5 5.5 0 0 1 11 0v1.5a1.5 1.5 0 0 1-3 0V7a2.5 2.5 0 0 0-2.5-2.5h-1ZM4.001 12a1.5 1.5 0 0 1 1.5 1.5v1.5a2.5 2.5 0 0 0 5 0V13.5a1.5 1.5 0 0 1 3 0v1.5a5.5 5.5 0 0 1-11 0V13.5a1.5 1.5 0 0 1 1.5-1.5h1Z" clipRule="evenodd" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.974 0 9.19 3.226 10.678 7.697a.75.75 0 0 1 0 .606C21.19 17.024 16.973 20.25 12.001 20.25c-4.974 0-9.19-3.226-10.678-7.697a.75.75 0 0 1 0-.606ZM12 17.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" clipRule="evenodd" />
  </svg>
);

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM2.25 6a.75.75 0 0 0 0 1.5h8.25a.75.75 0 0 0 0-1.5H2.25ZM2.25 12a.75.75 0 0 0 0 1.5h8.25a.75.75 0 0 0 0-1.5H2.25ZM21.75 6a.75.75 0 0 0 0 1.5h-8.25a.75.75 0 0 0 0-1.5h8.25ZM21.75 12a.75.75 0 0 0 0 1.5h-8.25a.75.75 0 0 0 0-1.5h8.25Z" clipRule="evenodd" />
  </svg>
);

const SwordsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M4.5 3.75a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75v-9Zm6.25.5a.75.75 0 0 0-1.5 0v4.69L6.53 6.22a.75.75 0 0 0-1.06 1.06l2.72 2.72a.75.75 0 0 0 1.06 0l2.72-2.72a.75.75 0 0 0-1.06-1.06L10.75 8.94V4.25Z" />
    <path d="M18 8.25a.75.75 0 0 0-.75.75v9a.75.75 0 0 1-.75.75h-9a.75.75 0 0 0 0 1.5h9A2.25 2.25 0 0 0 18.75 18v-9a.75.75 0 0 0-.75-.75Z" />
  </svg>
);

// SVG Icon for Roles
const DuelistIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071 1.052A32.94 32.94 0 0 1 12.963 2.286ZM9.75 4.125a.75.75 0 0 0-1.06-.02l-4.5 4.25a.75.75 0 1 0 1.04 1.08l4.5-4.25a.75.75 0 0 0 .02-1.06ZM15.31 4.125a.75.75 0 0 1 1.06.02l4.5 4.25a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1-.02-1.06ZM12 21.75a2.25 2.25 0 0 1-2.247-2.228v-6.654a1.5 1.5 0 0 1 1.488-1.502h1.518a1.5 1.5 0 0 1 1.488 1.502v6.654A2.25 2.25 0 0 1 12 21.75Z" clipRule="evenodd" />
  </svg>
);

const SentinelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path fillRule="evenodd" d="M3.75 5.25a3 3 0 0 1 3-3h10.5a3 3 0 0 1 3 3v13.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V5.25Zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v13.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5H6.75Z" clipRule="evenodd" />
      <path d="M12 7.073l3.927 3.927a.75.75 0 0 1 0 1.06L12 16.927l-3.927-3.927a.75.75 0 0 1 0-1.06L12 7.073Z" />
    </svg>
);


// SVG Icons for Olga's Abilities
const CamouflageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM8.663 3.632a.75.75 0 0 1-.587.947 9.001 9.001 0 0 0-2.31 5.922.75.75 0 0 1-1.498-.068 10.501 10.501 0 0 1 2.695-6.91.75.75 0 0 1 .7 1.11Zm1.68 16.736a.75.75 0 0 1-1.11-.7 9.001 9.001 0 0 1 5.922-2.31.75.75 0 0 1 .947.587 10.501 10.501 0 0 0-6.909 2.695.75.75 0 0 1-1.11-.7Zm8.019-8.019a.75.75 0 0 1-.068-1.498 9.001 9.001 0 0 0-5.922-2.31.75.75 0 0 1-.587-.947 10.501 10.501 0 0 1 6.91 2.695.75.75 0 0 1-.333 1.06Zm-16.736 1.68a.75.75 0 0 1 .7-1.11 9.001 9.001 0 0 1 2.31 5.922.75.75 0 0 1-1.498.068A10.501 10.501 0 0 0 3.626 13.5a.75.75 0 0 1 .7-1.11Z" clipRule="evenodd" />
  </svg>
);

const KineticImpulseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M3.75 18.75a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M6.333 11.474.956 8.358a.75.75 0 0 1 .632-1.352l7.872 1.799a.75.75 0 0 0 .808-.18l5.25-4.5a.75.75 0 0 1 1.168.94l-3.364 4.881a.75.75 0 0 0 .193.99l4.5 3.75a.75.75 0 0 1-.884 1.208l-5.623-2.92a.75.75 0 0 0-.89.09l-3.75 3a.75.75 0 0 1-.93-.99l2.42-3.873a.75.75 0 0 0-.214-.997Z" clipRule="evenodd" />
  </svg>
);

const AudaciousStanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V7.5h-1.5V2.25A.75.75 0 0 1 12 1.5ZM11.25 7.5v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-3.75v1.5a.75.75 0 0 1-1.5 0v-1.5H8.25a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3H11.25Z" clipRule="evenodd" />
  </svg>
);

const DefyDeathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.645 20.91a.75.75 0 0 1-1.29 0l-5.646-9.74A.75.75 0 0 1 5.25 10h13.5a.75.75 0 0 1 .55.26l-5.646 9.74Z" />
    <path fillRule="evenodd" d="M12 2.25c.414 0 .75.336.75.75v6a.75.75 0 0 1-1.5 0V3c0-.414.336-.75.75-.75Zm-4.5 9a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5h-9Z" clipRule="evenodd" />
  </svg>
);


// SVG Icons for Ominous's Abilities
const WhispersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.974 0 9.19 3.226 10.678 7.697a.75.75 0 0 1 0 .606C21.19 17.024 16.973 20.25 12.001 20.25c-4.974 0-9.19-3.226-10.678-7.697a.75.75 0 0 1 0-.606ZM12 17.25a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z" clipRule="evenodd" />
        <path d="M18.75 12a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm-15 0a.75.75 0 0 1-.75.75H1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Z" />
    </svg>
);

const GiftShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M12 2.25c-5.185 0-9.442 3.863-10.326 8.848a.75.75 0 0 0 .574.887 41.513 41.513 0 0 0 19.504 0 .75.75 0 0 0 .574-.887C21.442 6.113 17.185 2.25 12 2.25ZM8.25 15a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" clipRule="evenodd" />
  </svg>
);

const HealingTouchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.645 20.91a.75.75 0 0 1-1.29 0l-5.646-9.74A.75.75 0 0 1 5.25 10h13.5a.75.75 0 0 1 .55.26l-5.646 9.74Z" />
    <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75.75v3.75h3.75a.75.75 0 0 1 0 1.5h-3.75V12a.75.75 0 0 1-1.5 0V8.25H8.25a.75.75 0 0 1 0-1.5h3.75V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);

const EndlessCycleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M16.143 4.286a7.5 7.5 0 1 0-8.286 15.428 7.5 7.5 0 0 0 8.286-15.428ZM8.5 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm7 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/>
  </svg>
);

// SVG Icons for Tomori's Abilities
const BalaTemporalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Z" />
    <path d="M12.75 9a.75.75 0 0 0-1.5 0v2.44l-1.97-1.97a.75.75 0 0 0-1.06 1.06L10.19 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06l1.97-1.97V15a.75.75 0 0 0 1.5 0v-2.44l1.97 1.97a.75.75 0 1 0 1.06-1.06L13.81 12l1.97-1.97a.75.75 0 1 0-1.06-1.06l-1.97 1.97V9Z" />
    <path fillRule="evenodd" d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75ZM12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5Z" clipRule="evenodd" />
  </svg>
);

const PassoDimensionalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M11.25 4.5a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0V4.5Z" />
        <path d="M6.31 8.016a.75.75 0 0 1 1.023.23l1.94 2.91a.75.75 0 0 0 .633.374h2.188a.75.75 0 0 0 .633-.374l1.94-2.91a.75.75 0 0 1 1.253.82l-1.94 2.91a2.25 2.25 0 0 1-1.898 1.124h-2.188a2.25 2.25 0 0 1-1.898-1.124l-1.94-2.91a.75.75 0 0 1 .23-1.023Z" />
        <path d="M16.19 16.03a.75.75 0 0 1 .23 1.024l-1.94 2.91a2.25 2.25 0 0 1-1.898 1.124h-2.188a2.25 2.25 0 0 1-1.898-1.124l-1.94-2.91a.75.75 0 1 1 1.253-.82l1.94 2.91a.75.75 0 0 0 .633.374h2.188a.75.75 0 0 0 .633-.374l1.94-2.91a.75.75 0 0 1 1.024-.23Z" />
    </svg>
);

const CalmariaDosAnjosIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd" d="M12 2.25c-5.185 0-9.442 3.863-10.326 8.848a.75.75 0 0 0 .574.887 41.513 41.513 0 0 0 19.504 0 .75.75 0 0 0 .574-.887C21.442 6.113 17.185 2.25 12 2.25ZM3.085 13.54a4.13 4.13 0 0 1-.223-1.414c.26-4.943 4.41-8.876 9.138-8.876s8.878 3.933 9.138 8.876a4.13 4.13 0 0 1-.223 1.414 41.667 41.667 0 0 1-18.73 0Z" clipRule="evenodd" />
    <path fillRule="evenodd" d="M12 15a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    <path d="M13.828 16.172a.75.75 0 0 1 0 1.06l-1.591 1.591a.75.75 0 0 1-1.06-1.06l1.59-1.591a.75.75 0 0 1 1.061 0Zm-3.656 0a.75.75 0 0 0 0 1.06l1.59 1.591a.75.75 0 1 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.06 0Z" />
  </svg>
);

const FrenesiDeGolpesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.25 3.75a.75.75 0 0 1 .75.75v13.06l4.28-4.28a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.28 4.28V4.5a.75.75 0 0 1 .75-.75Z" />
    <path d="M7.197 3.93a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 2.81 10.253 4.56a.75.75 0 0 1-1.06 0L7.197 3.93ZM3.93 7.197a.75.75 0 0 1 1.06 0l1.767 1.768a.75.75 0 0 1 0 1.06L5.001 11.75a.75.75 0 1 1-1.06-1.06l1.756-1.756-1.756-1.756a.75.75 0 0 1 0-1.06Z" />
    <path d="M20.07 7.197a.75.75 0 0 0-1.06 0L17.247 8.965a.75.75 0 0 0 0 1.06L18.999 11.75a.75.75 0 1 0 1.06-1.06l-1.756-1.756 1.756-1.756a.75.75 0 0 0 0-1.06Z" />
  </svg>
);

const yunaData: Character = {
  name: 'Yuna',
  role: 'Duelista',
  roleIcon: <DuelistIcon />,
  bio: 'Forjada pela fúria dos Dragões Azuis, Yuna é a soberana da rebelião. Ela é a arquiteta de um novo amanhecer para seu povo adotado, empunhando um poder que pode remodelar nações e destinos.',
  image: 'https://cdn.tupperbox.app/pfp/677244312198578202/kvxG_Nc9Df7Nx9GQ.webp',
  abilities: [
    {
      key: 'Q',
      name: 'Duplicidade',
      description: 'EQUIPE um eco prismático de si mesma. DISPARE para lançar o clone para frente, que explode em um clarão ao ser destruído por inimigos.',
      icon: <CloneIcon />,
    },
    {
      key: 'E',
      name: 'Olhar do Destino',
      description: 'EQUIPE um fragmento do fio do destino. DISPARE contra um inimigo para marcá-lo. O alvo fica brevemente visível através de paredes.',
      icon: <EyeIcon />,
    },
    {
      key: 'C',
      name: 'Grimório Dimensional',
      description: 'EQUIPE uma página do grimório dracônico. DISPARE para invocar um espectro que avança e cega inimigos próximos ao ser destruído.',
      icon: <BookIcon />,
    },
    {
      key: 'X',
      name: 'Tempestade de Lâminas',
      description: 'ATIVE a fúria dos Dragões Azuis para materializar lâminas flutuantes. Por um curto período, seus ataques básicos são substituídos por facas de arremesso velozes.',
      icon: <SwordsIcon />,
    },
  ],
};

const olgaData: Character = {
  name: 'Olga',
  role: 'Duelista',
  roleIcon: <DuelistIcon />,
  bio: 'Com a força de uma muralha e a determinação de uma caçadora, Olga entra na luta. Cada anomalia que ela erradica é mais um rastro na busca incansável por seu irmão, Alex. Para ela, a missão da instituição é pessoal, uma guerra travada tanto contra o sobrenatural quanto contra o seu próprio passado.',
  image: 'https://images-ext-1.discordapp.net/external/_QoI8YRyy8VRPo3BOlnLyK2uUHhHv711LdTEc-8HsvA/https/cdn.tupperbox.app/pfp/727305599192399902/-9WsU8Jxovel2BHS.webp?format=webp',
  abilities: [
    {
      key: 'Q',
      name: 'Camuflagem Suomino',
      description: 'EQUIPE um dispositivo de camuflagem. DISPARE para se tornar brevemente invisível, dificultando sua detecção por inimigos.',
      icon: <CamouflageIcon />,
    },
    {
      key: 'E',
      name: 'Salto Tático',
      description: 'EQUIPE um impulso direcional. DISPARE para saltar rapidamente em linha reta, seja para avançar sobre posições inimigas ou para um reposicionamento rápido.',
      icon: <KineticImpulseIcon />,
    },
    {
      key: 'C',
      name: 'Postura Audaciosa',
      description: 'Ao ficar parada por um momento, Olga ganha vantagem em seu próximo ataque, garantindo um disparo mais potente. Ideal para segurar ângulos com precisão letal.',
      icon: <AudaciousStanceIcon />,
    },
    {
      key: 'X',
      name: 'Segunda Chance',
      description: 'Ao receber dano fatal, Olga ignora a morte uma vez por rodada, retornando com uma porção de vida e ficando invulnerável por um curto período para escapar.',
      icon: <DefyDeathIcon />,
    },
  ],
};

const ominousData: Character = {
  name: 'Ominous',
  role: 'Sentinela',
  roleIcon: <SentinelIcon />,
  bio: 'Ominous, o Arauto Sussurrante, caminha entre mundos. Meio humano, meio mistério felino, ele canaliza o poder de entidades além da compreensão. Como Sentinela, ele não apenas protege posições, ele protege a própria realidade.',
  image: 'https://images-ext-1.discordapp.net/external/pJP75lJE-O0-aG7warT5_sDC1mroKzFYtu3YOUZGLX4/https/cdn.tupperbox.app/pfp/471701543641546752/TWq5ag6GEDOSX0QZ.webp?format=webp',
  abilities: [
    {
      key: 'Q',
      name: 'Demônio Onisciente',
      description: 'Canalize o poder de entidades antigas para revelar a posição de um inimigo próximo, ganhando conhecimento proibido sobre o campo de batalha.',
      icon: <WhispersIcon />,
    },
    {
      key: 'E',
      name: 'Dádiva da Amizade',
      description: 'Use um dos presentes recebidos de anomalias para conceder um escudo protetor a um aliado ou a si mesmo, uma prova de que a amizade é uma força poderosa.',
      icon: <GiftShieldIcon />,
    },
    {
      key: 'C',
      name: 'Toque Restaurador',
      description: 'Concentre a energia dos seus itens mágicos para curar um aliado, concedendo-lhe uma recuperação de vida e um breve aumento de velocidade.',
      icon: <HealingTouchIcon />,
    },
    {
      key: 'X',
      name: 'Ciclo Interminável',
      description: 'Marque sua essência em um local. Ao ser abatido, Ominous renasce no local marcado, recusando-se a deixar o campo de batalha até que sua vontade se esgote.',
      icon: <EndlessCycleIcon />,
    },
  ],
};

const tomoriData: Character = {
  name: 'Tomori',
  role: 'Duelista',
  roleIcon: <DuelistIcon />,
  bio: 'Nascida da união proibida entre um mortal e a Deusa do Tempo, Tomori carrega o fardo e o poder de duas realidades. Empunhando a Espada do Zodíaco, ela distorce o tempo e o espaço para proteger o equilíbrio, caçando aqueles que ousam perturbar o fluxo da história.',
  image: 'https://images-ext-1.discordapp.net/external/k3OAsk80EK2m-7lY7j7r3qd5qHSvKieGNEPGlieyPMc/https/cdn.tupperbox.app/pfp/677244312198578202/eCgsl6tQ4zvFdbhU.webp?format=webp',
  abilities: [
    {
      key: 'Q',
      name: 'Bala Temporal',
      description: 'EQUIPE uma bala imbuída com poder temporal. DISPARE para atirar um projétil que, ao atingir um inimigo, o prende em uma bolha de tempo lento por um curto período.',
      icon: <BalaTemporalIcon />,
    },
    {
      key: 'E',
      name: 'Passo Dimensional',
      description: 'EQUIPE um eco dimensional. DISPARE para enviá-lo para frente. REATIVE para se teleportar para a posição do eco. O eco pode atravessar paredes por uma curta distância.',
      icon: <PassoDimensionalIcon />,
    },
    {
      key: 'C',
      name: 'Calmaria dos Anjos',
      description: 'EQUIPE uma aura protetora. DISPARE para emitir um pulso que concede a si mesma e aos aliados próximos um escudo temporário que absorve dano.',
      icon: <CalmariaDosAnjosIcon />,
    },
    {
      key: 'X',
      name: 'Frenesi de Golpes',
      description: 'EQUIPE a Espada do Zodíaco. ATIVE para entrar em um frenesi, aumentando drasticamente sua velocidade de disparo e recarga por um curto período, permitindo um massacre implacável.',
      icon: <FrenesiDeGolpesIcon />,
    },
  ],
};

export const AGENTS: Character[] = [yunaData, olgaData, ominousData, tomoriData];
