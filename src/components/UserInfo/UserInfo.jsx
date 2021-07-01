import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useInput from '../../customHooks/customInput';
import { getStageInfo } from '../../store/app-controller-reducer';
import { getUserData } from '../../store/user-info-reducer';
import ButtonService from './ButtonService/ButtonSendForm';
import s from './UserInfo.module.scss';
import MainTitle from '../../common/MainTitle/MainTitle';

export default function UserInfo() {
  const name = useInput('', { checkName: true });
  const surname = useInput('', { checkName: true });
  const phone = useInput('', { checkPhone: true });

  const stage2History = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userInfo);

  const handleSubmitStage1 = (e) => {
    e.preventDefault();
    dispatch(getUserData(name.value, surname.value, phone.value));
    dispatch(getStageInfo(2));
    stage2History.push('/stage2');
  };

  let activeButton = name.checkName.status || surname.checkName.status || phone.checkPhone.status;

  useEffect(() => {
    name.setValue(state.name);
    surname.setValue(state.surname);
    phone.setValue(state.phone);
  }, [state.name, state.surname, state.phone]);

  return (
    <form
      noValidate={true}
      onSubmit={(e) => {
        handleSubmitStage1(e);
      }}
    >
      <MainTitle>Enter name and phone number</MainTitle>
      <div className={s.userDetails}>
        <div className={`${s.inputBox}  ${name.noValid && name.checkName.status && s.errorInput}`}>
          <span className={s.details}>Full name</span>
          {name.noValid && name.checkName.status && <p className={s.errors}>{name.checkName.text}</p>}
          <input {...name.bind} name="name" type="text" placeholder="Jason" />
        </div>
        <div className={`${s.inputBox}  ${surname.noValid && surname.checkName.status && s.errorInput}`}>
          <span className={s.details}></span>
          {surname.noValid && surname.checkName.status && <p className={s.errors}>{surname.checkName.text}</p>}
          <input {...surname.bind} name="surname" type="text" placeholder="Statham" />
        </div>
        <div className={`${s.inputBox}  ${phone.noValid && phone.checkPhone.status && s.errorInput}`}>
          <span className={s.details}>Phone number</span>
          {phone.noValid && phone.checkPhone.status && <p className={s.errors}>{phone.checkPhone.text}</p>}
          <input {...phone.bind} name="phone" type="text" placeholder="(555) 555-5555" />
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <ButtonService btnName="Choose service" btnStatus={activeButton} />
      </div>
    </form>
  );
}
