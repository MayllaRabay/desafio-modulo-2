import Card from './components/Card';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import Movies from './data.js';
import styles from './styles/App.module.scss';


function App() {
  return (
    <>
      <Header />
      <div className={styles.main__wrapper}>
        <div className={styles.films__wrapper}>

          <h1>Top filmes</h1>
          <div className={styles.top__films__cards}>
            {Movies.map(movie => <Card movie={movie} />)}
          </div>
          
          <h1>Filmes</h1>
          <div className={styles.films__cards}>
            {Movies.map(movie => <Card movie={movie} />)}
          </div>
          
        </div>
        <ShoppingCart />
      </div>
    </>
  );
}

export default App;