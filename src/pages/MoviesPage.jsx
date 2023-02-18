import React, { useEffect, useState } from "react";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import { fetcher, tmdbAPI } from "../config";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
//npm install @heroicons/react

const itemsPerPage = 20;

const MoviesPage = () => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    `${tmdbAPI.getMovieList("popular")}&page=${nextPage}`
  );
  const debounce = useDebounce(filter, 500);
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  const movies = data?.results || [];
  useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage));
  }, [data, itemOffset]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  useEffect(() => {
    if (debounce) {
      setUrl(tmdbAPI.getSearchMovie(debounce,nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [debounce, nextPage]);

  return (
    <div className="py-10 page-container text-white">
      <div className="flex mb-5">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-3 bg-slate-800 "
            placeholder="Type here to search..."
            onChange={handleFilterChange}
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
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-t-transparent border-primary border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="mt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>
    </div>
  );
};

export default MoviesPage;
