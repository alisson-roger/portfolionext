import styles from '../styles/intro.module.css';
import Image from 'next/image';
import Avocado from '../public/img/Avocado.png';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
        <Circle backgroundColor="#01c686" right="-180vh" />
        <h1 className={styles.title}>
          <span className={styles.brand}>AV0CAD0</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Mauris lacinia velit sed nisl dictum, in pellentesque neque cursus.
          Vivamus in ipsum vel arcu rutrum vehicula. Praesent sed metus.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <div className={styles.card}>
          <Image
            src={Avocado}
            alt=""
            width="100"
            height="100"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
