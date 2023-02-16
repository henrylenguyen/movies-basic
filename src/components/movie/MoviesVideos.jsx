import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from "swr";
import { API_Key, fetcher } from "../../config";
const MoviesVideos = () => {
   const { movieId } = useParams();
   const { data, error } = useSWR(
     `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_Key}`,
     fetcher
     );
    const videos = data?.results || [];


  return (
    <div className="py-10">
      <div className="flex flex-col gap-10"></div>
      {videos.slice(0, 1).map((item) => (
        <div key={item.id}>
          <h3 className="inline-block bg-secondary font-medium p-3 my-10">
            {item.name}
          </h3>
          <div className="w-full aspect-video">
            <iframe
              width="942"
              height="539"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="[ Vietsub + Lyric ] Hayd - Head In The Clouds"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-fill"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MoviesVideos;