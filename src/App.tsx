import { useState } from 'react';
import { toast } from 'react-hot-toast'; 
import SearchBar from './components/SearchBar/SearchBar';
import MovieList from './components/MovieGrid/MovieList';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MovieModal from './components/MovieModal/MovieModal';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setMovies([]);
      setError(false);
      setLoading(true);
      const data = await fetchMovies(query);

      if (data.results.length === 0) {
      
        toast.error('No movies found for your request.');
      } else {
        setMovies(data.results);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
    
      <SearchBar onSubmit={handleSearch} />
      <main>
        {isError && <ErrorMessage />}
        {isLoading && <Loader />}
        {movies.length > 0 && !isLoading && (
          <MovieList movies={movies} onSelect={setSelectedMovie} />
        )}
      </main>
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default App;


