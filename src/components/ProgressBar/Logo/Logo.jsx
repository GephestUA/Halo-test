import React from 'react';
import MaskGroup from '../../../assets/image/svg/MaskGroup.svg';
import styles from './Logo.module.scss';
import ButtonBack from '../../common/ButtonBack/ButtonBack';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function Logo() {
  const stage = useSelector((state) => state.appControls.stage);
  const location = useLocation();

  return (
    <div className={styles.logoBlock}>
      {stage > 1 && location.pathname !== '/stage1' && <ButtonBack />}
      <div>
        <a href="/stage1">
          <img src={MaskGroup} width="36px" height="32px" alt="logo" />
        </a>
      </div>
    </div>
  );
}
