export const goToPokemonsListPage = (navigate) => {
  navigate("/");
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemonDetailPagePrime = (navigate, pokemonName) => {
  navigate(`/details/${pokemonName}`);
};
