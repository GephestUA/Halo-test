import React from 'react';
import styles from './MobileProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';

export default function OrderProgress({ disabled, children, success, navigate }) {
  let disabledLine = disabled ? styles.disabledLine : '';
  return (
    <NavLink
      to={`${navigate}`}
      className={`${styles.mobileProgressDecorator} ${disabledLine}`}
      disabled={disabled}
      data-success={success}
    >
      <p>{children}</p>
    </NavLink>
  );
}
