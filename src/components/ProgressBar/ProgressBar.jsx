import React from 'react';
import Logo from './Logo/Logo';
import OrderProgress from './OrderProgress/OrderProgress';
import styles from './ProgressBar.module.scss';
import ButtonBack from '../../common/ButtonBack/ButtonBack';

export default function ProgressBar() {
  return (
    <div className={styles.progressBarWrapper}>
      <Logo />
      <ButtonBack />
      <OrderProgress />
    </div>
  );
}
