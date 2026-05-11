import axios from "axios";
import type { Movie } from "../types/movie";

export interface TmdbResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<TmdbResponse> => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "false",
      language: "uk-UA",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const { data } = await axios.request<TmdbResponse>(options);
  return data;
};
