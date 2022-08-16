import style from '../styles/intro.module.css';
import Image from 'next/image';
import Avocado from '../public/img/Avocado.png';
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle
        backgroundColor="#01c686"
        top="-45vh"
        left="-45vh"
        className={style.circle1}
      />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <h1 className={style.title}>
          <span className={style.brandName}>AV0CAD0</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={style.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={style.button}>DISCOVER</button>
      </div>
      <div className={style.card}>
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
  );
};

export default Intro;
