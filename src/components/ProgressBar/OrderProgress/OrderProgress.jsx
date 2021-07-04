import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderProgress.module.scss';
import ProgressDecorator from './ProgressDecorator';
import MobileProgressDecorator from './MobileProgressDecorator';

export default function OrderProgress() {
  const stage = useSelector((state) => state.appControls.stage);

  const decoratorsNames = (...amountStages) => {
    return amountStages;
  };

  return (
    <div>
      <div className={styles.progress}>
        {decoratorsNames('Name and phone', 'Service', 'Service provider').map((name, index) => (
          <ProgressDecorator
            key={name}
            text={name}
            decoratorName={index + 1}
            progressAfterLine
            disabled={stage <= index || false}
            success={stage > index + 1 || false}
            navigate={`/stage${index + 1}`}
          />
        ))}
      </div>
      <div className={styles.mobileProgress}>
        <MobileProgressDecorator success={stage >= 2 ? true : false} navigate={'/'}>
          Enter name
        </MobileProgressDecorator>
        <MobileProgressDecorator
          disabled={stage <= 1 ? true : false}
          success={stage >= 3 ? true : false}
          navigate={'/stage2'}
        >
          Select the service
        </MobileProgressDecorator>
        <MobileProgressDecorator
          disabled={stage <= 2 ? true : false}
          success={stage >= 4 ? true : false}
          navigate={'/stage3'}
        >
          Select clinics
        </MobileProgressDecorator>
      </div>
    </div>
  );
}
