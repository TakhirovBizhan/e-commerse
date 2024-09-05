import Text from "../../Components/Text";
import styles from './Home.module.css';
import Input from "../../Components/Input";
import MultiDropdown from "../../Components/MultiDropdown";
import Button from "../../Components/Button";

const Home = () => {
  return (
    <div>
      <div className={styles.text__container}>
        <Text tag="h2" view="title" color="primary">Products</Text>
        <Text view="p-20" color="secondary" className={styles.text__item}>We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item</Text>
      </div>
      <div>
        <div className={styles.search__container}>
          <div className={styles.search__block}>
            <Input value="" onChange={() => ''} placeholder="Seacrh product" className={styles.search__block__item}></Input>
            <Button className={styles.search__block__button}>Find now</Button>
          </div>
          <MultiDropdown options={[
            { key: 'msk', value: 'Москва' },
            { key: 'spb', value: 'Санкт-Петербург' },
            { key: 'ekb', value: 'Екатеринбург' }
          ]}
            value={[{ key: 'msk', value: 'Москва' }]}
            onChange={() => ''}
            getTitle={() => ''}
            className={styles.search__item__multidropdown} />
        </div>
      </div>
    </div>
  )
}

export default Home;