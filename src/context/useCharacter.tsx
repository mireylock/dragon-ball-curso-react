import { useContext } from "react";
import { CharactersContext } from './CharactersContext';

type CharactersHook = () => CharactersContext;

export const useCharacters: CharactersHook = () => {
  const context = useContext(CharactersContext);
  if (context == undefined) {
    throw new Error("useCharacters must be used within a CharactersProvider");
  }
  return context;
};
