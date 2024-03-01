import React, { useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../UI/Logo/Logo";
import style from "./NewLogin.module.scss";
// import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const NewLogin = () => {
    const [login, setLogin] = useState("");
    // useNavigate hook for navigation
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setLogin(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Creating new login with:", login);
        // After login creation logic

        navigate('/profile'); 
    };

    return (
        <div className={style.container}>
            <header>
                <Logo className={style.logo} />
            </header>
    
            <form onSubmit={handleSubmit} className={style.inputs}>
                <header className={style.inputName}>Новый логин:</header>
                <div className={style.input}>
                    <input
                        type="text"
                        placeholder="Логин"
                        value={login}
                        onChange={handleInputChange}
                    />
                </div>
    
                <div className={style.buttonsContainer}>
                    <Button type="submit">Сохранить</Button>
                </div>
            </form>
        </div>
    );
};


//export default LoginSignup

