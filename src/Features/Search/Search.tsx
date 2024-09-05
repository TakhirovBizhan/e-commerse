import styles from './Search.module.css'
import Button from '../../Components/Button';
import Input from '../../Components/Input';
import MultiDropdown from '../../Components/MultiDropdown';

export const Search = () => {
  return (
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
  )
}

export default Search;