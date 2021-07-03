import React from 'react';
import MaskGroup from '../../../assets/image/MaskGroup.svg';
import styles from './Logo.module.scss';
import ButtonBack from '../../../common/ButtonBack/ButtonBack';
import { useSelector } from 'react-redux';

export default function Logo() {
  const stage = useSelector((state) => state.appControls.stage);

  return (
    <div className={styles.logoBlock}>
      {stage >= 2 ? <ButtonBack /> : null}
      <div>
        <a href="/">
          <img src={MaskGroup} width="36px" height="32px"></img>
        </a>
      </div>
    </div>
  );
}
