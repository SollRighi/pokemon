import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CaracteristicasFisicasPokemon from "../componentes/CaracteristicasFisicasPokemon";
import CardHabilidadesPokemon from "../componentes/CardHabilidadesPokemon";
import ModalMovesPokemon from "../componentes/ModalMovesPokemon";
import StatisticasPokemon from "../componentes/StatisticasPokemon";
import api from "../service/api";

const StyleBody = styled.div`
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0 250px;
`;
const StyleDetalhes = styled.div`
  display: flex;
  gap: 100px;
`;
const StyleImagem = styled.img`
  width: 200px;
  object-fit: contain;
`;
const StyleTexto = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyleCaracteristicas = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #7474d3;
  border-radius: 15px;
`;

const StyleTituloEstatistica = styled.div`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
`;

const StyleEstatisticas = styled.div`
  display: flex;
  gap: 20px;
`;

export default function DetalhesPokemon() {
  const params = useParams();

  const [pokemon, setPokemon] = useState();

  const getDetalhesPokemon = () => {
    api
      .get(`/pokemon/${params.nome}`)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  useEffect(() => {
    getDetalhesPokemon();
  }, []);

  if (!pokemon) {
    return <h5 style={{ color: "white" }}>Pokemon não encontrado</h5>;
  }

  return (
    <StyleBody>
      <Text
        fontSize="50px"
        color="Black"
        textAlign={"center"}
        paddingTop={"20px"}
        text-transform={"capitalize"}
      >
        {pokemon.name}
      </Text>
      <StyleDetalhes>
        <StyleImagem src={pokemon.sprites.front_default} alt="imagemPokemon" />
        <StyleTexto>
          {pokemon.abilities.map((habilidade, key) => (
            <CardHabilidadesPokemon
              habilidadePokemon={habilidade.ability.name}
              key={key}
            />
          ))}
          <StyleCaracteristicas>
            <CaracteristicasFisicasPokemon
              titulo={"Height"}
              valor={pokemon.height + " m"}
            />
            <CaracteristicasFisicasPokemon
              titulo={"Weight"}
              valor={pokemon.weight + " kg"}
            />
            <CaracteristicasFisicasPokemon
              titulo={"Experience"}
              valor={pokemon.base_experience}
            />
            <CaracteristicasFisicasPokemon
              titulo={"Moves"}
              valor={pokemon.base_experience}
            />
            <CaracteristicasFisicasPokemon
              titulo={"Types"}
              valor={
                <ul>
                  {pokemon.types.map((tipos) => (
                    <li style={{ textTransform: "capitalize" }}>
                      {tipos.type.name}
                    </li>
                  ))}
                </ul>
              }
            />

            <ModalMovesPokemon movimentos={pokemon.moves} />
          </StyleCaracteristicas>
        </StyleTexto>
      </StyleDetalhes>
      <StyleTituloEstatistica>
        <p>Stats</p>
      </StyleTituloEstatistica>
      <StyleEstatisticas>
        {pokemon.stats.map((estatistica, key) => (
          <StatisticasPokemon
            titulo={estatistica.stat.name}
            valor={estatistica.base_stat}
            key={key}
          />
        ))}
      </StyleEstatisticas>
    </StyleBody>
  );
}
