import { createContext } from "react";

export interface Character {
    id: number;
    name: string;
    image: string; 
}

export interface Detail {
    id: number;
    name: string;
    image: string; 
    ki: string;
    race: string; 
    gender: string;
    description: string;
}

export interface CharactersContext {
    characters: Character[];
    favorites: Character[];
    details: Detail[];
    addToFavorites: (character: Character) => void;
    removeFavorite: (characterId: number) => void;
  }

export const CharactersContext = createContext<CharactersContext  | undefined>(undefined);
