
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/PokemonsListPage/PokemonsListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/PokemonDetailPage/PokemonDetailPage";

function Router() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage />
          }
        />
        <Route
          path="/pokedex"
          element={
            <PokedexPage />
          }
        />
        <Route
          path="/details/:name"
          element={
            <PokemonDetailPage />
          }
        />
        <Route
          path="*"
          element={
            <NotFoundPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
