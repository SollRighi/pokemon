import styled from "styled-components";

const StyleBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyleCaixa = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  gap: 5px;
`;
const StyleBarra = styled.div`
  padding: 10px;
  width: 200px;
  height: 5px;
  background-color: ${(props) => (props.preenchido ? "#7474d3" : "pink")};
`;
const StyleTitulo = styled.div`
  color: black;
  font-size: 18px;
  text-transform: capitalize;
`;

export default function StatisticasPokemon({ titulo, valor }) {
  return (
    <StyleBody>
      <StyleCaixa>
        <StyleBarra preenchido={valor >= 100} />
        <StyleBarra preenchido={valor >= 90} />
        <StyleBarra preenchido={valor >= 80} />
        <StyleBarra preenchido={valor >= 70} />
        <StyleBarra preenchido={valor >= 60} />
        <StyleBarra preenchido={valor >= 50} />
        <StyleBarra preenchido={valor >= 40} />
        <StyleBarra preenchido={valor >= 30} />
        <StyleBarra preenchido={valor >= 20} />
        <StyleBarra preenchido={valor >= 10} />
      </StyleCaixa>
      <StyleTitulo>{titulo}</StyleTitulo>
    </StyleBody>
  );
}
