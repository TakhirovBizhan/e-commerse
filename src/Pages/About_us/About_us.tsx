
import styles from './About_us.module.css'
import Text from "../../Components/Text";

export const About_us = () => {
  return (
    <div>
      <div className={styles.text__container}>
        <Text tag="h2" view="title" color="primary">About us</Text>
        <Text view="p-20" color="secondary" className={styles.text__item}>We are selling furniture!</Text>
      </div>
    </div>
  )
}

export default About_us;
