import React from 'react';
import MaskGroup from '../../../assets/image/MaskGroup.svg';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logoBlock}>
      <div>
        <a href="/">
          <img src={MaskGroup} width="36px" height="32px"></img>
        </a>
      </div>
    </div>
  );
}
