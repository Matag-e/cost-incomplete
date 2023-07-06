import styles from './Loading.module.css'
import Load from '../../img/loading.svg'

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
        <img className={styles.loader} src={Load} alt="Loading" />
        </div>
  )
}

export default Loading