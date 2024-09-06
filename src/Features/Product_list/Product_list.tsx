import styles from './Product_list.module.css'
import Text from '../../Components/Text';
import { useEffect } from 'react';
import axios from 'axios';

export const Product_list = () => {

  interface ICategory {
    id: number,
    name: string,
    image: string,
    creationAt: Date,
    updatedAt: Date
  }

  interface IData {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: ICategory,
    creationAt: string,
    updatedAt: string

  }

  useEffect(() => {
    const fetch = async () => {
      const resultReq = await axios({
        method: 'get',
        url: 'https://api.escuelajs.co/api/v1/products'
      });

      const result: IData = resultReq.data;

      console.log('result', result);
    }
  
    fetch();
  }, []);

  return (
    <div className={styles.container}>
        <div className={styles.count__block}>
            <Text view='title' color='primary' className={styles.count__text}>Total Product:</Text>
            <Text view='p-20' color='accent'>48</Text>
        </div>
    </div>
  )
}

export default Product_list;