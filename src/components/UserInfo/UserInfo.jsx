import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useInput from '../../customHooks/customInput';
import { getStageInfo } from '../../store/app-controller/action-creators';
import { setUserData } from '../../store/user-info/action-creators';
import ButtonService from '../common/ButtonService/ButtonSendForm';
import styles from './UserInfo.module.scss';
import MainTitle from '../common/MainTitle/MainTitle';
import { selectService } from '../../store/service-reducer/action-creators';

export default function UserInfo() {
  const name = useInput('', { checkName: true });
  const surname = useInput('', { checkName: true });
  const phone = useInput('', { checkPhone: true });

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userInfo);
  const serviceSelected = useSelector((state) => state.services.serviceSelected);

  const handleSubmitStage1 = (e) => {
    e.preventDefault();
    dispatch(setUserData(name.value, surname.value, phone.value));
    serviceSelected && dispatch(selectService(''));
    dispatch(getStageInfo(2));
    history.push('/stage2');
  };

  const activeButton = name.checkName.status || surname.checkName.status || phone.checkPhone.status;

  useEffect(() => {
    name.setValue(state.name);
    surname.setValue(state.surname);
    phone.setValue(state.phone);
  }, [state.name, state.surname, state.phone]);

  const showErrorMessage = (inputName, errorName) => {
    return inputName.noValid && <p className={styles.errors}>{inputName[errorName].text}</p>;
  };

  const getInputStyles = (inputName, check) => {
    return `${styles.inputBox}  ${
      inputName.noValid && inputName[check].status ? styles.errorInput : inputName.value && styles.validInput
    }`;
  };

  return (
    <form noValidate={true} onSubmit={handleSubmitStage1}>
      <MainTitle text="Enter name and phone number" />
      <div className={styles.userDetails}>
        <div className={getInputStyles(name, 'checkName')}>
          <span className={styles.details}>Full name</span>
          {showErrorMessage(name, 'checkName')}
          <input {...name.bind} name="name" type="text" placeholder="Jason" />
        </div>
        <div className={getInputStyles(surname, 'checkName')}>
          <span className={styles.details}></span>
          {showErrorMessage(surname, 'checkName')}
          <input {...surname.bind} name="surname" type="text" placeholder="Statham" />
        </div>
        <div className={getInputStyles(phone, 'checkPhone')}>
          <span className={styles.details}>Phone number</span>
          {showErrorMessage(phone, 'checkPhone')}
          <input {...phone.bind} name="phone" type="text" placeholder="(555) 555-5555" />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <ButtonService btnName="Choose service" btnStatus={activeButton} />
      </div>
    </form>
  );
}
