export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const API_Key = "77becd787af72c80307f0877b3a400f4";
export const endPoint = "https://api.themoviedb.org/3/movie";
export const endPointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type, page = 1) =>
    `${endPoint}/${type}?api_key=${API_Key}&page=${page}`,
  getMovieDetails: (movieId) => `${endPoint}/${movieId}?api_key=${API_Key}`,
  getMovieByInfor: (movieId, type) =>
    `${endPoint}/${movieId}/${type}?api_key=${API_Key}`,
  getGenreMovie: () =>
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_Key}`,
  getSearchMovie: (query, page = 1) =>
    `${endPointSearch}?api_key=${API_Key}&query=${query}&page=${page}`,
  imageOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`,
};
//https://api.themoviedb.org/3/movie/popular?api_key=77becd787af72c80307f0877b3a400f4
