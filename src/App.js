import styles from './App.module.scss';
import ProgressBar from './components/ProgressBar/ProgressBar';
import React from 'react';
import UserInfo from './components/UserInfo/UserInfo';
import ServiceInfo from './components/ServiceInfo/ServiceInfo.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServiceProvider from './components/ServiceProvider/ServiceProvider';

function App() {
  return (
    <Router>
      <div className={styles.appWrapper}>
        <ProgressBar />
        <section className={styles.container}>
          <Switch>
            <Route path="/stage1" render={() => <UserInfo />} />
            <Route path="/stage2" render={() => <ServiceInfo />} />
            <Route path="/stage3" render={() => <ServiceProvider />} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
