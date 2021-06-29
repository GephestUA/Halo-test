import styles from './App.module.scss';
import ProgressBar from './components/ProgressBar/ProgressBar';
import React from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import ServiceInfo from './components/ServiceInfo/ServiceInfo.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className={styles.appWrapper}>
        <ProgressBar />
        <Switch>
          <Route exact path="/" render={() => <UserInfo />} />
          <Route path="/stage2" render={() => <ServiceInfo />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
