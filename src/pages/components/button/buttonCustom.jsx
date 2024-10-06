import styles from './button.module.css'
function ButtonCustom ({title, onClick}){
    return (<div className={styles.btn}>
        <button onClick={onClick}>{title}</button>
        </div>)
}

export default ButtonCustom;