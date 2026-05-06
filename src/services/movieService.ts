import axios from "axios";
import type { TmdbResponse } from "../types/movie";

export const fetchMovies = async (query: string): Promise<TmdbResponse> => {
  const { data } = await axios.get<TmdbResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: "75033fc5962145187a41ec4f7c671e3f",
        query: query,
        include_adult: false,
        language: "uk-UA",
        page: 1,
      },
    },
  );
  return data;
};
