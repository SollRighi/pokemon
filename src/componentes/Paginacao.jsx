import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import styled from "styled-components";

const StylePaginacao = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
`;

export default function Paginacao({ avancar, voltar }) {
  return (
    <StylePaginacao>
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<ArrowBackIcon />}
        onClick={() => voltar()}
      />
      <IconButton
        variant="outline"
        colorScheme="teal"
        aria-label="Send email"
        icon={<ArrowForwardIcon />}
        onClick={() => avancar()}
      />
    </StylePaginacao>
  );
}
