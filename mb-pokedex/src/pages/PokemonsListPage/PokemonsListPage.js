import Card from "../../components/Card/Card";
import { Container } from "./PokemonsListStyle";
import Header from "../../components/Header/Header";
import{ useContext} from "react"
import { GlobalContext} from "../../contexts/GlobalContext"


function PokemonsListPage() {

  const context = useContext(GlobalContext)

  const { pokelist, addToPokedex, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );  

  return (
    <>
    <Header />
    <Container>
    <h1>Todos Pokémons</h1>
      <section>
        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}      
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
          
        ))}
        
      </section>
    </Container>
    </>
  );
}

export default PokemonsListPage;
