import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
const BannerItem = ({ item: { poster_path, original_title, id } }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-xl relative overflow-hidden">
      <div className="absolute overlay inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>

      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt={original_title}
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{original_title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-lg text-[13px]">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg text-[13px]">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-lg text-[13px]">
            Adventure
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)}>Watch</Button>
      </div>
    </div>
  );
};

export default BannerItem;
