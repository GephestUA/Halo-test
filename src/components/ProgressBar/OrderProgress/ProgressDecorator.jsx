import React from 'react';
import styles from './ProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SuccessOrderDecorator from '../../common/SuccessOrderDecorator/SuccessOrderDecorator';

const ProgressDecorator = ({
  decoratorName,
  progressAfterLine,
  disabled,
  success,
  text,
  navigate,
  showMobileProgress,
}) => {
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
      default:
        return '';
    }
  };

  let line = progressAfterLine && styles.progressAfterLine;
  let disabledLine = disabled && styles.disabledLine;

  return (
    <>
      <NavLink
        to={`${navigate}`}
        className={`${line} ${styles.progressDecorator} ${disabledLine}`}
        disabled={disabled}
        data-success={success}
        data-mobile={showMobileProgress}
      >
        <p
          className={`${styles.texInDecorator} ${changeText && styles.texInDecoratorSmall}`}
          data-mobile={showMobileProgress}
        >
          <span>{changeText && text}</span>
          {changeText && <br />}
          {changeText ? selectedService : text}
        </p>
        <div className={styles.progressItem} data-mobile={showMobileProgress}>
          {success ? <SuccessOrderDecorator /> : <span className={decoratorCurrentPage(decoratorName)} />}
        </div>
      </NavLink>
    </>
  );
};

export default ProgressDecorator;
