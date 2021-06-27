import React from 'react';
import Logo from './Logo/Logo';
import OrderProgress from './OrderProgress/OrderProgress';
import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  return (
    <div className={styles.progressBarWrapper}>
      <Logo />
      <OrderProgress />
    </div>
  );
}
