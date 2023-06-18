import React from 'react';
import styles from './page.module.css';
import { data } from './constant';

console.log(
  'data:',
  data.map((e) => console.log(e.id))
);

const Cirriculum = () => {
  return (
    <div>
      {data.map((e, index) => (
        <div className={styles.content}>
          <div className={styles.textCont}>
            <h1>{e.title}</h1>
            <div className={styles.desc}>
              {e.desc.map((item) => (
                <>
                  <div>{item}</div>
                </>
              ))}
            </div>
          </div>
          <div className={styles.imgCont}>
            <img src={e.img} className={styles.img} />
            <span className={styles.number}>{e.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cirriculum;
