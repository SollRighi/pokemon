import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardPokemon from "../componentes/CardPokemon";
import Paginação from "../componentes/Paginacao";
import Pesquisar from "../componentes/Pesquisar";
import Titulo from "../componentes/Titulo";
import api from "../service/api";

export default function PaginaListagemPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [avancar, setAvancar] = useState("");
  const [voltar, setVoltar] = useState("");

  const getPokemon = (offset, limit) => {
    api
      .get("/pokemon", {
        params: {
          limit: limit,
          offset: offset,
        },
      })
      .then(({ data }) => {
        const { results, next, previous } = data;
        setPokemons(results);
        setAvancar(next);
        setVoltar(previous);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };

  useEffect(() => {
    getPokemon(0, 12);
  }, []);

  const aoPesquisar = (valor) => {
    let valorEncontrado = pokemons.find(valor);
    if (valor === valorEncontrado) {
      console.log("encontrou o valor");
    }
  };

  const aoVoltar = () => {
    const url = new URL(voltar);
    const offset = url.searchParams.get("offset");
    const limit = url.searchParams.get("limit");
    console.log(offset, limit);
    getPokemon(offset, limit);
  };

  const aoAvancar = () => {
    const url = new URL(avancar);
    const offset = url.searchParams.get("offset");
    const limit = url.searchParams.get("limit");
    console.log(offset, limit);
    getPokemon(offset, limit);
  };

  useEffect(() => {
    console.log(pokemons);
  }, [pokemons]);

  return (
    <div className="App">
      <Titulo />
      <Pesquisar pesquisar={aoPesquisar} />
      {/* passando por props a função criada no pai */}
      <div className="Pokemons">
        <SimpleGrid columns={6} spacing={50}>
          {pokemons.map((pokemon, key) => (
            <CardPokemon nome={pokemon.name} key={pokemon.name} />
          ))}
        </SimpleGrid>
      </div>
      <Paginação avancar={aoAvancar} voltar={aoVoltar} />
    </div>
  );
}
