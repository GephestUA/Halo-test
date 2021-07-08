import React from 'react';
import { useSelector } from 'react-redux';
import styles from './OrderProgress.module.scss';
import ProgressDecorator from './ProgressDecorator';

export default function OrderProgress() {
  const stage = useSelector((state) => state.appControls.stage);

  const decoratorsNames = ['Name and phone', 'Service', 'Service provider'];

  return (
    <div className={styles.progress}>
      {decoratorsNames.map((name, index) => (
        <ProgressDecorator
          key={name}
          text={name}
          decoratorName={index + 1}
          progressAfterLine
          disabled={stage <= index || false}
          success={stage > index + 1 || false}
          navigate={`/stage${index + 1}`}
          showMobileProgress
        />
      ))}
    </div>
  );
}
