import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../service/api";

const StyleCard = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100px; */
  color: white;
  align-items: center;
  border-radius: 20px;
  padding: 5px;
  text-transform: capitalize;
  font-size: 24px;
  transition: 200ms;
  :hover {
    box-shadow: 0 0 11px rgb(255, 255, 255);
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export default function CardPokemon({ nome }) {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState();

  const getDetalhesPokemon = useCallback(() => {
    api
      .get(`/pokemon/${nome}`)
      .then(({ data }) => {
        setPokemon(data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [nome]);

  useEffect(() => {
    getDetalhesPokemon();
  }, [getDetalhesPokemon]);

  if (!pokemon) {
    return null;
  }

  return (
    <StyleCard onClick={() => navigate(`/${pokemon.name}`)}>
      <img
        src={pokemon.sprites.front_default}
        alt="imagemPokemon"
        style={{ width: "100px" }}
      />
      {pokemon.name}
    </StyleCard>
  );
}
