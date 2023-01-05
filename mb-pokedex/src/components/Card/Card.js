import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  ImgPokemon,
  ImgCard,
  ButtonAdd,
  ButtonRemove,
  PokeName,
  PokeId,
  Types,
  Coluna1Container,
  Coluna2Container,
  ContainerMaster,
} from "./Card.styled";
import imgCard from "../../Assets/img/imgCard.svg"
import { cores } from "../../Color/Color"
import { Link } from 'react-router-dom';
import bug from "../../Assets/img/bug.svg"
import poison from "../../Assets/img/poison.svg"
import flying from "../../Assets/img/flying.svg"
import grass from "../../Assets/img/grass.svg"
import fire from "../../Assets/img/fire.svg"
import water from "../../Assets/img/water.svg"
import normal from "../../Assets/img/normal.svg"
import {
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"







function Card({ pokemonUrl, addToPokedex, removeFromPokedex }) {

  const [pokem, setPokem] = useState({});
  const [pok, setPok] = useState(false);

  const context = useContext(GlobalContext)

  const { pokedex } = context;

  const { isOpen, onOpen, onClose } = useDisclosure()

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [cor, setCor] = useState([])

  const [pokemon, setPokemon] = useState({});
  const [pokemonAtualiza, setPokemonAtualiza] = useState(false)
  useEffect(() => {
    fetchPokemon();
  }, []);


  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data)
      setPokemonAtualiza(true)
      setPokem(response.data)
      setPok(true)
      setCor(response.data.types[0]?.type.name)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  console.log(pokem)
  const pokenome = (pokemon.name)

  const tipo1 = () => {
    if (pokemonAtualiza && pokemon.types[0]) {
      return (
        pokemonAtualiza && pokemon.types[0].type.name)
    }
  }
  const tipo2 = () => {
    if (pokemonAtualiza && pokemon.types[1]) {
      return (
        pokemon.types[1].type.name)
    }
  }
  const renderSwitch = (tipo2) => {
    switch (tipo2) {
      case "grass":
        return <img src={grass} />;
      case "bug":
        return <img src={bug} />;
      case "fire":
        return <img src={fire} />;
      case "poison":
        return <img src={poison} />;
      case "flying":
        return <img src={flying} />;
      case "water":
        return <img src={water} />;
      case "normal":
        return <img src={normal} />;
    }
  }

  const addPoke = () => addToPokedex(pokemon)
  const removePoke = () => removeFromPokedex(pokemon)

  function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };

  let idNum = Number(pokemon.id)



  return (

    <ContainerMaster>

      <Container color={cores(cor)}>

        <Coluna1Container>

          <div>
            <PokeId>#{leftPad(idNum, 2)}</PokeId>
            <PokeName>{pok && pokem.name[0].toUpperCase() + pokem.name.slice(1)}</PokeName>
          </div>

          <Types>
            <div className="type_one">
              {renderSwitch(tipo1())}
            </div>
            <div className="type_two">
              {renderSwitch(tipo2())}
            </div>
          </Types>

          <Link className="details" to={`/details/${pokenome}`}>
            <h4>Detalhes</h4>
          </Link>

        </Coluna1Container>
        <Coluna2Container>
          <ImgCard className="disc" src={imgCard} />

          <div>
            {location.pathname === `/pokedex` ? (
              <>
                <ButtonRemove onClick={() => onOpen(removePoke)}>
                  Excluir
                </ButtonRemove>
                <Modal
                  isOpen={isOpen}
                  onClose={removePoke}>
                  <ModalOverlay />
                  <ModalContent
                    w="451px"
                    h="222px"
                    borderRadius="12px">
                    <ModalHeader
                      fontSize={45}
                      fontFamily="Arial black"
                      textAlign="center"
                      marginTop={10}
                    ><Text
                      as='b'
                    >Oh, no!</Text></ModalHeader>
                    <ModalBody
                      fontSize={18}
                      textAlign="center"
                      marginTop={-7}>
                      <Text
                        as='b'>O Pokémon foi removido da sua Pokédex</Text>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
            ) : (
              <>
                <ButtonAdd onClick={() => onOpen(addPoke)}>
                  Capturar!
                </ButtonAdd>
                <Modal
                  isOpen={isOpen}
                  onClose={addPoke}>
                  <ModalOverlay />
                  <ModalContent
                    w="451px"
                    h="222px"
                    borderRadius="12px"
                  >
                    <ModalHeader
                      fontSize={45}
                      fontFamily="Arial black"
                      textAlign="center"
                      marginTop={10}
                    ><Text
                      as='b'
                    >Gotcha!</Text>
                    </ModalHeader>
                    <ModalBody
                    fontSize={18}
                    textAlign="center"
                    marginTop={-7}
                    >
                      <Text
                        as='b'>O Pokemon foi adicionado a sua Pokédex</Text>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
            )}
          </div>
        </Coluna2Container>
        <div className="imagem_poke">
          <ImgPokemon src={pokemon.sprites?.other["official-artwork"].front_default} alt={pokemon.name} />
        </div>
      </Container>
    </ContainerMaster>

  );
}

export default Card;
