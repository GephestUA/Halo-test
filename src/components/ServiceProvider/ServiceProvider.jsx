import React from 'react';
import ProviderCard from './ProviderCard/ProviderCard';
import MainTitle from '../../common/MainTitle/MainTitle';
import { Redirect } from 'react-router';
import styles from './ServiceProvider.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ButtonService from '../UserInfo/ButtonService/ButtonSendForm';
import s from '../UserInfo/UserInfo.module.scss';
import useInput from '../../customHooks/customInput';
import { selectProvider } from '../../store/service-reducer';
import { getStageInfo } from '../../store/app-controller-reducer';

export default function ServiceProvider() {
  const stage = useSelector((state) => state.appControls.stage);
  const services = useSelector((state) => state.services);
  const name = useInput('', { checkName: true });

  const serviceSelected = services.serviceSelected;
  const providerSelected = services.providerSelected;

  const filterProviders = services.service
    .filter((item) => item.name === serviceSelected)
    .map((item) => item.providers)
    .flat();

  const dispatch = useDispatch();

  const handleSelect = (name) => {
    dispatch(selectProvider(name));
  };

  const handleSubmitStage3 = (e) => {
    e.preventDefault();
    dispatch(getStageInfo(4));
  };

  if (stage < 3) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle>Select your service provider</MainTitle>
      <div className={styles.providerWrapper}>
        <div className={`${s.inputBox}  ${name.noValid && name.checkName.status && s.errorInput}`}>
          <span className={s.details}>Full name</span>
          {name.noValid && name.checkName.status && <p className={s.errors}>{name.checkName.text}</p>}
          <input {...name.bind} name="name" type="text" placeholder="Jason" />
        </div>
        <h3 className={styles.headerTitleCardBlock}>All clinics</h3>
        <div className={styles.providerWrapperCard}>
          {[...filterProviders].map((item) => (
            <ProviderCard
              key={`${item.city}_${item.name}`}
              name={item.name}
              city={item.city}
              location={item.location}
              handleClick={handleSelect}
              selection={providerSelected}
            />
          ))}
        </div>
      </div>
      <div className={styles.nextButton}>
        <ButtonService btnName="Submit" btnStatus={!providerSelected} handleClickButton={handleSubmitStage3} />
      </div>
    </div>
  );
}
