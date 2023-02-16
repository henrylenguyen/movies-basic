import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import useSWR from "swr";
import { API_Key, fetcher } from '../../config';
import MovieCard from './MovieCard';


const MovieList = ({ type = "now_playing" }) => {
  // const [movie, setMovie] = useState([])
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${API_Key}`,
    fetcher
    );
  
  // useEffect(() => {
  //   if(data&&data.results){
  //     setMovie(data.results);

  //   }
  // }, [data]);
  const movies = data?.results || [];
  return (
    <div className="movie-list">
      <Swiper
        grabCursor={"true"}
        spaceBetween={40}
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;