import React from 'react'
import imagemLogo from "../../Assets/img/pokemon.svg"
import {
  Imagem,
  DivHeader,
  ButtonHome,
  LinkHome,
  ButtonRemove
} from "./HeaderStyle"
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedexPage, goToPokemonsListPage } from "../../routes/coordinator";
import { useParams } from 'react-router-dom';
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import {
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react'



const Header = () => {



  const context = useContext(GlobalContext)
  const { pokedex, setPokedex, removeFromPokedex, callBackPokemonHome } = context;

  const { name } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const location = useLocation()

  const navigate = useNavigate()

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <>
            <ButtonHome onClick={() => goToPokedexPage(navigate)}>
              <h3>Pokédex</h3>
            </ButtonHome>
          </>
        );
      case "/pokedex":
        return (
          <>
            <LinkHome onClick={() => goToPokemonsListPage(navigate)}>
              <h3>&lt; Todos os Pokémons</h3>
            </LinkHome>
          </>
        );
      default:
        return (
          <>
            <>
              <ButtonRemove onClick={() => {
                const removerDoDetalhes = pokedex.filter((poke) =>
                  poke.name !== name
                )
                setPokedex(removerDoDetalhes)
                onOpen(onOpen)
              }}>
                Excluir da Pokédex
              </ButtonRemove>
              <Modal
                isOpen={isOpen}
                onClose={onClose}>
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
            <LinkHome onClick={() => goToPokemonsListPage(navigate)}>
              <h3>&lt; Todos os Pokémons</h3>
            </LinkHome>

          </>
        );
    }
  };

  return (
    <DivHeader>
      {renderHeader()}
      <Imagem alt="imagem" src={imagemLogo} />
    </DivHeader>
  )
}

export default Header
