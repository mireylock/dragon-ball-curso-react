import { Params, useNavigate, useParams } from "react-router-dom";
import { useCharacters } from "../context/useCharacter";
import {
  Body,
  ButtonAddFav,
  ButtonBack,
  ButtonRemoveFav,
  Container,
  Wrapper,
} from "./CharacterList.styles";
import { Character } from "../context/CharactersContext";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const navigate = useNavigate();
  const { details, favorites, addToFavorites, removeFavorite } =
    useCharacters();
  const idCharacter = Number(id);
  const character = details.filter((item) => item.id === idCharacter);

  const handleAddToFavorites = (character: Character) => {
    addToFavorites(character);
  };

  const handleRemoveFromFavorites = (characterId: number) => {
    removeFavorite(characterId);
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <Body>
      <ButtonBack onClick={() => handleBack()}>Volver al listado</ButtonBack>
      <h2>Detalle del personaje</h2>

      <Container>
        {character.map((character) => (
          <Wrapper key={character.id}>
            <img src={character.image} alt={character.name} />
            <p>Nombre: {character.name}</p>
            <p>Ki: {character.ki}</p>
            <p>Raza: {character.race}</p>
            <p>Género: {character.gender}</p>
            <p>Descripción: {character.description}</p>

            {favorites.some((fav) => fav.id === character.id) ? (
              <ButtonRemoveFav
                onClick={() => handleRemoveFromFavorites(character.id)}
              >
                Eliminar de favoritos
              </ButtonRemoveFav>
            ) : (
              <ButtonAddFav onClick={() => handleAddToFavorites(character)}>
                Agregar a favoritos
              </ButtonAddFav>
            )}
          </Wrapper>
        ))}
      </Container>
    </Body>
  );
};

export default CharacterDetail;
