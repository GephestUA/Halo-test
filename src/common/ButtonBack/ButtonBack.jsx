import { useHistory } from 'react-router-dom';
import styles from './ButtonBack.module.scss';

function ButtonBack(props) {
  const history = useHistory();

  return (
    <div className={styles.buttonBlock}>
      <button type="button" onClick={() => history.goBack()} className={styles.button}></button>
    </div>
  );
}

export default ButtonBack;
