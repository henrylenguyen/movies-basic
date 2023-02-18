import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "./button/Button";
//npm i prop-types
const MovieCard = ({ item }) => {
  const { poster_path, original_title, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="movie-card rounded-lg bg-gradient-to-br from-[rgba(211,211,218,0.7)] to-[#4745457c] p-3 select-none h-full ">
      <img
        src={tmdbAPI.imageOriginal(poster_path)}
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
        <Button
          bgColor="secondary"
          full
          onClick={() => navigate(`/movie/${id}`)}
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

export default MovieCard;
