import Text from "../../Components/Text";
import Product_list from "../../Features/Product_list";
import Search from "../../Features/Search/Search";
import styles from './Home.module.css';
const Home = () => {
  return (
    <div>
      <div className={styles.text__container}>
        <Text tag="h2" view="title" color="primary">Products</Text>
        <Text view="p-20" color="secondary" className={styles.text__item}>We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item</Text>
      </div>
      <Search />
      <Product_list />
    </div>
  )
}

export default Home;