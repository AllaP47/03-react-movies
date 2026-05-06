import axios from 'axios';
import type { TmdbResponse } from '../types/movie';

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const instance = axios.create({
  baseURL: 'https://themoviedb.org',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const fetchMovies = async (query: string): Promise<TmdbResponse> => {
  const { data } = await instance.get<TmdbResponse>('/search/movie', {
    params: { query, language: 'uk-UA' },
  });
  return data;
};

