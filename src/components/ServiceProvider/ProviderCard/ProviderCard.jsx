import styles from './ProviderCard.module.scss';
import provider from '../../../assets/image/png/Provider.png';
import SuccessOrderDecorator from '../../ProgressBar/OrderProgress/SuccessOrderDecorator/SuccessOrderDecorator';

export default function ProviderCard({ handleClick, name, location, city, selection }) {
  return (
    <article className={styles.provider} onClick={() => handleClick(name)}>
      <div className={styles.outerBorder}>
        <div className={styles.innerBorder}>
          <div className={styles.imageTitleBlock}>
            <div className={styles.providerImageBlock}>
              <img src={provider} alt="provider image" />
            </div>
            <div className={styles.providerTitleBlock}>
              <h3 className={styles.providerTitle}>{name}</h3>
            </div>
          </div>
          <div className className={styles.providerInfoBlock}>
            <div className={styles.providerCityBlock}>
              <p>City:</p>
              <p>{city}</p>
            </div>
            <div className={styles.providerLocationBlock}>
              <p>Location:</p>
              <p>{location}</p>
            </div>
            <div className={styles.checkedBlock}>
              {selection === name && <SuccessOrderDecorator decoratorName="small" />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
