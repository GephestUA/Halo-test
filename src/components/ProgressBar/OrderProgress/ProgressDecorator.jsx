import React from 'react';
import styles from './ProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProgressDecorator = ({ decoratorName, progressAfterLine, disabled, success, text, navigate }) => {
  const selectedService = useSelector((state) => state.services.serviceSelected);
  const stage = useSelector((state) => state.appControls.stage);
  const changeText = stage > 2 && text === 'Service';

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

  let line = progressAfterLine && styles.progressAfterLine;
  let disabledLine = disabled && styles.disabledLine;
  let successStage = success && styles.successStage;

  return (
    <NavLink
      to={`${navigate}`}
      className={`${line} ${styles.progressDecorator} ${disabledLine}`}
      disabled={disabled}
      data-success={success}
    >
      <div className={styles.progressItem}>
        <span className={`${decoratorCurrentPage(decoratorName)} ${successStage}`}></span>
        {decoratorName === 'small' || (
          <p className={styles.texInDecorator}>
            <span className={changeText ? styles.texInDecoratorSmall : undefined}>{changeText && text}</span>
            {changeText && <br />}
            {changeText ? selectedService : text}
          </p>
        )}
      </div>
    </NavLink>
  );
};

export default ProgressDecorator;
