import bagIcon from './assets/images/bag.svg';
import starIcon from './assets/images/golden-star.svg';
import logoIcon from './assets/images/logo.svg';
import personIcon from './assets/images/person-illustration.svg';
import searchIcon from './assets/images/search-icon.svg';
import userIcon from './assets/images/user.png';
import Movies from './data.js';
import styles from './styles/App.module.scss';

function App() {
  return (
    <>
      <div className={styles.header__wrapper}>
        <form>
          <img src={logoIcon} alt="" />
          <input type="text" placeholder="Pesquise filmes..." />
          <img className={styles.search__icon} src={searchIcon} alt="" />
        </form>
        <div className={styles.user__info}>
          <span>Bem vindo Link!</span>
          <img src={userIcon} alt="" width="50px"/>
        </div>
      </div>

      <div className={styles.main__wrapper}>
        <div className={styles.films__wrapper}>
          <h1>Top filmes</h1>
          <div className={styles.top__films__cards}>
            {Movies.map(movie => (
              <div className={styles.film__card} style={{ background: `rgba(0, 0, 0, .5) url(${movie.poster_path}) center/cover` }}>
                <div className={styles.film__info__wrapper}>
                  <div className={styles.film__info}>
                    <span>{movie.title}</span>
                    <span className={styles.film__vote}>
                      <img src={starIcon} alt="" />
                      {movie.vote_average}
                    </span>
                  </div>
                  <button className={styles.film__button}>
                    <span>Sacola</span>
                    <span>R${movie.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <h1>Filmes</h1>
          <div className={styles.films__cards}>
            {Movies.map(movie => (
              <div className={styles.film__card} style={{ background: `rgba(0, 0, 0, .55) url(${movie.poster_path}) center/cover` }}>
                <div className={styles.film__info__wrapper}>
                  <div className={styles.film__info}>
                    <span>{movie.title}</span>
                    <span className={styles.film__vote}>
                      <img src={starIcon} alt="" />
                      {movie.vote_average}
                    </span>
                  </div>
                  <button className={styles.film__button}>
                    <span>Sacola</span>
                    <span>R$ {movie.price}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bag__wrapper}>
          <div className={styles.bag__header}>
            <img src={bagIcon} alt="" />
            <span>Sacola</span>
          </div>
          <div className={styles.bag__main}>
            <div className={styles.empty__bag}>
              <h2>Sua sacola está vazia</h2>
              <h4>Adicione filmes agora</h4>
              <img src={personIcon} alt="" />
            </div>
            <div className={styles.content__bag} hidden>
              <button>
                <span>Confirme seus dados</span>
                <span>R$ {}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;