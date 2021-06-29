import React from 'react';
import styles from './MobileProgressDecorator.module.scss';

export default function OrderProgress({ disabled, children, success }) {
  return (
    <div className={styles.mobileProgressDecorator} disabled={disabled} data-success={success}>
      <p>{children}</p>
    </div>
  );
}
