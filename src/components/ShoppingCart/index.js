import bagIcon from '../../assets/images/bag.svg';
import minusIcon from '../../assets/images/minus-icon.svg';
import personIcon from '../../assets/images/person-illustration.svg';
import plusIcon from '../../assets/images/plus-icon.svg';
import trashIcon from '../../assets/images/trash-icon.svg';
import styles from './styles.module.scss';

function ShoppingCart({ addToCart, handleMovieAmount }) {
  let totalPrice = 0

  for(let i = 0; i < addToCart.length; i++) {
    let price = addToCart[i].price;
    let qtd = addToCart[i].qtd;

    let formattedPrice = parseFloat(price.replace(',' , '.'));

    totalPrice += (formattedPrice * qtd);
  }

  return (
    <div className={styles.bag__wrapper}>
      <header>
        <img src={bagIcon} alt="" />
        <span>Sacola</span>
      </header>
      <main>
        {addToCart.length === 0 ? (
          <div className={styles.empty__bag}>
            <h2>Sua sacola está vazia</h2>
            <h4>Adicione filmes agora</h4>
            <img src={personIcon} alt="" />
          </div>
        ) : (
          addToCart.map(movie => (
            <div className={styles.content__bag} key={movie.id}>
              <div className={styles.info__wrapper}>
                <img src={movie.poster} alt="" width="43px" height="67px" />
                <div className={styles.movie__info}>
                  <span>{movie.title}</span>
                  <span>R$ {movie.price}</span>
                </div>
              </div>
              <div className={styles.shopping__wrapper}>
                <button onClick={() => handleMovieAmount(1, movie.id)} className={styles.shopping__buttons}>
                  <img src={plusIcon} alt="" />
                </button>
                <span>{movie.qtd}</span>
                <button onClick={() => handleMovieAmount(-1, movie.id)} className={styles.shopping__buttons}>
                  <img src={movie.qtd === 1 ? trashIcon : minusIcon} alt="" />
                </button>
              </div>
            </div>
          ))
        )}
        {addToCart.length > 0 && (
          <div className={styles.buy__button}>
            <span>Confirme seus dados</span>
            <span>R$ {totalPrice.toFixed(2).replace('.' , ',')}</span>
          </div>
        )} 
      </main>
    </div>
  );
}

export default ShoppingCart;