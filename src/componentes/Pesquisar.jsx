import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";

const StylePesquisar = styled.div`
  display: flex;
  gap: 10px;
`;
export default function Pesquisar({ pesquisar }) {
  const [valorPesquisado, setValorPesquisado] = useState();
  //criando o estado pra armazenar o valor da input

  return (
    <StylePesquisar>
      <Input
        background={"white"}
        width={"800px"}
        color={"black"}
        fontFamily={"serif"}
        placeholder="Pesquise um pokemon aqui.."
        fontSize={"24px"}
        value={valorPesquisado}
        //definindo o valor da input pra ser o estado
        onChange={(e) => setValorPesquisado(e.target.value)}
        //pegando o valor da input e armazenando no estado
      />
      <IconButton
        colorScheme="blue"
        aria-label="Search database"
        icon={<SearchIcon />}
        onClick={() => pesquisar(valorPesquisado)}
        //criando o onclick e recebendo a props da função que esta no pai, passando pra ela o valor da input
      />
    </StylePesquisar>
  );
}
