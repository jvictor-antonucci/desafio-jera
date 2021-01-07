import React from "react";

import SearchInput from "../components/search-input";
import PopularMovies from "../components/popular-movies";

const Home = () => (
  <>
    <div className="my-5">
        <h1 className="text-center mb4">
            Bem-Vindo!<br />
            Encontre filmes apenas pesquisando abaixo.
        </h1>
        <SearchInput />
    </div>
    <hr />
    <PopularMovies />
  </>
);

export default Home;
