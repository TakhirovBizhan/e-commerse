import Text from "../../Components/Text";
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={styles.main__container}>
        <Text tag="h2" view="title" color="primary">Products</Text>
        <Text view="p-20" color="secondary" className={styles.main__container__text}>We display products based on the latest products we have, if you want
        to see our old products please enter the name of the item</Text>
      </div>
    </div>
  )
}

export default Home;