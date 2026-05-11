import { Toaster, toast } from 'react-hot-toast'; // Додали імпорт toast
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleAction = (formData: FormData) => {
    const query = formData.get('query') as string;
    
    // Перевірка на порожній запит
    if (!query || !query.trim()) {
      toast.error('Будь ласка, введіть назву фільму для пошуку'); // Тепер виклик є!
      return;
    }

    onSubmit(query.trim());
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.link} href="https://themoviedb.org" target="_blank" rel="noopener noreferrer">
          Powered by TMDB
        </a>

        <div className={styles.toastWrapper}>
          <Toaster 
            containerStyle={{ position: 'relative', inset: '0px' }} 
            toastOptions={{
              duration: 3000,
              style: {
                background: '#fff',
                color: '#ff4d4d',
                border: '1px solid #ff4d4d',
                fontSize: '14px',
                padding: '8px',
                width: '250px',
              },
            }} 
          />
        </div>

        <form action={handleAction} className={styles.form}>
          <input 
            className={styles.input} 
            type="text" 
            name="query" 
            placeholder="Search movies..." 
          />
          <button className={styles.button} type="submit">Search</button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;


