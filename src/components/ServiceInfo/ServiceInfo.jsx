import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import styles from './ServiceInfo.module.scss';
import ButtonService from '../common/ButtonService/ButtonSendForm';
import ServiceCard from './ServiceCard/ServiceCard';
import MainTitle from '../common/MainTitle/MainTitle';
import { selectService } from '../../store/service-reducer/action-creators';
import { getDataService } from '../../store/service-reducer/thunk-creators';
import { useHistory } from 'react-router-dom';
import { getStageInfo } from '../../store/app-controller/action-creators';

export default function ServiceInfo() {
  const stage = useSelector((state) => state.appControls.stage);
  const services = useSelector((state) => state.services.service);
  const selection = useSelector((state) => state.services.serviceSelected);

  const dispatch = useDispatch();
  const history = useHistory();

  let activeButton = !selection;

  useEffect(() => {
    dispatch(getDataService());
  }, []);

  const handleSelect = (name) => {
    dispatch(selectService(name));
  };

  const handleSubmitStage2 = (e) => {
    e.preventDefault();
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
        <ButtonService btnName="Continue schedule" btnStatus={activeButton} handleClickButton={handleSubmitStage2} />
      </div>
    </div>
  );
}
