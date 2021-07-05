import React from 'react';
import styles from './SuccessOrderDecorator.module.scss';

const SuccessOrderDecorator = ({ decoratorName }) => {
  const smallStyle = decoratorName === 'small' && styles.progressSmall;

  return <span className={`${styles.successStage} ${smallStyle}`}></span>;
};

export default SuccessOrderDecorator;
