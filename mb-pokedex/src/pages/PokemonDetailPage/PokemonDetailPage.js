import React, {
  useEffect,
  useState,
} from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../components/Header/Header"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import bug from "../../Assets/img/bug.svg"
import poison from "../../Assets/img/poison.svg"
import flying from "../../Assets/img/flying.svg"
import grass from "../../Assets/img/grass.svg"
import fire from "../../Assets/img/fire.svg"
import water from "../../Assets/img/water.svg"
import normal from "../../Assets/img/normal.svg"
import {
  Page,
  BaseStats,
  MainContainer,
  ImgFront,
  ImgBack,
  SectionContainer,
  BaseStatsValue,
  ImgFrontBack,
  ImgDefault,
  IdNameTypeMoves,
  IdName,
  Type,
  Moves,
  Total,
  ImgCard,
  ImgPokeMain
} from "./PokemonDetailStyle";
import { cores } from "../../Color/Color"
import imgCard from "../../Assets/img/imgCard.svg"
import { Progress } from '@chakra-ui/react'
import { BASE_URL } from "../../constants/url";


const PokemonDetailPage = () => {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context;
  const [corDetail, setCorDetail] = useState([])
  const [pokemoni, setPokemoni] = useState();
  const [poke, setPoke] = useState(false);
  const { name } = useParams();

  useEffect(() => {
    atualizaCor()
  }, [pokemoni])

  const atualizaCor = async () => {
    if (pokemoni) {
      setCorDetail(pokemoni.types[0].type.name)
    }
  }

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((r) => r.json())
      .then((json) => {
        setPokemoni(json)
        setPoke(true)
      });
  }, [name]);

  if (!pokemoni) {
    return null;
  }
 
  const tipo1 = () => {
    if (pokemoni.types[0]) {
      return (
        pokemoni.types[0].type.name)
    }
  }

  const tipo2 = () => {
    if (pokemoni.types[1]) {
      return (
        pokemoni.types[1].type.name)
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

  const mapPoder = pokemoni.stats.map((item) => (
    <div>{item.base_stat}</div>))
  console.log(mapPoder)

  const array = []
  array.push(mapPoder)
  const somar = (acumulado, x) => acumulado + x;
  const total = array.reduce(somar);
  console.log(total)

  let somafinal = total.reduce((acumulado, soma) => acumulado + soma.props.children, 0)

  function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
  };

  let idNum = Number(pokemoni.id)

  return (
    <div className="PokemonView">
      <Header
        key={pokedex.name}
        pokemonUrl={`${BASE_URL}pokemon/${pokedex.name}`}
        removeFromPokedex={removeFromPokedex}
      />
      <MainContainer>
        <Page>Detalhes</Page>
        <SectionContainer color={cores(corDetail)}>
          <ImgFrontBack>
            <ImgFront>
              <img
                src={pokemoni.sprites.front_default}
                alt={pokemoni.name}
              />
            </ImgFront>
            <ImgBack>
              <img
                src={pokemoni.sprites.back_default}
                alt={pokemoni.name}
              />
            </ImgBack>
          </ImgFrontBack>
          <BaseStats >
            <h2>Base stats</h2>
            <BaseStatsValue>
              <div className="move_poder">
                <div className="moves_name">
                  <hr />
                  <div className="barra">
                    <span className="forca">HP</span>
                    <span className="valor">{pokemoni.stats[0].base_stat}</span>
                    <span className="progress">
                      {<Progress
                        colorScheme={pokemoni.stats[0].base_stat > 50 ? "yellow" : "orange"}
                        borderRadius="5px"
                        value={mapPoder[0].props.children} />}
                    </span>
                  </div>
                  <hr />
                  <div className="barra">
                    <span className="forca">Attack</span>
                    <span className="valor">{pokemoni.stats[1].base_stat}</span>
                    <span className="progress">
                      <Progress
                        borderRadius="5px"
                        colorScheme={pokemoni.stats[1].base_stat > 50 ? "yellow" : "orange"}
                        value={mapPoder[1].props.children} />
                    </span>
                  </div>
                  <hr />
                  <div className="barra">
                    <span className="forca">Defense</span>
                    <span className="valor">{pokemoni.stats[2].base_stat}</span>
                    <span className="progress">
                      <Progress
                        colorScheme={pokemoni.stats[2].base_stat > 50 ? "yellow" : "orange"}
                        borderRadius="5px"
                        value={mapPoder[2].props.children} />
                    </span>
                  </div>
                  <hr />
                  <div className="barra">
                    <span className="forca">Sp. Atk</span>
                    <span className="valor">{pokemoni.stats[3].base_stat}</span>
                    <span className="progress">
                      <Progress
                        colorScheme={pokemoni.stats[3].base_stat > 50 ? "yellow" : "orange"}
                        borderRadius="5px"
                        value={mapPoder[3].props.children} /></span>
                  </div>
                  <hr />
                  <div className="barra">
                    <span className="forca">Sp. Def</span>
                    <span className="valor">{pokemoni.stats[4].base_stat}</span>
                    <span className="progress">
                      <Progress
                        colorScheme={pokemoni.stats[4].base_stat > 50 ? "yellow" : "orange"}
                        borderRadius="5px"
                        value={mapPoder[4].props.children} />
                    </span>
                  </div>
                  <hr />
                  <div className="barra">
                    <span className="forca">Speed</span>
                    <span className="valor">{pokemoni.stats[5].base_stat}</span>
                    <span className="progress">
                      <Progress
                        borderRadius="5px"
                        colorScheme={pokemoni.stats[5].base_stat > 50 ? "yellow" : "orange"}
                        value={mapPoder[5].props.children} />
                    </span>
                  </div>
                  <hr />
                  <Total>
                    <span>Total</span>
                    <span className="valor">{somafinal}</span>
                  </Total>
                  <hr />
                </div>
              </div>
            </BaseStatsValue>
          </BaseStats>

          <IdNameTypeMoves>

            <IdName>
              <h4>#{leftPad(idNum, 2)}</h4>
              <h1>{pokemoni.name[0].toUpperCase() + pokemoni.name.slice(1)}</h1>
            </IdName>

            <Type>
              <div className="type_one">
                {renderSwitch(tipo1())}
              </div>
              <div className="type_two">
                {renderSwitch(tipo2())}
              </div>
            </Type>

            <Moves>
              <h2>Moves:</h2>
              
              <span className="move one" >
                {pokemoni.moves[0].move.name}
              </span>             
              <span className="move two">
                {pokemoni.moves[1].move.name}
              </span>
              <span className="move tree">
                {pokemoni.moves[2].move.name}
              </span>
              <span className="move four">
                {pokemoni.moves[3].move.name}
              </span>
              
            </Moves>

          </IdNameTypeMoves>
          <ImgCard className="disc" src={imgCard} />

          <ImgDefault src={pokemoni.sprites?.other["official-artwork"].front_default} />

        </SectionContainer>
      </MainContainer>
      
    </div>
  );
};

export default PokemonDetailPage;