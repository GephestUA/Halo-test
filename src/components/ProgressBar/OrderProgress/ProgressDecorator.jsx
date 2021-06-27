import React from 'react';
import styles from './ProgressDecorator.module.scss';

export default function ProgressDecorator(props) {
  let nameDecorator = props.decoratorName;

  const decoratorClass = (name) => {
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

  return (
    <div className={styles.progressDecorator}>
      <div className={styles.progressItem}>
        <span className={decoratorClass(nameDecorator)}></span>
        <p>Name and phone</p>
      </div>
    </div>
  );
}
