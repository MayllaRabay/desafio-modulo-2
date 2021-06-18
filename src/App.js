import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles/App.module.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [addToCart, setAddToCart] = useState([]);

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
        price: (movie.price).toFixed(2).replace('.' , ','),
        qtd: 1
      });
    }
    
    setMovies(formattedData);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const localMovies = [...movies];
    let searchedMovies = [];

    for (const movie of localMovies) {
      if(((movie.title).toLowerCase()).includes((e.target.value).toLowerCase())) {
        searchedMovies.push(movie);
      };
    }

    setSearchMovies(searchedMovies);
  }

  function handleAddToCart(movieId) {
    const localMovies = [...movies];
    let alreadyAdded = false

    for (const movieCart of addToCart) {
      if(movieCart.id === movieId) {
        alreadyAdded = true;
      };
    }

    for (const movie of localMovies) {
      if(movie.id === movieId && alreadyAdded) {
        movie.qtd++;
      } else if(movie.id === movieId && !alreadyAdded) {
        addToCart.push(movie);
      };
    }
    setAddToCart([...addToCart]);
  }

  function handleMovieAmount(value, movieId) {
    const localMovies = [...addToCart];

    const index = localMovies.findIndex(movie => movie.id === movieId);

    if(index === -1) return;

    const newAmount = localMovies[index].qtd + value;
    if(newAmount > 0) {
      localMovies[index].qtd = newAmount;
    } else if(newAmount === 0) {
      localMovies.splice(index, 1)
    };

    setAddToCart([...localMovies]);
  }

  return (
    <>
      <Header handleSubmit={handleSubmit} />
      <div className={styles.main__wrapper}>
        <div className={styles.films__wrapper}>

          <h1>Top filmes</h1>
          <div className={styles.films__cards}>
            {(movies.slice(0, 5)).map(movie => <Card movie={movie} key={movie.id + 'top'} handleAddToCart={handleAddToCart} />)}
          </div>
          
          <h1>Filmes</h1>
          <div className={styles.films__cards}>
            {searchMovies.length === 0 ? movies.map(movie => <Card movie={movie} key={movie.id} />) 
            : searchMovies.map(movie => <Card movie={movie} key={movie.id} handleAddToCart={handleAddToCart} />)} 
          </div>
          
        </div>
        <ShoppingCart addToCart={addToCart} handleMovieAmount={handleMovieAmount} />
      </div>
    </>
  );
}

export default App;