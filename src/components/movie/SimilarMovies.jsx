import React from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { API_Key, fetcher } from "../../config";
import MovieCard from './MovieCard';
const SimilarMovies = () => {
    const { movieId } = useParams();
    const { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${API_Key}`,
      fetcher
      );
    const movies = data?.results || [];
    
  return (
    <div className="py-10">
      <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
      <div className="movie-list">
        <Swiper
          grabCursor={"true"}
          spaceBetween={40}
          slidesPerView={"auto"}
          loop={true}
        >
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SimilarMovies;