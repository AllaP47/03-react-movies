import type { Movie } from '../../types/movie';
import styles from './MovieGrid.module.css';

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const MovieGrid = ({ movies, onSelect }: MovieGridProps) => {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => {
        
        const finalUrl = movie.poster_path 
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
          : "https://placeholder.com";

        return (
          <li key={movie.id} onClick={() => onSelect(movie)}>
            <div className={styles.card}>
              <img className={styles.image} src={finalUrl} alt={movie.title} />
              <h2 className={styles.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieGrid;

















