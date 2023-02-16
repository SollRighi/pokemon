import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../service/api";

const StyleImagem = styled.div``;
const StyleTextos = styled.div``;

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
    <>
      <StyleImagem>
        <img src={pokemon.sprites.front_default} alt="imagemPokemon" />
      </StyleImagem>
      <StyleTextos></StyleTextos>
    </>
  );
}
