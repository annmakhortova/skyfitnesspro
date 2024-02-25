import React from "react";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../UI/Logo/Logo";
import style from "./Login.module.scss";
// import { useParams } from "react-router-dom";

export const Login = () => {
    // const params = useParams();

    return (
        <div className={style.container}>
            <header>
              <Logo className={style.logo} />
            </header>
    
            <div className={style.inputs}>
                <div className={style.input}>
                    <input type="text" placeholder="Логин"/>
                </div>
                <div className={style.input}>
                    <input type="password"placeholder="Пароль"/>
                </div>
            </div>
    
            <div className={style.buttonsContainer}>
             <Button children={"Войти"} />
             <button className={style.registerButton}>Зарегистрироваться</button>
            </div>
    
        </div>
    )
    
}


//export default LoginSignup

