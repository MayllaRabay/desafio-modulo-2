import logoIcon from '../../assets/images/logo.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import userIcon from '../../assets/images/user.png';
import styles from './styles.module.scss';

function Header({ handleSearch }) {
  return (
    <div className={styles.header__wrapper}>
        <form>
          <img src={logoIcon} alt="Logo" />
          <input onChange={e => handleSearch(e)} onKeyDown={e => e.key === "Enter" && handleSearch(e)} type="text" 
            placeholder="Pesquise filmes..." aria-labelledby="Pesquise filmes..." />
          <img className={styles.search__icon} src={searchIcon} alt="" />
        </form>
        <div className={styles.user__info}>
          <span>Bem vindo Link!</span>
          <img src={userIcon} alt="User" width="50px" />
        </div>
    </div>
  );
}

export default Header;