import React from 'react';
import mobileStyles from './MobileProgressDecorator.module.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OrderProgress({ disabled, text, success, navigate }) {
  let disabledLine = disabled && mobileStyles.disabledLine;
  const selectedService = useSelector((state) => state.services.serviceSelected);
  const stage = useSelector((state) => state.appControls.stage);
  const changeText = stage > 2 && text === 'Service';

  return (
    <NavLink
      to={`${navigate}`}
      className={`${mobileStyles.mobileProgressDecorator} ${disabledLine}`}
      disabled={disabled}
      data-success={success}
    >
      <p>{changeText ? selectedService : text}</p>
    </NavLink>
  );
}
