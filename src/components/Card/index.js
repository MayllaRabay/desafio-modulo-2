import starIcon from '../../assets/images/golden-star.svg';
import styles from './styles.module.scss';

function Card({ movie }) {

  const backgroundCard = {
    background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .8)), url(${movie.poster}) center/cover`
  };

  return (
    <div className={styles.film__card} style={backgroundCard}>
      <div className={styles.film__info__wrapper}>
        <div className={styles.film__info}>
          <span>{movie.title}</span>
          <span className={styles.film__vote}>
            <img src={starIcon} alt="" />
            {movie.vote}
          </span>
        </div>
        <button>
          <span>Sacola</span>
          <span>R$ {movie.price}</span>
        </button>
      </div>
    </div>
  );
}

export default Card;