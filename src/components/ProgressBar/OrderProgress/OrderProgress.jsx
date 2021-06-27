import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderProgress.module.scss';
import ProgressDecorator from './ProgressDecorator';

export default function OrderProgress() {
  const stage = useSelector((state) => state.appControls.stage);

  return (
    <div>
      <div className={styles.progress}>
        <ProgressDecorator decoratorName={1} />
        <ProgressDecorator decoratorName={2} disabled={stage === 1 ? true : false} />
        <ProgressDecorator decoratorName={3} disabled={stage === 1 || 2 ? true : false} />
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
