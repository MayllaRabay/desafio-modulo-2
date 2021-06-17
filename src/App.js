import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles/App.module.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const localMovies = [...movies];
    const searchedMovies = [];

    for (const movie of localMovies) {
      if(((movie.title).toLowerCase()).includes((e.target.value).toLowerCase())) {
        searchedMovies.push(movie);
      };
    }

    setSearchMovies(searchedMovies);
  }

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
      <Header handleSubmit={handleSubmit} />
      <div className={styles.main__wrapper}>
        <div className={styles.films__wrapper}>

          <h1>Top filmes</h1>
          <div className={styles.films__cards}>
            {(movies.slice(0, 5)).map(movie => <Card movie={movie} key={movie.id + 'top'} />)}
          </div>
          
          <h1>Filmes</h1>
          <div className={styles.films__cards}>
            {searchMovies.length === 0 ? movies.map(movie => <Card movie={movie} key={movie.id} />) 
            : searchMovies.map(movie => <Card movie={movie} key={movie.id} />)} 
          </div>
          
        </div>
        <ShoppingCart movies={movies} />
      </div>
    </>
  );
}

export default App;