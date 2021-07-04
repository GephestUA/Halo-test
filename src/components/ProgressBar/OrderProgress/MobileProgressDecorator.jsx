import React from 'react';
import mobileStyles from './MobileProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';

export default function OrderProgress({ disabled, text, success, navigate }) {
  let disabledLine = disabled && mobileStyles.disabledLine;
  return (
    <NavLink
      to={`${navigate}`}
      className={`${mobileStyles.mobileProgressDecorator} ${disabledLine}`}
      disabled={disabled}
      data-success={success}
    >
      <p>{text}</p>
    </NavLink>
  );
}
