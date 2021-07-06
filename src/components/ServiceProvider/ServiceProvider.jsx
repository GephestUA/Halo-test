import React from 'react';
import ProviderCard from './ProviderCard/ProviderCard';
import MainTitle from '../common/MainTitle/MainTitle';
import { Redirect } from 'react-router';
import styles from './ServiceProvider.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ButtonService from '../common/ButtonService/ButtonSendForm';
import stylesInput from '../UserInfo/UserInfo.module.scss';
import useInput from '../../customHooks/customInput';
import { selectProvider } from '../../store/service-reducer/action-creators';
import { getStageInfo } from '../../store/app-controller/action-creators';

export default function ServiceProvider() {
  const stage = useSelector((state) => state.appControls.stage);
  const services = useSelector((state) => state.services);
  const { name: userName, surname, phone } = useSelector((state) => state.userInfo);
  const search = useInput('', '');

  const serviceSelected = services.serviceSelected;
  const providerSelected = services.providerSelected;

  const filterProviders = services.service
    .filter((item) => item.name === serviceSelected)
    .map((item) => item.providers)
    .flat()
    .filter((item) => item.city.toLocaleLowerCase().startsWith(search.value.toLocaleLowerCase()));

  const dispatch = useDispatch();

  const handleSelect = (name) => {
    dispatch(selectProvider(name));
  };

  const showRegisterInformation = () => {
    console.group('Order Details');
    console.log(userName, surname, phone);
    console.log(serviceSelected);
    console.log(providerSelected);
    console.groupEnd();
  };

  const handleSubmitStage3 = (e) => {
    e.preventDefault();
    dispatch(getStageInfo(4));
    showRegisterInformation();
  };

  if (stage < 3) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle text="Select your service provider" />
      <div className={styles.providerWrapper}>
        <div className={`${stylesInput.inputBox} ${search.value && stylesInput.validInput}`}>
          <span className={stylesInput.details}>Full name</span>
          <input {...search.bind} value={search.value} name="search" type="text" placeholder="London" />
        </div>
        <h3 className={styles.headerTitleCardBlock}>All clinics</h3>
        <div className={styles.providerWrapperCard}>
          {filterProviders.map((item) => (
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
