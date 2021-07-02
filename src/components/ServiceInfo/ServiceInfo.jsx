import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './ServiceInfo.module.scss';
import ButtonService from '../UserInfo/ButtonService/ButtonSendForm';
import ServiceCard from './ServiceCard/ServiceCard';
import MainTitle from '../../common/MainTitle/MainTitle';
import { getDataService, selectService } from '../../store/service-reducer';

export default function ServiceInfo() {
  const stage = useSelector((state) => state.appControls.stage);
  const services = useSelector((state) => state.services.service);
  const selection = useSelector((state) => state.services.serviceSelected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataService());
  }, []);

  const handleSelect = (name) => {
    dispatch(selectService(name));
  };

  if (stage < 2) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle> Select the service</MainTitle>
      <div className={styles.serviceWrapper}>
        {services.map((item) => (
          <ServiceCard
            key={`${item.name}`}
            name={item.name}
            type={item.type}
            description={item.description}
            selection={selection}
            stage={stage}
            handleClick={handleSelect}
          />
        ))}
      </div>
      <div className={styles.nextButton}>
        <ButtonService btnName="Continue schedule" />
      </div>
    </div>
  );
}
