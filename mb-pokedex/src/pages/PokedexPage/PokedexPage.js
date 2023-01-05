import Card from "../../components/Card/Card";
import { Container} from "./PokedexPage.styled";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/url";
import{ useContext} from "react"
import { GlobalContext} from "../../contexts/GlobalContext"

function PokedexPage(setPoke) {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context;

  return (
    <Container>
      
      <Header/>
    
      <h1>Meus Pokémons</h1>
      <section>
        {pokedex.map((pokemon) => (
          <Card
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}pokemon/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
