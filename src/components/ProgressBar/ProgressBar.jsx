import React from 'react';
import Logo from './Logo/Logo';
import OrderProgress from './OrderProgress/OrderProgress';
import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  return (
    <nav className={styles.progressBarWrapper}>
      <Logo />
      <OrderProgress />
    </nav>
  );
}
