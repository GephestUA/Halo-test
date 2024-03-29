import styles from './ServiceCard.module.scss';
import ServiceBG from '../../../assets/image/png/ServiceBG.png';
import SuccessOrderDecorator from '../../common/SuccessOrderDecorator/SuccessOrderDecorator';

export default function ServiceCard({ name, type, description, selection, handleClick }) {
  return (
    <div className={styles.serviceCart}>
      <article className={styles.service}>
        <div className={styles.serviceImageBG}>
          <img src={ServiceBG} className={styles.serviceImage} alt={name}></img>
        </div>
        <div className={styles.serviceDescription}>
          <div className={styles.serviceHeader}>
            <h3 className={styles.serviceTitle}>{name}</h3>
            <ins className={styles.servicePrice}>$ 250</ins>
          </div>
          <p className={styles.serviceTeknoligi}>{type}</p>
          <p className={styles.serviceText}>{description}</p>
        </div>
        <div className={styles.buttonBlock}>
          {selection === name ? (
            <SuccessOrderDecorator decoratorName="small" />
          ) : (
            <button onClick={() => handleClick(name)} className={styles.serviceButton}>
              Choose exam
            </button>
          )}
        </div>
      </article>
    </div>
  );
}
