
import type { ReactNode } from 'react';

export interface Ability {
  key: 'Q' | 'E' | 'C' | 'X';
  name: string;
  description: string;
  icon: ReactNode;
}

export interface Character {
  name: string;
  role: string;
  roleIcon: ReactNode;
  bio: string;
  image: string;
  abilities: Ability[];
}
