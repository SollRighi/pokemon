import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardHabilidadesPokemon from "../componentes/CardHabilidadesPokemon";
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
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
const StyleImagem = styled.img`
  width: 500px;
`;
const StyleTextos = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  color: #3f3f3f;
  text-transform: capitalize;
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
      <StyleImagem src={pokemon.sprites.front_default} alt="imagemPokemon" />
      <StyleTextos>
        <Text fontSize="50px" color="Black" textAlign={"center"}>
          {pokemon.name}
        </Text>
        <Text fontSize="35px" color="black">
          Efeitos
        </Text>
        <h2>{pokemon.experiencia}</h2>
        {pokemon.abilities.map((habilidade, key) => (
          <CardHabilidadesPokemon
            habilidadePokemon={habilidade.ability.name}
            key={key}
          />
        ))}
      </StyleTextos>
    </StyleBody>
  );
}
