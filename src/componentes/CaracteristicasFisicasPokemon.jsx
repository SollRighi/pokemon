import styled from "styled-components";

const StyleCaracteristicasFisicasPokemon = styled.div`
  padding: 20px;
`;

export default function CaracteristicasFisicasPokemon({ titulo, valor }) {
  return (
    <StyleCaracteristicasFisicasPokemon>
      <p style={{ color: "white" }}>{titulo}</p>
      <p style={{ color: "black" }}>{valor}</p>
    </StyleCaracteristicasFisicasPokemon>
  );
}
