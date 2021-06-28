import React from 'react';
import styles from './ProgressDecorator.module.scss';

const ProgressDecorator = (props) => {
  let nameDecorator = props.decoratorName;

  const decoratorCurrentPage = (name) => {
    switch (name) {
      case 1: {
        return styles.progressOne;
      }
      case 2: {
        return styles.progressTwo;
      }
      case 3: {
        return styles.progressThree;
      }
      default:
        return '';
    }
  };

  let line = props.progressAfterLine ? styles.progressAfterLine : '';

  return (
    <div className={`${line} ${styles.progressDecorator}`} disabled={props.disabled} data-success={props.success}>
      <div className={styles.progressItem}>
        <span className={decoratorCurrentPage(nameDecorator)}></span>
        <p>Name and phone</p>
      </div>
    </div>
  );
};

export default ProgressDecorator;
