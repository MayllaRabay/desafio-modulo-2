import logoIcon from './assets/images/logo.svg';
import searchIcon from './assets/images/search-icon.svg';
import userIcon from './assets/images/user.png';
import styles from './styles/App.module.scss';

function App() {
  return (
    <div className={styles.main__container}>
      <div className={styles.header__wrapper}>
        <form>
          <img src={logoIcon} alt="" />
          <input placeholder="Pesquise filmes..." />
          <img className={styles.search__icon} src={searchIcon} alt="" />
        </form>
        <div className={styles.user__info}>
          <span>Bem vindo Link!</span>
          <img src={userIcon} alt="" width="50px"/>
        </div>
      </div>

      <div className={styles.top__films__wrapper}>
        <h1>Top filmes</h1>
        <div className={styles.top__films__cards}>
          <div className={styles.film__card}>
            <img src="" alt="" />
            <div className={styles.film__info}>
              
            </div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;