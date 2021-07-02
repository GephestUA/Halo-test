import React from 'react';
import s from './ButtonSendForm.module.scss';

export default function ButtonService(props) {
  return (
    <div className={s.button} onClick={props.handleClickButton}>
      <input type="submit" value={props.btnName} disabled={props.btnStatus}></input>
    </div>
  );
}
