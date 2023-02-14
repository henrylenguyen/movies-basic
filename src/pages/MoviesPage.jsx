import React from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher } from "../config";
//npm install @heroicons/react
const MoviesPage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=77becd787af72c80307f0877b3a400f4`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <div className="grid grid-cols-4 gap-5">
      {movies.length > 0 &&
        movies.map((item) => <MovieCard item={item}></MovieCard>)}
    </div>
  );
};

export default MoviesPage;
