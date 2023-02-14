import React from "react";
const BannerItem = ({ item }) => {
  return (
    <div className="w-full h-full rounded-xl relative overflow-hidden">
      <div className="absolute overlay inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>

      <img
        src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
        alt={item.original_title}
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{item.original_title}</h2>
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
        <button className="btn-watch">
          Watch
          <i className="fas fa-play icon-play"></i>
        </button>
      </div>
    </div>
  );
};

export default BannerItem;
