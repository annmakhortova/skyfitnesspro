import React from "react";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../UI/Logo/Logo";
import style from "./NewLogin.module.scss";
// import { useParams } from "react-router-dom";

export const NewLogin = () => {
    // const params = useParams();

    return (
        <div className={style.container}>
            <header>
              <Logo className={style.logo} />
            </header>
    
            <div className={style.inputs}>
                <header className={style.inputName}>Новый логин:</header>
                <div className={style.input}>
                    <input type="text" placeholder="Логин"/>
                </div>
            </div>
    
            <div className={style.buttonsContainer}>
            <Button children={"Сохранить"} />
            </div>
    
        </div>
    )
    
}


//export default LoginSignup

