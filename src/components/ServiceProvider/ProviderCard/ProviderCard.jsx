import styles from './ProviderCard.module.scss';
import provider from '../../../assets/image/Provider.png';

export default function ProviderCard() {
  return (
    <div className={styles.providerWrapper}>
      <article className={styles.provider}>
        <div className={styles.outerBorder}>
          <div className={styles.innerBorder}>
            <div className={styles.providerImageBlock}>
              <img src={provider} alt="provider image" />
            </div>
            <div className={styles.providerTitleBlock}>
              <h3 className={styles.providerTitle}>Salvador Convention Center</h3>
            </div>
            <div className={styles.providerCityBlock}>
              <p>City:</p>
              <p>Lima</p>
            </div>
            <div className={styles.providerLocationBlock}>
              <p>Location:</p>
              <p>1km from center</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
