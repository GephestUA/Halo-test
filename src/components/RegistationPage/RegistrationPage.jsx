import React from 'react';
import styles from './RegistrationPage.module.scss';
import UserInfo from '../UserInfo/UserInfo';

export default function RegistrationPage() {
  return (
    <div className={styles.wrapRegistrationPage}>
      <UserInfo />
    </div>
  );
}
