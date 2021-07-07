import React from 'react';
import MaskGroup from '../../../assets/image/svg/MaskGroup.svg';
import styles from './Logo.module.scss';
import ButtonBack from '../../common/ButtonBack/ButtonBack';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { resetStage } from '../../../store/app-controller/action-creators';

export default function Logo() {
  const stage = useSelector((state) => state.appControls.stage);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className={styles.logoBlock}>
      {stage > 1 && location.pathname !== '/stage1' && <ButtonBack />}
      <div>
        <Link to="/stage1">
          <img src={MaskGroup} width="36px" height="32px" alt="logo" onClick={() => dispatch(resetStage())} />
        </Link>
      </div>
    </div>
  );
}
