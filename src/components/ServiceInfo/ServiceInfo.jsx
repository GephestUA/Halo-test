import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './ServiceInfo.module.scss';

export default function ServiceInfo() {
  const stage = useSelector((state) => state.appControls.stage);

  if (stage < 2) {
    return <Redirect to="/" />;
  }

  return <div>123</div>;
}
