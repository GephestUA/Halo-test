import React from 'react';
import MaskGroup from '../../../assets/image/svg/MaskGroup.svg';
import styles from './Logo.module.scss';
import ButtonBack from '../../common/ButtonBack/ButtonBack';
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import { resetStage } from '../../../store/app-controller/action-creators';

export default function Logo() {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className={styles.logoBlock}>
      {location.pathname !== '/stage1' && <ButtonBack />}
      <div>
        <Link to="/stage1">
          <img src={MaskGroup} width="36px" height="32px" alt="logo" onClick={() => dispatch(resetStage())} />
        </Link>
      </div>
    </div>
  );
}
