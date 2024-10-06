import TextFieldCustom from "../components/textField/textFieldCustom";
import ButtonCustom from "../components/button/buttonCustom";
import styles from './logIn.module.css'
import { useNavigate } from "react-router-dom";
function Login (){
    const navigate = useNavigate();
    //this function perform when user click to sign up their new account
    function pushToSignUp(){
        console.log(':::::::::: Navigate to sign up  :::::::');
        navigate('/signUp')
    }
    function pushToHome(){
        console.log(':::::::::: Navigate to home  :::::::');
        navigate('/home')
    }
    return (<div className={styles.container}>
       <div>
            <p id={styles.title}>MY MOVIE</p>
            <TextFieldCustom name="email" placeholder="Email or phone numbber" type = "email" /><br/>
            <TextFieldCustom name="password" placeholder="Password" type = "password" /><br/>
            <ButtonCustom title={'Login'} onClick={pushToHome}/>
            <br/>
            <p>OR</p>
            <br/>
            <ButtonCustom title={'Sign Up'} onClick={pushToSignUp}/>
            <br/>
            <p id={styles.btt}>
            Create your account first before get into our website. When success you can enjoy with million of our interested trailer videos.
            </p>
       </div>
        </div>)
}

export default Login;