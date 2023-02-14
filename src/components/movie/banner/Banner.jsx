import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";

const Banner = () => {
  // const [movies, setMovies] = useState([])
  const { data: moviesList, error } = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=77becd787af72c80307f0877b3a400f4",
    fetcher
  );
  const { data: genreList } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=77becd787af72c80307f0877b3a400f4",
    fetcher
    );
 
    // useEffect(() => {
    //   if (fetchMovie) {
    //     setMovies(fetchMovie.results);
    //   }
    // }, [fetchMovie]);
    // console.log("movies", movies);

 


   const movies = moviesList?.results || [];
   const genre = genreList?.genres || [];

  return (
    <section className="banner h-[500px]  page-container mb-10 overflow-hidden">
      <Swiper>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
