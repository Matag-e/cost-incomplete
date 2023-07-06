import styles from './SubmitButton.module.css'

const SubmitButton = ({ text}) => {
    return (
        <div className={styles.formControl}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubmitButton