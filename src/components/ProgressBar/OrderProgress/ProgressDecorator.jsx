import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ProgressDecorator.module.scss';

export default function ProgressDecorator(props) {
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

  return (
    <div className={styles.progressDecorator} disabled={props.disabled}>
      <div className={styles.progressItem}>
        <span className={decoratorCurrentPage(nameDecorator)}></span>
        <p>Name and phone</p>
      </div>
    </div>
  );
}
