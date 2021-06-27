import React from 'react';
import { useDispatch } from 'react-redux';
import useInput from '../../customHooks/customInput';
import { getStageInfo } from '../../store/app-controller-reducer';
import { getUserData } from '../../store/user-info-reducer';

import ButtonService from './ButtonService/ButtonSendForm';
import s from './UserInfo.module.scss';

export default function UserInfo() {
  const name = useInput('', { checkName: true });
  const surname = useInput('', { checkName: true });
  const phone = useInput('', { checkPhone: true });

  let activeButton = name.checkName.status || surname.checkName.status || phone.checkPhone.status;

  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Enter name and phone number</h1>
      <form
        noValidate={true}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getUserData(name.value, surname.value, phone.value));
          dispatch(getStageInfo(2));
        }}
      >
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
        <div>
          <ButtonService btnName="Choose service" btnStatus={activeButton} />
        </div>
      </form>
    </div>
  );
}
