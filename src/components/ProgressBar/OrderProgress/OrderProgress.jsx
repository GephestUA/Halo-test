import React from 'react';
import styles from './OrderProgress.module.scss';
import ProgressDecorator from './ProgressDecorator';

export default function OrderProgress() {
  return (
    <div>
      <div className={styles.progress}>
        <ProgressDecorator decoratorName={1} />
        <ProgressDecorator decoratorName={2} />
        <ProgressDecorator decoratorName={3} />
      </div>
      <div className={styles.mobileProgress}>
        <div>
          <p>Enter name</p>
        </div>
        <div>
          <p>Select the service</p>
        </div>
        <div>
          <p>Select clinics</p>
        </div>
      </div>
    </div>
  );
}
