import styles from './textFieldCustom.module.css'

function TextFieldCustom ({type,name,defaultValue,placeholder}){
    return <div className={styles.input}>
    <input type={type} name={name} defaultValue={defaultValue} placeholder={placeholder} />
    </div>
}

export default TextFieldCustom;