import bagIcon from '../../assets/images/bag.svg';
import personIcon from '../../assets/images/person-illustration.svg';
import styles from './styles.module.scss';

function ShoppingCart({ list }) {
  return (
    <div className={styles.bag__wrapper}>
      <header>
        <img src={bagIcon} alt="" />
        <span>Sacola</span>
      </header>
      <main>
        {!list ? (
          <div className={styles.empty__bag}>
            <h2>Sua sacola está vazia</h2>
            <h4>Adicione filmes agora</h4>
            <img src={personIcon} alt="" />
          </div>
        ) : (
          <div className={styles.content__bag}>
            <button>
              <span>Confirme seus dados</span>
              <span>R$ {}</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default ShoppingCart;