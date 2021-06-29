import React from 'react';
import styles from './RegistrationPage.module.scss';
import UserInfo from '../UserInfo/UserInfo';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function RegistrationPage() {
  return (
    <div className={styles.wrapRegistrationPage}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <UserInfo />} />
          <Route path="/stage2" render={() => <ServiceInfo />} />
        </Switch>
      </Router>
    </div>
  );
}
