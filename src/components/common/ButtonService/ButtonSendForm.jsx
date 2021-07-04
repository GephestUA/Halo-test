import React from 'react';
import s from './ButtonSendForm.module.scss';

export default function ButtonService(props) {
  return (
    <div className={s.button}>
      <input type="submit" value={props.btnName} disabled={props.btnStatus} onClick={props.handleClickButton}></input>
    </div>
  );
}
