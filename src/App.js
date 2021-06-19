import { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles/App.module.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState('');
  const [addToCart, setAddToCart] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erros, setErros] = useState('');

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    setErros();
    setCarregando(true);

    try {
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
          synopsis: movie.overview,
          qtd: 1
        });
      }
      setMovies(formattedData);
      
    } catch (error) {
      setErros(error.message);
      setMovies([]);
    }

    setCarregando(false);
  }

  function handleSearch(e) {
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
    let alreadyAdded = false;

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
      <Header handleSearch={handleSearch} />
      <div className={styles.main__wrapper}>
        {erros &&
          <div className={styles.error__message}>
            <h2>Algo deu errado ):</h2>
            <span>erro: "{erros}"</span>
          </div>
        }
        
        {carregando ? (
          <div className={styles.loading__message}>
            <span>Carregando...</span>
          </div>
          ) : (
          <div className={styles.films__wrapper}>

            <h1>{erros ? '' : 'Top filmes'}</h1>
            <div className={styles.films__cards}>
              {(movies.slice(0, 5)).map(movie => <Card movie={movie} key={movie.id + 'top'} handleAddToCart={handleAddToCart} />)}
            </div>
            
            <h1>{erros ? '' : 'Filmes'}</h1>
            <div className={styles.films__cards}>
              {searchMovies.length === 0 ? movies.map(movie => <Card movie={movie} key={movie.id} handleAddToCart={handleAddToCart} />) 
              : searchMovies.map(movie => <Card movie={movie} key={movie.id} handleAddToCart={handleAddToCart} />)} 
            </div>
          
          </div>
        )}
        <ShoppingCart addToCart={addToCart} handleMovieAmount={handleMovieAmount} />
      </div>
    </>
  );
}

export default App;