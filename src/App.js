import "./ListagemPokemons.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaListagemPokemons from "./pages/ListagemPokemons";
import DetalhesPokemon from "./pages/DetalhesPokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaListagemPokemons />,
  },
  {
    path: "/:nome",
    element: <DetalhesPokemon />,
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
