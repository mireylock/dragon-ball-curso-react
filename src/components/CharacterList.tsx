import { useCharacters } from "../context/useCharacter";
import { Body, Container, Wrapper } from "./CharacterList.styles";
import { useNavigate } from "react-router-dom";

export const CharacterList: React.FC = () => {
  const navigate = useNavigate();
  const { characters, favorites } =
    useCharacters();

  const handleGoToDetail = (characterId: number) => {
    navigate('/details/'+characterId);
  };

  return (
    <Body>
      <h1>DRAGON BALL</h1>
      <h2>Lista de personajes</h2>
      <Container>
        {characters.map((character) => (
          <Wrapper key={character.id} onClick={() => handleGoToDetail(character.id)}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Wrapper>
        ))}
      </Container>
      <h3>Lista de favoritos</h3>
      <Container>
        {favorites.map((character) => (
          <Wrapper key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>{character.name}</p>
          </Wrapper>
        ))}
      </Container>
    </Body>
  );
};
