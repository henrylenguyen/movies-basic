import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { API_Key, fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=
const MovieCreadits = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_Key}`,
    fetcher
  );
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <>
      <h2 className="text-center text-3xl mb-10">Casts</h2>
      <div className="select-none">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {cast.map((item) => (
            <SwiperSlide className="cast-item relative" key={item.id}>
    
              <img
                src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                alt=""
                className="w-full h-[350px] rounded-lg"
              />
              <h3 className="text-xl font-medium absolute bottom-0">{item.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieCreadits;
