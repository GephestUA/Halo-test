import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderProgress.module.scss';
import ProgressDecorator from './ProgressDecorator';

export default function OrderProgress() {
  const stage = useSelector((state) => state.appControls.stage);

  return (
    <div>
      <div className={styles.progress}>
        <ProgressDecorator decoratorName={1} progressAfterLine="true" success={stage >= 2 ? true : false} />
        <ProgressDecorator
          decoratorName={2}
          progressAfterLine="true"
          disabled={stage <= 1 ? true : false}
          success={stage >= 3 ? true : false}
        />
        <ProgressDecorator decoratorName={3} disabled={stage <= 2 ? true : false} success={stage >= 4 ? true : false} />
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
