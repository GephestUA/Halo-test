import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './ServiceInfo.module.scss';
import ButtonService from '../common/ButtonService/ButtonSendForm';
import ServiceCard from './ServiceCard/ServiceCard';
import MainTitle from '../common/MainTitle/MainTitle';
import { selectProvider, selectService } from '../../store/service-reducer/action-creators';
import { getDataService } from '../../store/service-reducer/thunk-creators';
import { useHistory } from 'react-router-dom';
import { getStageInfo } from '../../store/app-controller/action-creators';
import { Loader } from '../common/Loader/Loader';

export default function ServiceInfo() {
  const stage = useSelector((state) => state.appControls.stage);
  const services = useSelector((state) => state.services.service);
  const selection = useSelector((state) => state.services.serviceSelected);
  const providerSelected = useSelector((state) => state.services.providerSelected);

  const dispatch = useDispatch();
  const history = useHistory();

  const activeButton = !selection;

  useEffect(() => {
    dispatch(getDataService());
  }, [dispatch]);

  const handleSelect = (name) => {
    dispatch(selectService(name));
  };

  const handleSubmitStage2 = (e) => {
    e.preventDefault();
    providerSelected && dispatch(selectProvider(''));
    dispatch(getStageInfo(3));
    history.push('/stage3');
  };

  if (stage < 2) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <MainTitle text="Select the service" />
      <div className={styles.serviceWrapper}>
        {services.length > 0 ? (
          services.map((item) => (
            <ServiceCard
              key={`${item.name}`}
              name={item.name}
              type={item.type}
              description={item.description}
              selection={selection}
              stage={stage}
              handleClick={handleSelect}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className={styles.nextButton}>
        <ButtonService btnName="Continue schedule" btnStatus={activeButton} handleClickButton={handleSubmitStage2} />
      </div>
    </div>
  );
}
