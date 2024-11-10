import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CharacterList } from "./components/CharacterList";
import { CharactersProvider } from "./context/CharactersProvider";
import CharacterDetail from "./components/CharacterDetail";
/**
 * TODO: usando la api de dragon ball https://web.dragonball-api.com/
 * 1. Crear un componente que muestre un personaje de dragon ball
 * 2. Crear un componente que muestre una lista de personajes de dragon ball
 * 3. Crear un componente que muestre un personaje de dragon ball y que permita agregarlo a un listado de personajes favoritos
 *
 *
 * R1: debe tener al menos un provider con toda la data de los personajes incluyendo el detalle de estos
 * R2: debe tener al menos un consumer que permita acceder a la data de los personajes en una ruta separada
 * EXTRA: montar un buscador de personajes
 * EXTRA2: cachear la data de los personajes
 */

function App() {
  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/details/:id" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  );
}

export default App;
