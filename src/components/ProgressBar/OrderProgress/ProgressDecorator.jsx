import React from 'react';
import styles from './ProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProgressDecorator = (props) => {
  let nameDecorator = props.decoratorName;
  const selectedService = useSelector((state) => state.services.serviceSelected);
  const stage = useSelector((state) => state.appControls.stage);
  const changeText = stage > 2 && props.text === 'Service';

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
      case 'small': {
        return styles.progressSmall;
      }
      default:
        return '';
    }
  };

  let line = props.progressAfterLine && styles.progressAfterLine;
  let disabledLine = props.disabled && styles.disabledLine;
  let successStage = props.success && styles.successStage;

  return (
    <NavLink
      to={`${props.navigate}`}
      className={`${line} ${styles.progressDecorator} ${disabledLine}`}
      disabled={props.disabled}
      data-success={props.success}
    >
      <div className={styles.progressItem}>
        <span className={`${decoratorCurrentPage(nameDecorator)} ${successStage}`}></span>
        {nameDecorator === 'small' || (
          <p className={styles.texInDecorator}>
            <span className={changeText && styles.texInDecoratorSmall}>{changeText && props.text}</span>
            {changeText && <br />}
            {changeText ? selectedService : props.text}
          </p>
        )}
      </div>
    </NavLink>
  );
};

export default ProgressDecorator;
