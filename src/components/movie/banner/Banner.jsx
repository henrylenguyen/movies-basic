import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerItem from "./BannerItem";
import { Autoplay } from "swiper";
const Banner = () => {
  // const [movies, setMovies] = useState([])
  const { data: moviesList, error } = useSWR(
    tmdbAPI.getMovieList("upcoming"),
   
    fetcher
  );
  const { data: genreList } = useSWR(tmdbAPI.getGenreMovie(), fetcher);
 
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
      <Swiper
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
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Banner;
