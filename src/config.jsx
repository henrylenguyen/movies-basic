export const fetcher = (...args) => fetch(...args).then((res) => res.json() );
export const API_Key = "77becd787af72c80307f0877b3a400f4";

export const netflixAPI = {
  method: "GET",
  url: "https://netflix54.p.rapidapi.com/search/",
  params: {
    query: "stranger",
    offset: "0",
    limit_titles: "50",
    limit_suggestions: "20",
    lang: "en",
  },
  headers: {
    "X-RapidAPI-Key": "75ea161bf7msh7a29188d21ed9c7p113244jsnd22bc35fa5b9",
    "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
  },
};