import { Toaster } from 'react-hot-toast';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleAction = (formData: FormData) => {
    const query = formData.get('query') as string;
    if (query?.trim()) {
      onSubmit(query.trim());
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.link} href="https://themoviedb.org" target="_blank" rel="noopener noreferrer">
          Powered by TMDB
        </a>

        {/* Цей блок тримає віконце в центрі */}
        <div className={styles.toastWrapper}>
          <Toaster 
            containerStyle={{ 
              position: 'relative', 
              inset: '0px' 
            }} 
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#ff4d4d',
                border: '1px solid #ff4d4d',
                fontSize: '14px',
                padding: '8px',
                width: '220px',
                boxShadow: 'none' 
              },
            }} 
          />
        </div>

        <form action={handleAction} className={styles.form}>
          <input className={styles.input} type="text" name="query" placeholder="Search movies..." />
          <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;

