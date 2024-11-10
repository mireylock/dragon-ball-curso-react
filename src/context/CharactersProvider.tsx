import { useEffect, useState } from "react";
import { Character, CharactersContext, Detail } from "./CharactersContext";

export const CharactersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [details, setDetails] = useState<Detail[]>([]);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const listResponse = await fetch(
          "https://dragonball-api.com/api/characters?page=2&limit=4"
        );
        const listData = await listResponse.json();
        setCharacters(listData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const detailsPromises = characters.map((item) =>
          fetch(`https://dragonball-api.com/api/characters/${item.id}`)
        );
        const detailsResponses = await Promise.all(detailsPromises);
        const detailsData = await Promise.all(
          detailsResponses.map((res) => res.json())
        );
        setDetails(detailsData);
      } catch (error) {
        console.error("Error fetching character details:", error);
      }
    };
    fetchDetails();
  }, [characters]);

  const addToFavorites = (character: Character) => {
    setFavorites([...favorites, character]);
  };

  const removeFavorite = (characterId: number) => {
    setFavorites(favorites.filter((c) => c.id !== characterId));
  };

  return (
    <CharactersContext.Provider
      value={{ characters, details, favorites, addToFavorites, removeFavorite }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
