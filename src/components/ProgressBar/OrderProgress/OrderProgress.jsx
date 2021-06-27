import React from 'react';
import styles from './OrderProgress.module.scss';

export default function OrderProgress() {
  return (
    <div>
      <div className={styles.progress}>
        <div className={styles.progressDecorator}>
          <div className={styles.progressItem}>
            <span className={styles.progressOne}></span>
            <p>Name and phone</p>
          </div>
        </div>
        <div className={styles.progressDecorator}>
          <div className={styles.progressItem}>
            <span className={styles.progressTwo}></span>
            <p>Name and phone</p>
          </div>
        </div>
        <div>
          <div className={styles.progressItem}>
            <span className={styles.progressThree}></span>
            <p>Name and phone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
