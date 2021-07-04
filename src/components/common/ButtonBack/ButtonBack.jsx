import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { getStageInfo } from '../../../store/app-controller/action-creators';
import styles from './ButtonBack.module.scss';

function ButtonBack() {
  const history = useHistory();
  const location = useLocation();

  const stage = useSelector((state) => state.appControls.stage);
  const dispatch = useDispatch();

  const currentURL = location.pathname;

  const handelBackClick = () => {
    history.push(`/stage${currentURL[currentURL.length - 1] - 1}`);
    dispatch(getStageInfo(stage - 1));
  };

  return (
    <div className={styles.buttonBlock}>
      <button type="button" onClick={handelBackClick} className={styles.button}></button>
    </div>
  );
}

export default ButtonBack;
