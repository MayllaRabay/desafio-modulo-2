import logoIcon from '../../assets/images/logo.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import userIcon from '../../assets/images/user.png';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.header__wrapper}>
        <form>
          <img src={logoIcon} alt="" />
          <input type="text" placeholder="Pesquise filmes..." />
          <img className={styles.search__icon} src={searchIcon} alt="" />
        </form>
        <div className={styles.user__info}>
          <span>Bem vindo Link!</span>
          <img src={userIcon} alt="" width="50px" />
        </div>
    </div>
  );
}

export default Header;