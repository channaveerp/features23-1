import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

const FilterData = () => {
  const [data, setData] = useState([]);

  const fetchingData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setData(data);
    } catch (err) {
      console.log('err:', err);
    }
  };
    console.log('data:', data);
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className={styles.mainCont}>
      <section>
        <div className={styles.labelWithRadio}>
          <input type='radio' />
          <label htmlFor=''>men</label>
        </div>
        <div className={styles.labelWithRadio}>
          <input type='radio' />
          <label htmlFor=''>women</label>
        </div>
        <div className={styles.labelWithRadio}>
          <input type='radio' />
          <label htmlFor=''>Electronics</label>
        </div>
        <div className={styles.labelWithRadio}>
          <input type='radio' />
          <label htmlFor=''>Jewellery</label>
        </div>
      </section>
      <section className={styles.dataCont}>
        {data.map((item,index)=>
        <div>
          <div className={styles.imgCont}>
            <img src={item.image} alt="image" />
          </div>
         
        </div>)}
      </section>
    </div>
  );
};

export default FilterData;

// category
// : 
// "men's clothing"
// description
// : 
// "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket."
// id
// : 
// 2
// image
// : 
// "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
// price
// : 
// 22.3
// rating
// : 
// {rate: 4.1, count: 259}
// title
// : 
// "Mens Casual Premium Slim Fit T-Shirts "