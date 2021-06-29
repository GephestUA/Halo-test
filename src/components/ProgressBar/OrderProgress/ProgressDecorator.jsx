import React from 'react';
import styles from './ProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';

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
  let disabledLine = props.disabled ? styles.disabledLine : '';
  let successStage = props.success ? styles.successStage : '';

  return (
    <NavLink
      to={`${props.navigate}`}
      className={`${line} ${styles.progressDecorator} ${disabledLine}`}
      disabled={props.disabled}
      data-success={props.success}
    >
      <div className={styles.progressItem}>
        <span className={`${decoratorCurrentPage(nameDecorator)} ${successStage}`}></span>
        <p className={styles.texInDecorator}>Name and phone</p>
      </div>
    </NavLink>
  );
};

export default ProgressDecorator;
