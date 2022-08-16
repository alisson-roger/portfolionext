import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref />
          <span className={styles.linkText}>WORK WITH US</span>
          <Image src="/img/link.png" alt="" width="40px" height="40px" />
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br />
          USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@GMAIL.COM <br />
          +55 45 12345 6789
        </div>
      </div>
      <div className={styles.cadS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br />
          USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@GMAIL.COM <br />
          +55 45 12345 6789
        </div>
      </div>
    </div>
  );
};

export default Footer;
