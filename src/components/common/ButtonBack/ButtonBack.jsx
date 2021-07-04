import styles from './ButtonBack.module.scss';

function ButtonBack(props) {
  return (
    <div className={styles.buttonBlock}>
      <button type="button" onClick={() => history.goBack()} className={styles.button}></button>
    </div>
  );
}

export default ButtonBack;
