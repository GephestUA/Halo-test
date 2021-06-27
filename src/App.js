import styles from './App.module.scss';
import ProgressBar from './components/ProgressBar/ProgressBar';
import RegistrationPage from './components/RegistationPage/RegistrationPage.jsx';

function App() {
  return (
    <div className={styles.appWrapper}>
      <ProgressBar />
      <RegistrationPage />
    </div>
  );
}

export default App;
