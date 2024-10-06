import TextFieldCustom from "../components/textField/textFieldCustom";
import ButtonCustom from "../components/button/buttonCustom";
import styles from './signUp.module.css'
import { useNavigate } from "react-router-dom";
function SignUp (){
    const navigate = useNavigate();
    //this function perform when user click create  their new account
    function pushToHome(){
        console.log(':::::::::: Navigate to home  :::::::');
        navigate('/home')
    }
    return (<div className={styles.container}>
       <div>
            <p id={styles.title}>MY MOVIE</p>
            <TextFieldCustom name="f_nam" placeholder="First name" type = "text" /><br/>
            <TextFieldCustom name="l_name" placeholder="Last name" type = "text" /><br/>
            <TextFieldCustom name="l_name" placeholder="dd/mm/yy" type = "date" /><br/>
            <ButtonCustom title={'Create Account'} onClick={pushToHome}/>
       </div>
        </div>)
}

export default SignUp;