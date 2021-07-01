import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './ServiceInfo.module.scss';
import ButtonService from '../UserInfo/ButtonService/ButtonSendForm';
import ServiceBG from '../../assets/image/ServiceBG.png';
import MainTitle from '../../common/MainTitle/MainTitle';

export default function ServiceInfo() {
  const stage = useSelector((state) => state.appControls.stage);

  if (stage < 2) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle> Select the service</MainTitle>
      <div className={styles.serviceWrapper}>
        <div className={styles.serviceCart}>
          <article className={styles.service}>
            <div className={styles.serviceImageBG}>
              <img src={ServiceBG} className={styles.serviceImage}></img>
            </div>
            <div className={styles.serviceDescription}>
              <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>Covid-19 test (RT-PCR)</h3>
                <ins className={styles.servicePrice}>$ 250</ins>
              </div>
              <p className={styles.serviceTeknoligi}>Intelligent diagnostics</p>
              <p className={styles.serviceText}>
                Covid-19 Molecular Detection. Detection from the first day of infection.
              </p>
              <div className={styles.buttonBlock}>
                <button className={styles.serviceButton}>Choose exam</button>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.serviceCart}>
          <article className={styles.service}>
            <div className={styles.serviceImageBG}>
              <img src={ServiceBG} className={styles.serviceImage}></img>
            </div>
            <div className={styles.serviceDescription}>
              <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>Covid-19 test (RT-PCR)</h3>
                <ins className={styles.servicePrice}>$ 250</ins>
              </div>
              <p className={styles.serviceTeknoligi}>Intelligent diagnostics</p>
              <p className={styles.serviceText}>
                Covid-19 Molecular Detection. Detection from the first day of infection.
              </p>
              <div className={styles.buttonBlock}>
                <button className={styles.serviceButton}>Choose exam</button>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.serviceCart}>
          <article className={styles.service}>
            <div className={styles.serviceImageBG}>
              <img src={ServiceBG} className={styles.serviceImage}></img>
            </div>
            <div className={styles.serviceDescription}>
              <div className={styles.serviceHeader}>
                <h3 className={styles.serviceTitle}>Covid-19 test (RT-PCR)</h3>
                <ins className={styles.servicePrice}>$ 250</ins>
              </div>
              <p className={styles.serviceTeknoligi}>Intelligent diagnostics</p>
              <p className={styles.serviceText}>
                Covid-19 Molecular Detection. Detection from the first day of infection.
              </p>
              <div className={styles.buttonBlock}>
                <button className={styles.serviceButton}>Choose exam</button>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className={styles.nextButton}>
        <ButtonService btnName="Continue schedule" />
      </div>
    </div>
  );
}
