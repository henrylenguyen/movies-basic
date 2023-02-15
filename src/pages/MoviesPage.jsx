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
    <div className="py-10 page-container text-white">
      <div className="flex mb-5">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-3 bg-slate-800 "
            placeholder="Type here to search..."
          />
        </div>
        <button className="bg-primary px-5 py-3  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviesPage;
