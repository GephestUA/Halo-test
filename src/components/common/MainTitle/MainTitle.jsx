import styles from './MainTitle.module.scss';

function MainTitle(props) {
  return (
    <div className={styles.titleBlock}>
      <h1 className={styles.title}>{props.text}</h1>
    </div>
  );
}

export default MainTitle;
