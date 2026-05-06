import type { Movie } from '../../types/movie';
import styles from './MovieGrid.module.css';

interface MovieListProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieList = ({ movies, onSelect }: MovieListProps) => {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => {
        // Формуємо ПРАВИЛЬНУ адресу: домен image + розмір w500 + шлях файлу
        const finalUrl = movie.poster_path 
          ? "https://tmdb.org" + movie.poster_path 
          : "https://placeholder.com";

        return (
          <li key={movie.id} onClick={() => onSelect(movie)}>
            <div className={styles.card}>
              <img
                className={styles.image}
                src={finalUrl}
                alt={movie.title}
              />
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;


















