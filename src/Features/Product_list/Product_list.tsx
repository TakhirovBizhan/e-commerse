import styles from './Product_list.module.css'
import Text from '../../Components/Text';

export const Product_list = () => {
  return (
    <div className={styles.container}>
        <div className={styles.count__block}>
            <Text view='title' color='primary'>Total Product:</Text>
            <Text view='p-20' color='accent'>48</Text>
        </div>
    </div>
  )
}

export default Product_list;