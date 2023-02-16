import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardPokemon from "../componentes/CardPokemon";
import Pesquisar from "../componentes/Pesquisar";
import Titulo from "../componentes/Titulo";
import api from "../service/api";

export default function PaginaListagemPokemons() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemon = () => {
    api
      .get("/pokemon?limit=50")
      .then(({ data }) => {
        const { results } = data;
        setPokemons(results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <Titulo />
      <Pesquisar />
      <div className="Pokemons">
        <SimpleGrid columns={5} spacing={50}>
          {pokemons.map((pokemon, key) => (
            <CardPokemon nome={pokemon.name} key={key} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
}
