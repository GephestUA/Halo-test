import React from 'react';
import ProviderCard from './ProviderCard/ProviderCard';
import MainTitle from '../../common/MainTitle/MainTitle';
import { Redirect } from 'react-router';
import styles from './ServiceProvider.module.scss';
import { useSelector } from 'react-redux';
import ButtonService from '../UserInfo/ButtonService/ButtonSendForm';

export default function ServiceProvider() {
  const stage = useSelector((state) => state.appControls.stage);

  if (stage < 3) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle>Select your service provider</MainTitle>
      <div className={styles.providerWrapper}>
        <h3 className={styles.headerTitleCardBlock}>All clinics</h3>
        <ProviderCard />
        <ProviderCard />
        <ProviderCard />
      </div>
      <div className={styles.nextButton}>
        <ButtonService btnName="Submit" />
      </div>
    </div>
  );
}
