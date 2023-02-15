import React from "react";
import { useNavigate } from "react-router-dom";
//npm i prop-types
const MovieCard = ({ item }) => {
  const { poster_path, original_title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg bg-gradient-to-br from-[rgba(211,211,218,0.7)] to-[#4745457c] p-3 select-none h-full ">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="h-[350px] rounded-2xl"
        alt={original_title}
      />
      <div className="text-white mt-2 movie-content">
        <h3 className="title font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
          {original_title}
        </h3>
        <div className="flex justify-between mt-5 text-[13px]">
          <span className="year font-semibold">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="year font-semibold">
            {vote_average}
            <i className="fas fa-star ml-2 text-yellow-400"></i>
          </span>
        </div>
        <button
          className="btn-watch mt-3 w-full justify-center"
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch now
          <i className="fas fa-play icon-play"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
