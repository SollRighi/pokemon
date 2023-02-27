import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import api from "../service/api";

const StyleHabilidades = styled.div`
  color: #3f3f3f;
`;

export default function CardHabilidadesPokemon({ habilidadePokemon }) {
  const [habilidade, setHabilidade] = useState();

  const getHabilidadesPokemon = () => {
    api.get(`/ability/${habilidadePokemon}/`).then(({ data }) => {
      setHabilidade(data);
    });
  };

  useEffect(() => {
    getHabilidadesPokemon();
  }, []);

  if (!habilidade) {
    return <h5 style={{ color: "white" }}>Habilidade não encontrada</h5>;
  }
  console.log(habilidade);

  return (
    <StyleHabilidades>
      <UnorderedList fontSize="16px" color="#3f3f3f">
        {habilidade.effect_entries
          .filter((efeito) => efeito.language.name === "en")
          .map((efeito) => (
            <ListItem>{efeito.short_effect}</ListItem>
          ))}
      </UnorderedList>
    </StyleHabilidades>
  );
}
