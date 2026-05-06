import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import MovieList from './components/MovieGrid/MovieList';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import MovieModal from './components/MovieModal/MovieModal';
import { fetchMovies } from './services/movieService';
import type { Movie } from './types/movie';

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSearch = async (query: string) => {
    try {
     
      setMovies([]);
      setIsError(false);
      setIsLoading(true);

      
      const data = await fetchMovies(query);

      if (data.results.length === 0) {
        toast.error('No movies found for your request.');
        return;
      }

      setMovies(data.results);
    } catch (error) {
      console.error(error);
      setIsError(true);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

 return (
  <div>
    <Toaster position="top-right" reverseOrder={false} />
    <SearchBar onSubmit={handleSearch} />

    <main>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      
      {movies.length > 0 && !isLoading && (
        <MovieList movies={movies} onSelect={setSelectedMovie} />
      )}
    </main>

    {selectedMovie && (
      <MovieModal 
        movie={selectedMovie} 
        onClose={() => setSelectedMovie(null)} 
      />
    )}
  </div>
);
};

export default App;

