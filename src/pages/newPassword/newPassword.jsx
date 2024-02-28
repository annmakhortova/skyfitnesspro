import React from "react";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../UI/Logo/Logo";
import style from "./NewPassword.module.scss";
// import { useParams } from "react-router-dom";

export const NewPassword = () => {
    // const params = useParams();

    return (
        <div className={style.container}>
            <header>
              <Logo className={style.logo} />
            </header>
    
            <div className={style.inputs}>
                <header className={style.inputName}>Новый пароль:</header>
                <div className={style.input}>
                    <input type="text" placeholder="Пароль"/>
                </div>
                <div className={style.input}>
                    <input type="text" placeholder="Повторите пароль"/>
                </div>
            </div>
    
            <div className={style.buttonsContainer}>
            <Button children={"Сохранить"} />
            </div>
    
        </div>
    )
    
}


//export default LoginSignup

