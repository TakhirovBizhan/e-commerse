import styles from './Categories.module.css'
import Text from "../../Components/Text";

export const Categories = () => {
  return (
    <div>
    <div className={styles.text__container}>
      <Text tag="h2" view="title" color="primary">Categories</Text>
    </div>
  </div>
  )
}
export default Categories;