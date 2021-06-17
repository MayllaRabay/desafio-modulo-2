import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles/App.module.scss';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const response = await fetch('https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR');
    const { results } = await response.json();

    const formattedData = [];

    for (const movie of results) {
      formattedData.push({
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        vote: movie.vote_average,
        price: (movie.price).toFixed(2).replace('.' , ',')
      });
    }

    setMovies(formattedData);
  }

  return (
    <>
      <Header />
      <div className={styles.main__wrapper}>
        <div className={styles.films__wrapper}>

          <h1>Top filmes</h1>
          <div className={styles.films__cards}>
            {(movies.slice(0, 5)).map(movie => <Card movie={movie} key={movie.id + 'top'} />)}
          </div>
          
          <h1>Filmes</h1>
          <div className={styles.films__cards}>
            {movies.map(movie => <Card movie={movie} key={movie.id} />)}
          </div>
          
        </div>
        <ShoppingCart movies={movies} />
      </div>
    </>
  );
}

export default App;